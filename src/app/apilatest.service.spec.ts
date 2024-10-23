import { TestBed } from '@angular/core/testing';

import { ApilatestService } from './apilatest.service';

describe('ApilatestService', () => {
  let service: ApilatestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApilatestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
