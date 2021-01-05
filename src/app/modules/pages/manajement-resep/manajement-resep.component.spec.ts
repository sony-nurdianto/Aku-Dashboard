import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManajementResepComponent } from './manajement-resep.component';

describe('ManajementResepComponent', () => {
  let component: ManajementResepComponent;
  let fixture: ComponentFixture<ManajementResepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManajementResepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManajementResepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
