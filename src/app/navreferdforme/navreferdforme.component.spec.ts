import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavreferdformeComponent } from './navreferdforme.component';

describe('NavreferdformeComponent', () => {
  let component: NavreferdformeComponent;
  let fixture: ComponentFixture<NavreferdformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavreferdformeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavreferdformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
