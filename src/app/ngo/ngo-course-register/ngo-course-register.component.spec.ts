import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoCourseRegisterComponent } from './ngo-course-register.component';

describe('NgoCourseRegisterComponent', () => {
  let component: NgoCourseRegisterComponent;
  let fixture: ComponentFixture<NgoCourseRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoCourseRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoCourseRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
