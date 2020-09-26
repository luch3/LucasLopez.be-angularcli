import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvCompetencesComponent } from './cv-competences.component';

describe('CvCompetencesComponent', () => {
  let component: CvCompetencesComponent;
  let fixture: ComponentFixture<CvCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvCompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
