import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenjualanPeritemComponent } from './penjualan-peritem.component';

describe('PenjualanPeritemComponent', () => {
  let component: PenjualanPeritemComponent;
  let fixture: ComponentFixture<PenjualanPeritemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenjualanPeritemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenjualanPeritemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
