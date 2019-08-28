import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Course } from '../course';
import { Lecture } from '../lecture';
import { Time } from '../time';

@Component({
	selector: 'app-courses-add-course-form',
	templateUrl: './courses-add-course-form.component.html',
	styleUrls: ['./courses-add-course-form.component.css']
})
export class CoursesAddCourseFormComponent implements OnInit {

	courseName: string = '';
	courseNameFormControl: FormControl = new FormControl('', [Validators.required]);

	lectures: Lecture[] =[new Lecture(['M','W','F'], new Time(11,30,'am'), new Time(12,20,'pm'), 'Shindler', 'GFS 114')];

	@Output('addCourse') 
	addCourseEvent: EventEmitter<Course> = new EventEmitter<Course>();

	constructor() { }

	ngOnInit() { }
	
	onAddCourse() {
		if(this.courseNameFormControl.valid) {
			this.addCourseEvent.emit(new Course(this.courseName, this.lectures));
			this.courseNameFormControl.reset();
			this.clearForm();
		}
	}

	onAddLecture(lectureToAdd: Lecture) {
		this.lectures.push(lectureToAdd);
		this.lectures.slice();
	}

	clearForm() {
		this.courseName = '';
	}

	getCourseNameErrorMessage() {
		return this.courseNameFormControl.hasError('required') ? 'You must enter a name for the course.' : '';
	}
}