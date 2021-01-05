import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PengaturanComponent } from './pengaturan.component';
import { GantiKataSandiComponent } from './ganti-kata-sandi/ganti-kata-sandi.component';
import { BranchComponent } from './branch/branch.component';



@NgModule({
  declarations: [PengaturanComponent, GantiKataSandiComponent, BranchComponent],
  imports: [
    CommonModule
  ]
})
export class PengaturanModule { }
