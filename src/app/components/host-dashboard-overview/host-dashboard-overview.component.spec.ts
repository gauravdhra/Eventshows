import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostDashboardOverviewComponent } from './host-dashboard-overview.component';

describe('HostDashboardOverviewComponent', () => {
  let component: HostDashboardOverviewComponent;
  let fixture: ComponentFixture<HostDashboardOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostDashboardOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostDashboardOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
