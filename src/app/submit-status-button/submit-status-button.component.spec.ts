import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitStatusButtonComponent } from './submit-status-button.component';

describe('SubmitStatusButtonComponent', () => {
  let component: SubmitStatusButtonComponent;
  let fixture: ComponentFixture<SubmitStatusButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitStatusButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitStatusButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
