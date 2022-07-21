import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeRegisterComponent } from './trainee-register.component';

describe('TraineeRegisterComponent', () => {
  let component: TraineeRegisterComponent;
  let fixture: ComponentFixture<TraineeRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
