import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeCourseRegComponent } from './trainee-course-reg.component';

describe('TraineeCourseRegComponent', () => {
  let component: TraineeCourseRegComponent;
  let fixture: ComponentFixture<TraineeCourseRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeCourseRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeCourseRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
