import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { Component } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
export const routes: Routes = [
    {
        path:'',
        redirectTo:'app-home',
        pathMatch:'full'

    },
    {
        path: 'app-home',
        component: HomeComponent,
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
            path:'dashboard',
            component:DashboardComponent
            }
        ]
    }
];
