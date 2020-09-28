import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvNavbarComponent } from './cv-navbar.component';

describe('CvNavbarComponent', () => {
  let component: CvNavbarComponent;
  let fixture: ComponentFixture<CvNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
