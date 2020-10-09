import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServExercice2Component } from './serv-exercice2.component';

describe('ServExercice2Component', () => {
  let component: ServExercice2Component;
  let fixture: ComponentFixture<ServExercice2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServExercice2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServExercice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
