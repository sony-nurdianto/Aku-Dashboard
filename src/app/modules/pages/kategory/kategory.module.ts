import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KategoryComponent } from './kategory.component';
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    component: KategoryComponent
  }
]



@NgModule({
  declarations: [KategoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class KategoryModule { }
