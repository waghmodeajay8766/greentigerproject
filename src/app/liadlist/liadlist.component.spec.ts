import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiadlistComponent } from './liadlist.component';

describe('LiadlistComponent', () => {
  let component: LiadlistComponent;
  let fixture: ComponentFixture<LiadlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiadlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiadlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
