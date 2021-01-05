import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoryComponent } from './kategory.component';

describe('KategoryComponent', () => {
  let component: KategoryComponent;
  let fixture: ComponentFixture<KategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
