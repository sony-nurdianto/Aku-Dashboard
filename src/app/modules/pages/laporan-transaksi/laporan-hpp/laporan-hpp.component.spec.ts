import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaporanHppComponent } from './laporan-hpp.component';

describe('LaporanHppComponent', () => {
  let component: LaporanHppComponent;
  let fixture: ComponentFixture<LaporanHppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaporanHppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaporanHppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
