import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedleadComponent } from './failedlead.component';

describe('FailedleadComponent', () => {
  let component: FailedleadComponent;
  let fixture: ComponentFixture<FailedleadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailedleadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedleadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
