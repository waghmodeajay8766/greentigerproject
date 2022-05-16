import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavfollowupComponent } from './navfollowup.component';

describe('NavfollowupComponent', () => {
  let component: NavfollowupComponent;
  let fixture: ComponentFixture<NavfollowupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavfollowupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavfollowupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
