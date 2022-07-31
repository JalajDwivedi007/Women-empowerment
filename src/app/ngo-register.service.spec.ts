import { TestBed } from '@angular/core/testing';

import { NgoRegisterService } from './ngo-register.service';

describe('NgoRegisterService', () => {
  let service: NgoRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgoRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
