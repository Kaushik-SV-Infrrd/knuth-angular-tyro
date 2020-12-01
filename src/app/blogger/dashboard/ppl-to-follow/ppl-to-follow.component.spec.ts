import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PplToFollowComponent } from './ppl-to-follow.component';

describe('PplToFollowComponent', () => {
  let component: PplToFollowComponent;
  let fixture: ComponentFixture<PplToFollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PplToFollowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PplToFollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
