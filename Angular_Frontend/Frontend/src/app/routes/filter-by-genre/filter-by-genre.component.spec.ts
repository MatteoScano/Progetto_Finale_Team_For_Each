import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByGenreComponent } from './filter-by-genre.component';

describe('FilterByGenreComponent', () => {
  let component: FilterByGenreComponent;
  let fixture: ComponentFixture<FilterByGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterByGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
