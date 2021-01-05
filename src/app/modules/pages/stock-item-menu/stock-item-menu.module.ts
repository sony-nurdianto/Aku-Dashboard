import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'

import { StockItemMenuComponent } from './stock-item-menu.component';
import { TambahStockItemComponent } from './tambah-stock-item/tambah-stock-item.component';
import { HistoryUpdateStockComponent } from './history-update-stock/history-update-stock.component'


const routes: Routes = [
  {
    path: '',
    component: StockItemMenuComponent
  },
  {
    path: 'tambah-stock-item-menu',
    component: TambahStockItemComponent
  },
  {
    path: 'history-update-stock',
    component: HistoryUpdateStockComponent
  }
]


@NgModule({
  declarations: [TambahStockItemComponent, HistoryUpdateStockComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StockItemMenuModule { }
