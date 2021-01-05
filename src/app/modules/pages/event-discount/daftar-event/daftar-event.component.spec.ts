import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarEventComponent } from './daftar-event.component';

describe('DaftarEventComponent', () => {
  let component: DaftarEventComponent;
  let fixture: ComponentFixture<DaftarEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
