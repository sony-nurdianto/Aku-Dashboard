import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImporDataInventoryComponent } from './impor-data-inventory.component';

describe('ImporDataInventoryComponent', () => {
  let component: ImporDataInventoryComponent;
  let fixture: ComponentFixture<ImporDataInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImporDataInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImporDataInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
