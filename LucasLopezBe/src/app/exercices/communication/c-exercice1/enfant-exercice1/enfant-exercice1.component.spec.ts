import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantExercice1Component } from './enfant-exercice1.component';

describe('EnfantExercice1Component', () => {
  let component: EnfantExercice1Component;
  let fixture: ComponentFixture<EnfantExercice1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfantExercice1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfantExercice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
