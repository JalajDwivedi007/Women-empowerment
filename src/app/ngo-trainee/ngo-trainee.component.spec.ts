import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NGOTraineeComponent } from './ngo-trainee.component';

describe('NGOTraineeComponent', () => {
  let component: NGOTraineeComponent;
  let fixture: ComponentFixture<NGOTraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NGOTraineeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NGOTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
