import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsroomAboutUsComponent } from './newsroom-about-us.component';

describe('NewsroomAboutUsComponent', () => {
  let component: NewsroomAboutUsComponent;
  let fixture: ComponentFixture<NewsroomAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsroomAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsroomAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
