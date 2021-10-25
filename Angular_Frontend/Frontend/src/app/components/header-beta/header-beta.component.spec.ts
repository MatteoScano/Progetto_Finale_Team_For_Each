import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBetaComponent } from './header-beta.component';

describe('HeaderBetaComponent', () => {
  let component: HeaderBetaComponent;
  let fixture: ComponentFixture<HeaderBetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
