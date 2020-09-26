import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvRealisationsComponent } from './cv-realisations.component';

describe('CvRealisationsComponent', () => {
  let component: CvRealisationsComponent;
  let fixture: ComponentFixture<CvRealisationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvRealisationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvRealisationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
