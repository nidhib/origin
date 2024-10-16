import { ChangeDetectionStrategy, Component,inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { json } from 'express';
import { Router } from '@angular/router';
/** @title Simple form field */

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class HomeComponent {

  isLoginView: boolean = true;

  reg_user_obj: any =
    {
      first_name: '',
      last_name: '',
      email: '',
      pwd: ''
    }
  log_user_obj: any =
    {
      log_email: '',
      log_pwd: ''
    }

  doRegistration() {
    debugger;
    const localData = localStorage.getItem("loginData");
    if (localData != null) {
      const localArr = JSON.parse(localData);
      localArr.push(this.reg_user_obj);
      localStorage.setItem("loginData", JSON.stringify(localArr));
    }
    else {
      const localArr = [];
      localArr.push(this.reg_user_obj);
      localStorage.setItem("loginData", JSON.stringify(localArr));

    }
  }

  router = inject(Router);
 
  loginUser() {
    debugger;
    const localData = localStorage.getItem("loginData");
    if (localData != null) {
      const localArr = JSON.parse(localData);
      const isUserFound = localArr.find((user: any) => user.email == this.log_user_obj.log_email &&
        user.pwd == this.log_user_obj.log_pwd)
      alert("isUserFound =" + isUserFound);
      if (isUserFound != undefined) {
        alert("user found as :" + isUserFound.email + " pwd=" + isUserFound.pwd);
        this.router.navigateByUrl('dashboard');
      }else{
        alert("Name or password is wrong")
      }
    }else{
      alert("No user found")
    }
  }
}


/*
@Component({
  selector: 'form-field-overview-example',
  templateUrl: 'form-field-overview-example.html',
  styleUrl: 'form-field-overview-example.css',
  standalone: true,
  
})*/
