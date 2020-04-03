import { TestBed } from '@angular/core/testing';

import { SamMetaService } from './sam-meta.service';

describe('SamMetaService', () => {
  let service: SamMetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SamMetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
