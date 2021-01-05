import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManajementAkunComponent } from './manajement-akun.component';

describe('ManajementAkunComponent', () => {
  let component: ManajementAkunComponent;
  let fixture: ComponentFixture<ManajementAkunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManajementAkunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManajementAkunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
