import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavclosedComponent } from './navclosed.component';

describe('NavclosedComponent', () => {
  let component: NavclosedComponent;
  let fixture: ComponentFixture<NavclosedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavclosedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavclosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
