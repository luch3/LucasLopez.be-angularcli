import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvContactComponent } from './cv-contact.component';

describe('CvContactComponent', () => {
  let component: CvContactComponent;
  let fixture: ComponentFixture<CvContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
