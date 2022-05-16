import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavallComponent } from './navall.component';

describe('NavallComponent', () => {
  let component: NavallComponent;
  let fixture: ComponentFixture<NavallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
