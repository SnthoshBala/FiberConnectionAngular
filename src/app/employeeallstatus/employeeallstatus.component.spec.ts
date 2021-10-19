import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeallstatusComponent } from './employeeallstatus.component';

describe('EmployeeallstatusComponent', () => {
  let component: EmployeeallstatusComponent;
  let fixture: ComponentFixture<EmployeeallstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeallstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeallstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
