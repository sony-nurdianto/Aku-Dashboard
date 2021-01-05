import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiVoidComponent } from './transaksi-void.component';

describe('TransaksiVoidComponent', () => {
  let component: TransaksiVoidComponent;
  let fixture: ComponentFixture<TransaksiVoidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransaksiVoidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiVoidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
