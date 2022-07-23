import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeSukanyaRegComponent } from './trainee-sukanya-reg.component';

describe('TraineeSukanyaRegComponent', () => {
  let component: TraineeSukanyaRegComponent;
  let fixture: ComponentFixture<TraineeSukanyaRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeSukanyaRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraineeSukanyaRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
