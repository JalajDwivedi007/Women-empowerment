import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeRegisterHomeComponent } from './trainee-register-home.component';

describe('TraineeRegisterHomeComponent', () => {
  let component: TraineeRegisterHomeComponent;
  let fixture: ComponentFixture<TraineeRegisterHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeRegisterHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeRegisterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
