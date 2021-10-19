import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincontrolComponent } from './admincontrol.component';

describe('AdmincontrolComponent', () => {
  let component: AdmincontrolComponent;
  let fixture: ComponentFixture<AdmincontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincontrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmincontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
