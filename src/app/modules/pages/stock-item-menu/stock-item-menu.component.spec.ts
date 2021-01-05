import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemMenuComponent } from './stock-item-menu.component';

describe('StockItemMenuComponent', () => {
  let component: StockItemMenuComponent;
  let fixture: ComponentFixture<StockItemMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockItemMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
