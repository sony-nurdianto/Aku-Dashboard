import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaporanTransaksiComponent } from './laporan-transaksi.component';

describe('LaporanTransaksiComponent', () => {
  let component: LaporanTransaksiComponent;
  let fixture: ComponentFixture<LaporanTransaksiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaporanTransaksiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaporanTransaksiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
