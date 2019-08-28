import { Component, OnInit } from '@angular/core';

import { Course } from '../course';

@Component({
  selector: 'app-courses-input',
  templateUrl: './courses-input.component.html',
  styleUrls: ['./courses-input.component.css']
})
export class CoursesInputComponent implements OnInit {

	coursesList: Course[] = [new Course('CSCI 499'), new Course('CSCI 270'), new Course('CSCI 499')];

	constructor() { }

	ngOnInit() { }

	onAddCourse(courseToAdd: Course) {
		this.coursesList.push(courseToAdd);
		this.coursesList = this.coursesList.slice();
	}

}
