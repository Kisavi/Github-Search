import { TestBed } from '@angular/core/testing';

import { RepositoryRequestService } from './repository-request.service';

describe('RepositoryRequestService', () => {
  let service: RepositoryRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositoryRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
