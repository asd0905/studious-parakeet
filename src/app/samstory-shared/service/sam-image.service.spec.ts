import { TestBed } from '@angular/core/testing';

import { SamImageService } from './sam-image.service';

describe('SamImageService', () => {
  let service: SamImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SamImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
