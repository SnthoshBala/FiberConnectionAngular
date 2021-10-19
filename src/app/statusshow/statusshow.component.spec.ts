import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusshowComponent } from './statusshow.component';

describe('StatusshowComponent', () => {
  let component: StatusshowComponent;
  let fixture: ComponentFixture<StatusshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
