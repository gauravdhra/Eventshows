import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinifiedFooterComponent } from './minified-footer.component';

describe('MinifiedFooterComponent', () => {
  let component: MinifiedFooterComponent;
  let fixture: ComponentFixture<MinifiedFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinifiedFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinifiedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
