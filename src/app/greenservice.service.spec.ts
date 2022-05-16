import { TestBed } from '@angular/core/testing';

import { GreenserviceService } from './greenservice.service';

describe('GreenserviceService', () => {
  let service: GreenserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GreenserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
