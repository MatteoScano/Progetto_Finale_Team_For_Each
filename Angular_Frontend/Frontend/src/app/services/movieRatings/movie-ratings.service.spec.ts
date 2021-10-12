import { TestBed } from '@angular/core/testing';

import { MovieRatingService } from './movie-ratings.service';

describe('MovieRatingsService', () => {
  let service: MovieRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
