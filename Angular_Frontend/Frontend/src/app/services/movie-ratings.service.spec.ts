import { TestBed } from '@angular/core/testing';

import { MovieRatingsService } from './movie-ratings.service';

describe('MovieRatingsService', () => {
  let service: MovieRatingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieRatingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
