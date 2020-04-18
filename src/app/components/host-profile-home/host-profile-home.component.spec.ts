import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostProfileHomeComponent } from './host-profile-home.component';

describe('HostProfileHomeComponent', () => {
  let component: HostProfileHomeComponent;
  let fixture: ComponentFixture<HostProfileHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostProfileHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostProfileHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
