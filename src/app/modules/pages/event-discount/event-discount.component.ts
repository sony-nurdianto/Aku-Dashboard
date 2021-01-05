import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-discount',
  templateUrl: './event-discount.component.html',
  styleUrls: ['./event-discount.component.scss']
})
export class EventDiscountComponent implements OnInit {
  isSubmenuOpen = false
  parentRoute = '/event-discount'
  navLinkItem = [
    {
      link: 'Daftar Event',
      route: this.parentRoute + '/daftar-item'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  openSubMnu() {
    this.isSubmenuOpen = !this.isSubmenuOpen

  }

}
