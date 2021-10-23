import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilteredByMustSeeComponent } from './list-filtered-by-must-see.component';

describe('ListFilteredByMustSeeComponent', () => {
  let component: ListFilteredByMustSeeComponent;
  let fixture: ComponentFixture<ListFilteredByMustSeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFilteredByMustSeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFilteredByMustSeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
