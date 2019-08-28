import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesAddCourseFormComponent } from './courses-add-course-form.component';

describe('CoursesAddCourseFormComponent', () => {
  let component: CoursesAddCourseFormComponent;
  let fixture: ComponentFixture<CoursesAddCourseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesAddCourseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesAddCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
