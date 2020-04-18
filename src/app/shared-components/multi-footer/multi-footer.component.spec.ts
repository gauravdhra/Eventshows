import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiFooterComponent } from './multi-footer.component';

describe('MultiFooterComponent', () => {
  let component: MultiFooterComponent;
  let fixture: ComponentFixture<MultiFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
