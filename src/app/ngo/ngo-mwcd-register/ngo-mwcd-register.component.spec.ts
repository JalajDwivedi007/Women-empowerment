import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoMwcdRegisterComponent } from './ngo-mwcd-register.component';

describe('NgoMwcdRegisterComponent', () => {
  let component: NgoMwcdRegisterComponent;
  let fixture: ComponentFixture<NgoMwcdRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoMwcdRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoMwcdRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
