import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

import { ManajemenItemMenuComponent } from './manajemen-item-menu.component';
import { DaftarItemComponent } from './daftar-item/daftar-item.component';
import { TambahItemComponent } from './tambah-item/tambah-item.component';
import { ImportItemComponent } from './import-item/import-item.component';
import { HubungkanPrinterComponent } from './hubungkan-printer/hubungkan-printer.component';

const routes: Routes = [
  {
    path: '',
    component: ManajemenItemMenuComponent
  },
  {
    path: 'daftar-item',
    component: DaftarItemComponent
  },
  {
    path: 'tambah-item',
    component: TambahItemComponent
  },
  {
    path: 'import-item',
    component: ImportItemComponent
  },
  {
    path: 'hubungkan-printer',
    component: HubungkanPrinterComponent
  }
]

@NgModule({
  declarations: [DaftarItemComponent, TambahItemComponent, ImportItemComponent, HubungkanPrinterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ManajemenItemMenuModule { }
