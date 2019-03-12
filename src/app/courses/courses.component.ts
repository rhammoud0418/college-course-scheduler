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

  courses: Course[];
  displayedColumns: string[] = ['name', 'lectures'];

  

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
}