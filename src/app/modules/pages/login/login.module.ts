import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router'
import { MaterialModule } from './../../../material/material.module'
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout'

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    FlexModule
  ]
})
export class LoginModule { }
