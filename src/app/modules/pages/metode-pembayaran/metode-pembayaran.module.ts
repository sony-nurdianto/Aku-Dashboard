import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetodePembayaranComponent } from './metode-pembayaran.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MetodePembayaranComponent
  }
]



@NgModule({
  declarations: [MetodePembayaranComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MetodePembayaranModule { }
