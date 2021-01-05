import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

import { EventDiscountComponent } from './event-discount.component';
import { DaftarEventComponent } from './daftar-event/daftar-event.component';

const routes: Routes = [
  {
    path: '',
    component: EventDiscountComponent
  },
  {
    path: 'daftar-item',
    component: DaftarEventComponent
  }
]


@NgModule({
  declarations: [DaftarEventComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EventDiscountModule { }
