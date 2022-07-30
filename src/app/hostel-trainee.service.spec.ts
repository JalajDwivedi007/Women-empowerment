import { TestBed } from '@angular/core/testing';

import { HostelTraineeService } from './hostel-trainee.service';

describe('HostelTraineeService', () => {
  let service: HostelTraineeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HostelTraineeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
