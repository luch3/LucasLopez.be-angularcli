import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantExercice2Component } from './enfant-exercice2.component';

describe('EnfantExercice2Component', () => {
  let component: EnfantExercice2Component;
  let fixture: ComponentFixture<EnfantExercice2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfantExercice2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfantExercice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
