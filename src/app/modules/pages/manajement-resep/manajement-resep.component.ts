import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manajement-resep',
  templateUrl: './manajement-resep.component.html',
  styleUrls: ['./manajement-resep.component.scss']
})
export class ManajementResepComponent implements OnInit {

  isSubmenuOpen = false
  parentRoute = '/manajement-resp'
  navLinkItem = [
    {
      link: 'Daftar Resep',
      route: this.parentRoute + '/daftar-resep'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  openSubMnu() {
    this.isSubmenuOpen = !this.isSubmenuOpen

  }
}
