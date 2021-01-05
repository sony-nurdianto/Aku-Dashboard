import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryUpdateStockComponent } from './history-update-stock.component';

describe('HistoryUpdateStockComponent', () => {
  let component: HistoryUpdateStockComponent;
  let fixture: ComponentFixture<HistoryUpdateStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryUpdateStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryUpdateStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
