import { TestBed } from '@angular/core/testing';

import { StreamDetailResolverService } from './stream-detail-resolver.service';

describe('StreamDetailResolverService', () => {
  let service: StreamDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StreamDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
