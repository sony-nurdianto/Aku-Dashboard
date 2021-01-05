import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GabungAkuFoodComponent } from './gabung-aku-food.component';

describe('GabungAkuFoodComponent', () => {
  let component: GabungAkuFoodComponent;
  let fixture: ComponentFixture<GabungAkuFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GabungAkuFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GabungAkuFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
