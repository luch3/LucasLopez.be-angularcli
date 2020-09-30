import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvWipComponent } from './cv-wip.component';

describe('CvWipComponent', () => {
  let component: CvWipComponent;
  let fixture: ComponentFixture<CvWipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvWipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvWipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
