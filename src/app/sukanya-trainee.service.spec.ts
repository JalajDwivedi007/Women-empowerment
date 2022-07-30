import { TestBed } from '@angular/core/testing';

import { SukanyaTraineeService } from './sukanya-trainee.service';

describe('SukanyaTraineeService', () => {
  let service: SukanyaTraineeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SukanyaTraineeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
