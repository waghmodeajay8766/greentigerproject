import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavreenquredComponent } from './navreenqured.component';

describe('NavreenquredComponent', () => {
  let component: NavreenquredComponent;
  let fixture: ComponentFixture<NavreenquredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavreenquredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavreenquredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
