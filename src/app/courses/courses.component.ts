import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { Lecture } from '../lecture';
import { Time } from '../time';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  // Input field option arrays
  displayedColumns: string[] = ['name', 'lectures'];
  dayOptions: string[] = ['M','T','W','Th','F'];
  daysSelected: string[] = [];

  courses: Course[];
  currentCourse: Course = new Course('', [new Lecture([], new Time(0,0,'am'), new Time(0,0,'am'))]);

  constructor() { }

  ngOnInit() {
    this.courses = [];
    this.add('CSCI 499', []);
    this.add('CSCI 270', []);
  }

  add(name: string, lectures: Lecture[]): void {
    var newCourse: Course = { name, lectures } as Course;
    this.courses.push(newCourse);
  }

  selectionChanged(item) {
    console.log(this.daysSelected);
    this.currentCourse.lectures[0].days = this.daysSelected;
  }

  professorChanged(item) {
    console.log(item);
    this.currentCourse.lectures[0].professor = item;
  }

  get diagnostic() {
    return JSON.stringify(this.currentCourse);
  }
 }