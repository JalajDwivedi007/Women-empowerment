import { TestBed } from '@angular/core/testing';

import { LoginSignupApprovalService } from './login-signup-approval.service';

describe('LoginSignupApprovalService', () => {
  let service: LoginSignupApprovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginSignupApprovalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
