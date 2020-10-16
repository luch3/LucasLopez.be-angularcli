import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantExercice3Component } from './enfant-exercice3.component';

describe('EnfantExercice3Component', () => {
  let component: EnfantExercice3Component;
  let fixture: ComponentFixture<EnfantExercice3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfantExercice3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfantExercice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
