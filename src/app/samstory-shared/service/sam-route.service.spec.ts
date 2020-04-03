import { TestBed } from '@angular/core/testing';

import { SamRouteService } from './sam-route.service';

describe('SamRouteService', () => {
  let service: SamRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SamRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
