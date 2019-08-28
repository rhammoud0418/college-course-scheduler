import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesAddLectureFormComponent } from './courses-add-lecture-form.component';

describe('CoursesAddLectureFormComponent', () => {
  let component: CoursesAddLectureFormComponent;
  let fixture: ComponentFixture<CoursesAddLectureFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesAddLectureFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesAddLectureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
