import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByDateComponent } from './sort-by-date.component';

describe('SortByDateComponent', () => {
  let component: SortByDateComponent;
  let fixture: ComponentFixture<SortByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
