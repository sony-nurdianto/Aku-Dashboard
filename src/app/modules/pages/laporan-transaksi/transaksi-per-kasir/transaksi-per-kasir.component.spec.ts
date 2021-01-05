import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiPerKasirComponent } from './transaksi-per-kasir.component';

describe('TransaksiPerKasirComponent', () => {
  let component: TransaksiPerKasirComponent;
  let fixture: ComponentFixture<TransaksiPerKasirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransaksiPerKasirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiPerKasirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
