import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { LaporanTransaksiComponent } from './laporan-transaksi.component';
import { SemuaTransaksiComponent } from './semua-transaksi/semua-transaksi.component';
import { RangkumanTransaksiComponent } from './rangkuman-transaksi/rangkuman-transaksi.component';
import { TransaksiQrisComponent } from './transaksi-qris/transaksi-qris.component';
import { TransaksiAkuFoodComponent } from './transaksi-aku-food/transaksi-aku-food.component';
import { PenjualanPeritemComponent } from './penjualan-peritem/penjualan-peritem.component';
import { PenjualanPerjamComponent } from './penjualan-perjam/penjualan-perjam.component';
import { TransaksiPerKasirComponent } from './transaksi-per-kasir/transaksi-per-kasir.component';
import { LaporanHppComponent } from './laporan-hpp/laporan-hpp.component';
import { LaporanLabaRugiComponent } from './laporan-laba-rugi/laporan-laba-rugi.component';
import { TransaksiVoidComponent } from './transaksi-void/transaksi-void.component';


const routes: Routes = [
  {
    path: '',
    component: LaporanTransaksiComponent
  },
  {
    path: 'semua-transaksi',
    component: SemuaTransaksiComponent
  },
  {
    path: 'rangkuman-transaksi',
    component: RangkumanTransaksiComponent
  },
  {
    path: 'transaksi-qris',
    component: TransaksiQrisComponent
  },
  {
    path: 'transaksi-aku-food',
    component: TransaksiAkuFoodComponent
  },
  {
    path: 'penjualan-perItem',
    component: PenjualanPeritemComponent
  },
  {
    path: 'penjualan-perJam',
    component: PenjualanPerjamComponent
  },
  {
    path: 'transaksi-perkasir',
    component: TransaksiPerKasirComponent
  },
  {
    path: 'laporan-hpp',
    component: LaporanHppComponent
  },
  {
    path: 'laporan-laba-rugi',
    component: LaporanLabaRugiComponent
  },
  {
    path: 'transaksi-void',
    component: TransaksiVoidComponent
  }
]


@NgModule({
  declarations: [SemuaTransaksiComponent, RangkumanTransaksiComponent, TransaksiQrisComponent, TransaksiAkuFoodComponent, PenjualanPeritemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LaporanTransaksiModule { }
