import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServExercice1Component } from './serv-exercice1.component';

describe('ServExercice1Component', () => {
  let component: ServExercice1Component;
  let fixture: ComponentFixture<ServExercice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServExercice1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServExercice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
