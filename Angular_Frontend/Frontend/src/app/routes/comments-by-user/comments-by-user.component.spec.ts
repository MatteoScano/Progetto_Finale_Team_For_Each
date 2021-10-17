import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsByUserComponent } from './comments-by-user.component';

describe('CommentsByUserComponent', () => {
  let component: CommentsByUserComponent;
  let fixture: ComponentFixture<CommentsByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsByUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
