import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item-menu',
  templateUrl: './stock-item-menu.component.html',
  styleUrls: ['./stock-item-menu.component.scss']
})
export class StockItemMenuComponent implements OnInit {
  isSubmenuOpen = false
  parentRoute = '/stock-item-menu'
  navLinkItem = [
    {
      link: 'Semua Transaksi',
      route: this.parentRoute + '/tambah-stock-item-menu'
    },
    {
      link: 'Rangkuman Transaksi',
      route: this.parentRoute + '/history-update-stock'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  openSubMnu() {
    this.isSubmenuOpen = !this.isSubmenuOpen

  }

}
