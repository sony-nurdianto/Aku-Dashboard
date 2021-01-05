import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

import { ManajementVendorComponent } from './manajement-vendor.component';
import { DaftarVendorComponent } from './daftar-vendor/daftar-vendor.component';
import { TambahVendorComponent } from './tambah-vendor/tambah-vendor.component';


const routes: Routes = [
  {
    path: '',
    component: ManajementVendorComponent
  },
  {
    path: 'daftar-vendor',
    component: DaftarVendorComponent
  },
  {
    path: 'tambah-vendor',
    component: TambahVendorComponent
  }
]




@NgModule({
  declarations: [DaftarVendorComponent, TambahVendorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ManajementVendorModule { }
