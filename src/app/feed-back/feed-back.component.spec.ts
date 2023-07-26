import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedBackComponent } from './feed-back.component';

describe('FeedBackComponent', () => {
  let component: FeedBackComponent;
  let fixture: ComponentFixture<FeedBackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedBackComponent]
    });
    fixture = TestBed.createComponent(FeedBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
