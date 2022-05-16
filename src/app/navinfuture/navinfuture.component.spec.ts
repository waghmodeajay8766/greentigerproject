import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavinfutureComponent } from './navinfuture.component';

describe('NavinfutureComponent', () => {
  let component: NavinfutureComponent;
  let fixture: ComponentFixture<NavinfutureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavinfutureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavinfutureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
