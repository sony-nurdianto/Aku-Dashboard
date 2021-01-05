import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManajementInventoryComponent } from './manajement-inventory.component';

describe('ManajementInventoryComponent', () => {
  let component: ManajementInventoryComponent;
  let fixture: ComponentFixture<ManajementInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManajementInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManajementInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
