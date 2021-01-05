import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemuaTransaksiComponent } from './semua-transaksi.component';

describe('SemuaTransaksiComponent', () => {
  let component: SemuaTransaksiComponent;
  let fixture: ComponentFixture<SemuaTransaksiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemuaTransaksiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemuaTransaksiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
