import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfolluupComponent } from './myfolluup.component';

describe('MyfolluupComponent', () => {
  let component: MyfolluupComponent;
  let fixture: ComponentFixture<MyfolluupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyfolluupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfolluupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
