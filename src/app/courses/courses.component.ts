import { Component, OnInit } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[];
  displayedColumns: string[] = ['name'];

  constructor() { }

  ngOnInit() {
    this.courses = [];
    this.add('CSCI 499');
    this.add('CSCI 270');
  }

  add(name: string): void {
    var newCourse: Course = { name } as Course;
    this.courses.push(newCourse);
  }
}