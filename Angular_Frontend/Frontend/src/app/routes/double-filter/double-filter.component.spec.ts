import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleFilterComponent } from './double-filter.component';

describe('DoubleFilterComponent', () => {
  let component: DoubleFilterComponent;
  let fixture: ComponentFixture<DoubleFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoubleFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
