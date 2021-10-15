import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiMovieDetailsComponent } from './api-movie-details.component';

describe('ApiMovieDetailsComponent', () => {
  let component: ApiMovieDetailsComponent;
  let fixture: ComponentFixture<ApiMovieDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiMovieDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiMovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
