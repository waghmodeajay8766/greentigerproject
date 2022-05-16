import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavwalkinComponent } from './navwalkin.component';

describe('NavwalkinComponent', () => {
  let component: NavwalkinComponent;
  let fixture: ComponentFixture<NavwalkinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavwalkinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavwalkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
