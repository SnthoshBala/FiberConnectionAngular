import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEditStatusComponent } from './employee-edit-status.component';

describe('EmployeeEditStatusComponent', () => {
  let component: EmployeeEditStatusComponent;
  let fixture: ComponentFixture<EmployeeEditStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeEditStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEditStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
