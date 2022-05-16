import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavonlineComponent } from './navonline.component';

describe('NavonlineComponent', () => {
  let component: NavonlineComponent;
  let fixture: ComponentFixture<NavonlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavonlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavonlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
