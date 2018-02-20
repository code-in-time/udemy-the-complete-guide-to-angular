import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnClassChangeComponent } from './learn-class-change.component';

describe('LearnClassChangeComponent', () => {
  let component: LearnClassChangeComponent;
  let fixture: ComponentFixture<LearnClassChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnClassChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnClassChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
