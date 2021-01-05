import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GantiKataSandiComponent } from './ganti-kata-sandi.component';

describe('GantiKataSandiComponent', () => {
  let component: GantiKataSandiComponent;
  let fixture: ComponentFixture<GantiKataSandiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GantiKataSandiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GantiKataSandiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
