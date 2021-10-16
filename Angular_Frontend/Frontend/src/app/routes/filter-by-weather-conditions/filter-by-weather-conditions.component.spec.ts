import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByWeatherConditionsComponent } from './filter-by-weather-conditions.component';

describe('FilterByWeatherConditionsComponent', () => {
  let component: FilterByWeatherConditionsComponent;
  let fixture: ComponentFixture<FilterByWeatherConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterByWeatherConditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByWeatherConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
