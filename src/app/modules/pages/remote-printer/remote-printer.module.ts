import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { RemotePrinterComponent } from './remote-printer.component';
import { SetingPrinterComponent } from './seting-printer/seting-printer.component';

const routes: Routes = [
  {
    path: '',
    component: RemotePrinterComponent
  },
  {
    path: 'seting-printer',
    component: SetingPrinterComponent
  }
]

@NgModule({
  declarations: [SetingPrinterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RemotePrinterModule { }
