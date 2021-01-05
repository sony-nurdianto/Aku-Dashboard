import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laporan-transaksi',
  templateUrl: './laporan-transaksi.component.html',
  styleUrls: ['./laporan-transaksi.component.scss']
})
export class LaporanTransaksiComponent implements OnInit {

  isSubmenuOpen = false
  parentRoute = '/laporan-keuangan'
  navLinkItem = [
    {
      link: 'Semua Transaksi',
      route: this.parentRoute + '/semua-transaksi'
    },
    {
      link: 'Rangkuman Transaksi',
      route: this.parentRoute + '/rangkuman-transaksi'
    },
    {
      link: 'Transaksi Qris',
      route: this.parentRoute + '/transaksi-qris'
    },
    {
      link: 'Transaksi AkuFood',
      route: this.parentRoute + '/transaksi-aku-food'
    },
    {
      link: 'Penjualan Per Item',
      route: this.parentRoute + '/penjualan-perItem'
    },
    {
      link: 'Penjualan Per Jam',
      route: this.parentRoute + '/penjualan-perJam'
    },
    {
      link: 'Transaksi Per Kasir',
      route: this.parentRoute + '/transaksi-perkasir'
    },
    {
      link: 'Laporan Hpp',
      route: this.parentRoute + '/laporan-hpp'
    },
    {
      link: 'Laporan Laba/Rugi',
      route: this.parentRoute + '/laporan-laba-rugi'
    },
    {
      link: 'Transaksi Void',
      route: this.parentRoute + '/transaksi-void'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

  openSubMnu() {
    this.isSubmenuOpen = !this.isSubmenuOpen

  }

}
