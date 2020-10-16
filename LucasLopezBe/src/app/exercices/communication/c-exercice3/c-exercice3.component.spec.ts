import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CExercice3Component } from './c-exercice3.component';

describe('CExercice3Component', () => {
  let component: CExercice3Component;
  let fixture: ComponentFixture<CExercice3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CExercice3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CExercice3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
