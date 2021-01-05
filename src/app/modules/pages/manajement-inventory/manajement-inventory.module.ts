import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

import { ManajementInventoryComponent } from './manajement-inventory.component';
import { DaftarInventoryComponent } from './daftar-inventory/daftar-inventory.component';
import { TambahInventoryComponent } from './tambah-inventory/tambah-inventory.component';
import { UpdateStockInventoryComponent } from './update-stock-inventory/update-stock-inventory.component';
import { ImporDataInventoryComponent } from './impor-data-inventory/impor-data-inventory.component';
import { HistoryUpdateInventoryComponent } from './history-update-inventory/history-update-inventory.component';

const routes: Routes = [
  {
    path: '',
    component: ManajementInventoryComponent
  },
  {
    path: 'daftar-inventory',
    component: DaftarInventoryComponent
  },
  {
    path: 'tambah-inventory',
    component: TambahInventoryComponent
  },
  {
    path: 'update-stock-inventory',
    component: UpdateStockInventoryComponent
  },
  {
    path: 'import-data-inventory',
    component: ImporDataInventoryComponent
  },
  {
    path: 'history-update-inventory',
    component: HistoryUpdateInventoryComponent
  }
]

@NgModule({
  declarations: [DaftarInventoryComponent, TambahInventoryComponent, UpdateStockInventoryComponent, ImporDataInventoryComponent, HistoryUpdateInventoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ManajementInventoryModule { }
