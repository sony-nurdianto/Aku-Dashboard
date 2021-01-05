import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachineComponent } from './machine.component';
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    component: MachineComponent
  }
]


@NgModule({
  declarations: [MachineComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MachineModule { }
