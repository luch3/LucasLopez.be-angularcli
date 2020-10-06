import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsExercice2Component } from './forms-exercice2.component';

describe('FormsExercice2Component', () => {
  let component: FormsExercice2Component;
  let fixture: ComponentFixture<FormsExercice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsExercice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsExercice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
