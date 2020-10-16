import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CExercice2Component } from './c-exercice2.component';

describe('CExercice2Component', () => {
  let component: CExercice2Component;
  let fixture: ComponentFixture<CExercice2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CExercice2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CExercice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
