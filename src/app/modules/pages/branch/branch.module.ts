import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchComponent } from './branch.component';
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    component: BranchComponent
  }
]



@NgModule({
  declarations: [BranchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BranchModule { }
