import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesInputComponent } from './courses-input.component';

describe('CoursesInputComponent', () => {
  let component: CoursesInputComponent;
  let fixture: ComponentFixture<CoursesInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
