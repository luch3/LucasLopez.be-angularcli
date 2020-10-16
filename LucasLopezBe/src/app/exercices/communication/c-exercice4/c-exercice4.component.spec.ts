import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CExercice4Component } from './c-exercice4.component';

describe('CExercice4Component', () => {
  let component: CExercice4Component;
  let fixture: ComponentFixture<CExercice4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CExercice4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CExercice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
