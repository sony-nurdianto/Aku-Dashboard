import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStockInventoryComponent } from './update-stock-inventory.component';

describe('UpdateStockInventoryComponent', () => {
  let component: UpdateStockInventoryComponent;
  let fixture: ComponentFixture<UpdateStockInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStockInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStockInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
