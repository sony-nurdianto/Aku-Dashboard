import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahStockItemComponent } from './tambah-stock-item.component';

describe('TambahStockItemComponent', () => {
  let component: TambahStockItemComponent;
  let fixture: ComponentFixture<TambahStockItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahStockItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahStockItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
