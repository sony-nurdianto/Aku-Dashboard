import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiQrisComponent } from './transaksi-qris.component';

describe('TransaksiQrisComponent', () => {
  let component: TransaksiQrisComponent;
  let fixture: ComponentFixture<TransaksiQrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransaksiQrisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiQrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
