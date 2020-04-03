import { TestBed } from '@angular/core/testing';

import { StreamsResolverService } from './streams-resolver.service';

describe('StreamsResolverService', () => {
  let service: StreamsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StreamsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
