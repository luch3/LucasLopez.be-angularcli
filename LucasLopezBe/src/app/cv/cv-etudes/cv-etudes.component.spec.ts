import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvEtudesComponent } from './cv-etudes.component';

describe('CvEtudesComponent', () => {
  let component: CvEtudesComponent;
  let fixture: ComponentFixture<CvEtudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvEtudesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvEtudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
