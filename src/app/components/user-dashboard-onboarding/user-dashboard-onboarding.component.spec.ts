import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardOnboardingComponent } from './user-dashboard-onboarding.component';

describe('UserDashboardOnboardingComponent', () => {
  let component: UserDashboardOnboardingComponent;
  let fixture: ComponentFixture<UserDashboardOnboardingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDashboardOnboardingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
