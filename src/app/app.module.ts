import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module'
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout'

import { SideNavComponent } from './modules/components/side-nav/side-nav.component'
import { NavComponent } from './modules/components/nav/nav.component'
import { SideNavListComponent } from './modules/components/side-nav/side-nav-list/side-nav-list.component'

import { LaporanTransaksiComponent } from './modules/pages/laporan-transaksi/laporan-transaksi.component'
import { StockItemMenuComponent } from './modules/pages/stock-item-menu/stock-item-menu.component'
import { ManajemenItemMenuComponent } from './modules/pages/manajemen-item-menu/manajemen-item-menu.component'
import { EventDiscountComponent } from './modules/pages/event-discount/event-discount.component'
import { ManajementInventoryComponent } from './modules/pages/manajement-inventory/manajement-inventory.component'
import { ManajementVendorComponent } from './modules/pages/manajement-vendor/manajement-vendor.component'
import { ManajementResepComponent } from './modules/pages/manajement-resep/manajement-resep.component'
import { RemotePrinterComponent } from './modules/pages/remote-printer/remote-printer.component'
import { LoginComponent } from './modules/pages/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    NavComponent,
    SideNavListComponent,
    LaporanTransaksiComponent,
    StockItemMenuComponent,
    ManajemenItemMenuComponent,
    EventDiscountComponent,
    ManajementInventoryComponent,
    ManajementVendorComponent,
    ManajementResepComponent,
    RemotePrinterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FlexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
