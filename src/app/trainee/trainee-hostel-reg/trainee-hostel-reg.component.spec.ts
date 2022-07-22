import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeHostelRegComponent } from './trainee-hostel-reg.component';

describe('TraineeHostelRegComponent', () => {
  let component: TraineeHostelRegComponent;
  let fixture: ComponentFixture<TraineeHostelRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeHostelRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeHostelRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
