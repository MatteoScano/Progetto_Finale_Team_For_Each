import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaFooterComponent } from './beta-footer.component';

describe('BetaFooterComponent', () => {
  let component: BetaFooterComponent;
  let fixture: ComponentFixture<BetaFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetaFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
