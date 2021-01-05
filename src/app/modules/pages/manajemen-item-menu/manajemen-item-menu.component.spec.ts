import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManajemenItemMenuComponent } from './manajemen-item-menu.component';

describe('ManajemenItemMenuComponent', () => {
  let component: ManajemenItemMenuComponent;
  let fixture: ComponentFixture<ManajemenItemMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManajemenItemMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManajemenItemMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
