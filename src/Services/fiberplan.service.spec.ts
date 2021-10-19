import { TestBed } from '@angular/core/testing';

import { FiberplanService } from './fiberplan.service';

describe('FiberplanService', () => {
  let service: FiberplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiberplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
