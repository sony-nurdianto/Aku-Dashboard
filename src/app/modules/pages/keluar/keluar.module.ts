import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { KeluarComponent } from './keluar.component';

const routes: Routes = [
  {
    path: '',
    component: KeluarComponent
  }
]


@NgModule({
  declarations: [KeluarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class KeluarModule { }
