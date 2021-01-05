import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryUpdateInventoryComponent } from './history-update-inventory.component';

describe('HistoryUpdateInventoryComponent', () => {
  let component: HistoryUpdateInventoryComponent;
  let fixture: ComponentFixture<HistoryUpdateInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryUpdateInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryUpdateInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
