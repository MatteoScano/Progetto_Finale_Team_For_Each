import { TestBed } from '@angular/core/testing';

import { ApiPictureService } from './api-picture.service';

describe('ApiPictureService', () => {
  let service: ApiPictureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPictureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
