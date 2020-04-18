import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationPolicyComponent } from './donation-policy.component';

describe('DonationPolicyComponent', () => {
  let component: DonationPolicyComponent;
  let fixture: ComponentFixture<DonationPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
