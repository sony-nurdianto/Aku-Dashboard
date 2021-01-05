import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubungkanPrinterComponent } from './hubungkan-printer.component';

describe('HubungkanPrinterComponent', () => {
  let component: HubungkanPrinterComponent;
  let fixture: ComponentFixture<HubungkanPrinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HubungkanPrinterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HubungkanPrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
