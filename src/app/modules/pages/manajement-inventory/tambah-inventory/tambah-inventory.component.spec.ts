import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahInventoryComponent } from './tambah-inventory.component';

describe('TambahInventoryComponent', () => {
  let component: TambahInventoryComponent;
  let fixture: ComponentFixture<TambahInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
