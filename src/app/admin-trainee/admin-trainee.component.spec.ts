import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTraineeComponent } from './admin-trainee.component';

describe('AdminTraineeComponent', () => {
  let component: AdminTraineeComponent;
  let fixture: ComponentFixture<AdminTraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTraineeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
