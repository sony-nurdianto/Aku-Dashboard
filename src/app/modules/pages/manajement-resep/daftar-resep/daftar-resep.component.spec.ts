import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarResepComponent } from './daftar-resep.component';

describe('DaftarResepComponent', () => {
  let component: DaftarResepComponent;
  let fixture: ComponentFixture<DaftarResepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarResepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarResepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
