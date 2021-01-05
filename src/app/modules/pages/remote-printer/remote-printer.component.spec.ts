import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemotePrinterComponent } from './remote-printer.component';

describe('RemotePrinterComponent', () => {
  let component: RemotePrinterComponent;
  let fixture: ComponentFixture<RemotePrinterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemotePrinterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemotePrinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
