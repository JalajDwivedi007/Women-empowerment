import { TestBed } from '@angular/core/testing';

import { CourseTraineeService } from './course-trainee.service';

describe('CourseTraineeService', () => {
  let service: CourseTraineeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseTraineeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
