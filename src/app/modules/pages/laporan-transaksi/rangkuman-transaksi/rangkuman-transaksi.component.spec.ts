import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangkumanTransaksiComponent } from './rangkuman-transaksi.component';

describe('RangkumanTransaksiComponent', () => {
  let component: RangkumanTransaksiComponent;
  let fixture: ComponentFixture<RangkumanTransaksiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangkumanTransaksiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RangkumanTransaksiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
