import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { ManajementAkunComponent } from './manajement-akun.component';

const routes: Routes = [
  {
    path: '',
    component: ManajementAkunComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ManajementAkunModule { }
