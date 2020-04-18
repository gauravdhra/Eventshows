import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostlandingComponent } from './hostlanding.component';

describe('HostlandingComponent', () => {
  let component: HostlandingComponent;
  let fixture: ComponentFixture<HostlandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostlandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
