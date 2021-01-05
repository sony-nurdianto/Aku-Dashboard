import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarInventoryComponent } from './daftar-inventory.component';

describe('DaftarInventoryComponent', () => {
  let component: DaftarInventoryComponent;
  let fixture: ComponentFixture<DaftarInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
