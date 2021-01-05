import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

import { ManajementResepComponent } from './manajement-resep.component';
import { DaftarResepComponent } from './daftar-resep/daftar-resep.component';

const routes: Routes = [
  {
    path: '',
    component: ManajementResepComponent
  },
  {
    path: 'daftar-resep',
    component: DaftarResepComponent
  }
]

@NgModule({
  declarations: [DaftarResepComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ManajementResepModule { }
