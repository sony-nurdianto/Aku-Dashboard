import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'branch',
    loadChildren: () => import('./modules/pages/branch/branch.module').then(m => m.BranchModule)
  },
  {
    path: 'gabung-aku-food',
    loadChildren: () => import('./modules/pages/gabung-aku-food/gabung-aku-food.module').then(m => m.GabungAkuFoodModule)
  },
  {
    path: 'metode-pembayaran',
    loadChildren: () => import('./modules/pages/metode-pembayaran/metode-pembayaran.module').then(m => m.MetodePembayaranModule)
  },
  {
    path: 'subscription',
    loadChildren: () => import('./modules/pages/subscription/subscription.module').then(m => m.SubscriptionModule)
  },
  {
    path: 'machine',
    loadChildren: () => import('./modules/pages/machine/machine.module').then(m => m.MachineModule)
  },
  {
    path: 'laporan-keuangan',
    loadChildren: () => import('./modules/pages/laporan-transaksi/laporan-transaksi.module').then(m => m.LaporanTransaksiModule)
  },
  {
    path: 'kategory',
    loadChildren: () => import('./modules/pages/kategory/kategory.module').then(m => m.KategoryModule)
  },
  {
    path: 'stock-item-menu',
    loadChildren: () => import('./modules/pages/stock-item-menu/stock-item-menu.module').then(m => m.StockItemMenuModule)
  },
  {
    path: 'manajemen-item-menu',
    loadChildren: () => import('./modules/pages/manajemen-item-menu/manajemen-item-menu.module').then(m => m.ManajemenItemMenuModule)
  },
  {
    path: 'event-discount',
    loadChildren: () => import('./modules/pages/event-discount/event-discount.module').then(m => m.EventDiscountModule)
  },
  {
    path: 'manajement-inventory',
    loadChildren: () => import('./modules/pages/manajement-inventory/manajement-inventory.module').then(m => m.ManajementInventoryModule)
  },
  {
    path: 'manajement-vendor',
    loadChildren: () => import('./modules/pages/manajement-vendor/manajement-vendor.module').then(m => m.ManajementVendorModule)
  },
  {
    path: 'manajement-resp',
    loadChildren: () => import('./modules/pages/manajement-resep/manajement-resep.module').then(m => m.ManajementResepModule)
  },
  {
    path: 'remote-printer',
    loadChildren: () => import('./modules/pages/remote-printer/remote-printer.module').then(m => m.RemotePrinterModule)
  },
  {
    path: 'presensi',
    loadChildren: () => import('./modules/pages/presensi/presensi.module').then(m => m.PresensiModule)
  },
  {
    path: 'manajement-akun',
    loadChildren: () => import('./modules/pages/manajement-akun/manajement-akun.module').then(m => m.ManajementAkunModule)
  },
  {
    path: 'keluar',
    loadChildren: () => import('./modules/pages/keluar/keluar.module').then(m => m.KeluarModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
