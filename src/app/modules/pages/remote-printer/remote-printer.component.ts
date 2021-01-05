import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remote-printer',
  templateUrl: './remote-printer.component.html',
  styleUrls: ['./remote-printer.component.scss']
})
export class RemotePrinterComponent implements OnInit {

  isSubmenuOpen = false
  parentRoute = '/remote-printer'
  navLinkItem = [
    {
      link: 'Seting Printer',
      route: this.parentRoute + '/seting-printer'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  openSubMnu() {
    this.isSubmenuOpen = !this.isSubmenuOpen

  }

}
