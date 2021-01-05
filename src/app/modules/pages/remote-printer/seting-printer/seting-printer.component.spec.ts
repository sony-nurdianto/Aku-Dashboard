import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetingPrinterComponent } from './seting-printer.component';

describe('SetingPrinterComponent', () => {
  let component: SetingPrinterComponent;
  let fixture: ComponentFixture<SetingPrinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetingPrinterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetingPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
