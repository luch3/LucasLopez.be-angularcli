import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsExercice3Component } from './forms-exercice3.component';

describe('FormsExercice3Component', () => {
  let component: FormsExercice3Component;
  let fixture: ComponentFixture<FormsExercice3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsExercice3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsExercice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
