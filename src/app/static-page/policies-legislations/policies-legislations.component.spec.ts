import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesLegislationsComponent } from './policies-legislations.component';

describe('PoliciesLegislationsComponent', () => {
  let component: PoliciesLegislationsComponent;
  let fixture: ComponentFixture<PoliciesLegislationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliciesLegislationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesLegislationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
