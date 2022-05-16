import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavfreshComponent } from './navfresh.component';

describe('NavfreshComponent', () => {
  let component: NavfreshComponent;
  let fixture: ComponentFixture<NavfreshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavfreshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavfreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
