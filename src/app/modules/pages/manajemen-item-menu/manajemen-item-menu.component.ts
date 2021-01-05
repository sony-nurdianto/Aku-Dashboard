import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manajemen-item-menu',
  templateUrl: './manajemen-item-menu.component.html',
  styleUrls: ['./manajemen-item-menu.component.scss']
})
export class ManajemenItemMenuComponent implements OnInit {
  isSubmenuOpen = false
  parentRoute = '/manajemen-item-menu'
  navLinkItem = [
    {
      link: 'Daftar Item',
      route: this.parentRoute + '/daftar-item'
    },
    {
      link: 'Tambah Item',
      route: this.parentRoute + '/tambah-item'
    },
    {
      link: 'Import Item',
      route: this.parentRoute + '/import-item'
    },
    {
      link: 'Hubungkan Printer',
      route: this.parentRoute + '/hubungkan-printer'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  openSubMnu() {
    this.isSubmenuOpen = !this.isSubmenuOpen

  }



}
