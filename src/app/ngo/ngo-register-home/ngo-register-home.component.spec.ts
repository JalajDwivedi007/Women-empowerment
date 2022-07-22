import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoRegisterHomeComponent } from './ngo-register-home.component';

describe('NgoRegisterHomeComponent', () => {
  let component: NgoRegisterHomeComponent;
  let fixture: ComponentFixture<NgoRegisterHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoRegisterHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoRegisterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
