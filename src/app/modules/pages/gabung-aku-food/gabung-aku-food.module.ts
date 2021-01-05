import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GabungAkuFoodComponent } from './gabung-aku-food.component';
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    component: GabungAkuFoodComponent
  }
]

@NgModule({
  declarations: [GabungAkuFoodComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GabungAkuFoodModule { }
