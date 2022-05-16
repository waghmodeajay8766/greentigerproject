import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavenrolledComponent } from './navenrolled.component';

describe('NavenrolledComponent', () => {
  let component: NavenrolledComponent;
  let fixture: ComponentFixture<NavenrolledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavenrolledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavenrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
