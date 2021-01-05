import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manajement-inventory',
  templateUrl: './manajement-inventory.component.html',
  styleUrls: ['./manajement-inventory.component.scss']
})
export class ManajementInventoryComponent implements OnInit {

  isSubmenuOpen = false
  parentRoute = '/manajement-inventory'
  navLinkItem = [
    {
      link: 'Daftar Inventory',
      route: this.parentRoute + '/daftar-inventory'
    },
    {
      link: 'Tambah Inventory',
      route: this.parentRoute + '/tambah-inventory'
    },
    {
      link: 'Update Stock Inventory',
      route: this.parentRoute + '/update-stock-inventory'
    },
    {
      link: 'Impor Data Inventory',
      route: this.parentRoute + '/import-data-inventory'
    },
    {
      link: 'history-update-inventory',
      route: this.parentRoute + '/history-update-inventory'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  openSubMnu() {
    this.isSubmenuOpen = !this.isSubmenuOpen

  }


}
