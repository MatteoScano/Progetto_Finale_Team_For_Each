import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsFilteredByMoviesIdComponent } from './comments-filtered-by-movies-id.component';

describe('CommentsFilteredByMoviesIdComponent', () => {
  let component: CommentsFilteredByMoviesIdComponent;
  let fixture: ComponentFixture<CommentsFilteredByMoviesIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsFilteredByMoviesIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsFilteredByMoviesIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
