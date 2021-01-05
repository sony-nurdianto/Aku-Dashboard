import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { PresensiComponent } from './presensi.component';

const routes: Routes = [
  {
    path: '',
    component: PresensiComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PresensiModule { }
