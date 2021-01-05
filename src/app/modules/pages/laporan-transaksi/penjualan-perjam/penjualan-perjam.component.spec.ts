import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenjualanPerjamComponent } from './penjualan-perjam.component';

describe('PenjualanPerjamComponent', () => {
  let component: PenjualanPerjamComponent;
  let fixture: ComponentFixture<PenjualanPerjamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenjualanPerjamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenjualanPerjamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
