import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarVendorComponent } from './daftar-vendor.component';

describe('DaftarVendorComponent', () => {
  let component: DaftarVendorComponent;
  let fixture: ComponentFixture<DaftarVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
