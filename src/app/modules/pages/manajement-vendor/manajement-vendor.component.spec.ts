import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManajementVendorComponent } from './manajement-vendor.component';

describe('ManajementVendorComponent', () => {
  let component: ManajementVendorComponent;
  let fixture: ComponentFixture<ManajementVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManajementVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManajementVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
