import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiAkuFoodComponent } from './transaksi-aku-food.component';

describe('TransaksiAkuFoodComponent', () => {
  let component: TransaksiAkuFoodComponent;
  let fixture: ComponentFixture<TransaksiAkuFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransaksiAkuFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiAkuFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
