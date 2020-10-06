import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsExercice1Component } from './forms-exercice1.component';

describe('FormsExercice1Component', () => {
  let component: FormsExercice1Component;
  let fixture: ComponentFixture<FormsExercice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsExercice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsExercice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
