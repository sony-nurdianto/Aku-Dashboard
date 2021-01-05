import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahVendorComponent } from './tambah-vendor.component';

describe('TambahVendorComponent', () => {
  let component: TambahVendorComponent;
  let fixture: ComponentFixture<TambahVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
