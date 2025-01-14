var genreObject = {
  "Comedy Film": {
    "Short (under 90 minutes)": ["Happy", "Relaxed", "Feeling light", "Bored"],
    "Medium (90-120 minutes)": ["Happy", "Relaxed", "Feeling light", "Bored"],
    "Long (over 120 minutes)": ["Happy", "Relaxed", "Feeling light", "Bored"]
  },
  "Horror Film": {
    "Short (under 90 minutes)": ["Sad", "Bored", "Upset", "Excited"],
    "Medium (90-120 minutes)": ["Sad", "Bored", "Upset", "Excited"],
    "Long (over 120 minutes)": ["Sad", "Bored", "Excited"]
  },
  "Fantasy Film": {
    "Short (under 90 minutes)": ["Adventurous", "Happy", "Feeling light", "Bored", "Upset", "Sad"],
    "Medium (90-120 minutes)": ["Adventurous", "Happy", "Feeling light", "Bored", "Upset", "Sad"],
    "Long (over 120 minutes)": ["Adventurous", "Happy", "Feeling light", "Bored", "Upset", "Sad"]
  },
  "Adventurous  Film": {
    "Short (under 90 minutes)": ["Adventurous", "Happy", "Feeling light", "Bored", "Upset", "Sad"],
    "Medium (90-120 minutes)": ["Adventurous", "Happy", "Feeling light", "Bored", "Upset", "Sad"],
    "Long (over 120 minutes)": ["Adventurous", "Happy", "Feeling light", "Bored", "Upset", "Sad"]
  }
}
window.onload = function () {
  var genreSel = document.getElementById("genre");
  var durationSel = document.getElementById("duration");
  var moodSel = document.getElementById("mood");
  for (var x in genreObject) {
    genreSel.options[genreSel.options.length] = new Option(x, x);
  }
  genreSel.onchange = function () {
    //empty mood- and duration- dropdowns
    moodSel.length = 1;
    durationSel.length = 1;
    //display correct values
    for (var y in genreObject[this.value]) {
      durationSel.options[durationSel.options.length] = new Option(y, y);
    }
  }
  durationSel.onchange = function () {
    //empty mood dropdown
    moodSel.length = 1;
    //display correct values
    var z = genreObject[genreSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
      moodSel.options[moodSel.options.length] = new Option(z[i], z[i]);
    }
  }
}
function show_msg() {
  const movies = new Array("Funny chickens",
    "A day after tomorrow",
    "Spiderman",
    "That great day",
    "Lost land",
    "Child alone at home",
    "My wonderland");
  document.getElementById('hidden_div').style.display = "block";
  var msg = document.getElementById('hidden_div');
  var genre = document.getElementById('genre');
  const genre_value = genre.value;
  //alert("genre_value= "+genre_value);
  var duration = document.getElementById('duration');
  const duration_value = duration.value;
  //alert("duration_value= "+duration_value);
  var mood = document.getElementById('mood');
  const mood_value = mood.value;
  //alert("mood_value= "+mood_value);
  let movie_name = "movie";
  if (genre_value == "Comedy Film" && duration_value == "Short (under 90 minutes)") {
    movie_name = movies[0];
  }
  else if (genre_value == "Comedy Film" && duration_value == "Medium (90-120 minutes)") {
    movie_name = movies[1];
  }
  else if (genre_value == "Horror Film" && duration_value == "Short (under 90 minutes)") {
    movie_name = movies[2];
  }
  else if (genre_value == "Horror Film" && duration_value == "Medium (90-120 minutes)") {
    movie_name = movies[3];
  } else if (genre_value == "Fantasy Film" && duration_value == "Long (over 120 minutes)") {
    movie_name = movies[4];
  }
  else if (genre_value == "Fantasy Film" && duration_value == "Medium (90-120 minutes)") {
    movie_name = movies[5];
  }
  else if (genre_value == "Fantasy Film" && duration_value == "Medium (90-120 minutes)") {
    movie_name = movies[6];
  }
  else {
    movie_name = movies[6];
  }

  msg.innerHTML = "<b>" + "Based on your preferences, we recommend watching '" + movie_name + "' " + genre_value + " with a runtime of " +
    duration_value + ", perfect for your " + mood_value + " mood. Enjoy !" + "</b>";
}


