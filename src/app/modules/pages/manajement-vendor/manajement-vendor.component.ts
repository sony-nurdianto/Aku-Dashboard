import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manajement-vendor',
  templateUrl: './manajement-vendor.component.html',
  styleUrls: ['./manajement-vendor.component.scss']
})
export class ManajementVendorComponent implements OnInit {

  isSubmenuOpen = false
  parentRoute = '/manajement-vendor'
  navLinkItem = [
    {
      link: 'Daftar Vendor',
      route: this.parentRoute + '/daftar-vendor'
    },
    {
      link: 'Tambah Tambah',
      route: this.parentRoute + '/tambah-vendor'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  openSubMnu() {
    this.isSubmenuOpen = !this.isSubmenuOpen

  }

}
