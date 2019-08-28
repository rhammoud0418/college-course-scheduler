import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Lecture } from '../lecture';
import { NgModel } from '@angular/forms';
import { Time } from '../time';

@Component({
  selector: 'app-courses-add-lecture-form',
  templateUrl: './courses-add-lecture-form.component.html',
  styleUrls: ['./courses-add-lecture-form.component.css']
})
export class CoursesAddLectureFormComponent implements OnInit {

	dayOptions: string[] = ['M','T','W','Th','F'];
	daysSelected: string[] = [];

	startTime = {hour: null, minute: null};
	endTime = {hour: null, minute: null};

	location = '';
	professor = '';

	model = {
		monday: false,
		tuesday: false,
		wednesday: false,
		thursday: false,
		friday: false
	};

	@Output('addLecture') 
	addLectureEvent: EventEmitter<Lecture> = new EventEmitter<Lecture>();

	constructor() { }

	ngOnInit() {
	}

	onAddLecture() {
		this.updateDaysSelected();
		var newLecture: Lecture = new Lecture(this.daysSelected,this.transformToTimeObject(this.startTime),this.transformToTimeObject(this.endTime),this.professor,this.location);
		this.addLectureEvent.emit(newLecture);
	}

	updateDaysSelected() {
		this.daysSelected = [];
		if(this.model.monday) this.daysSelected.push('M');
		if(this.model.tuesday) this.daysSelected.push('T');
		if(this.model.wednesday) this.daysSelected.push('W');
		if(this.model.thursday) this.daysSelected.push('Th');
		if(this.model.friday) this.daysSelected.push('F');
	}

	transformToTimeObject(time) {
		var toReturn: Time;
		if(time.hour >= 12) {
			if(time.hour > 13) {
				toReturn = new Time(time.hour-12, time.minute, 'PM');
			} else {
				toReturn = new Time(time.hour, time.minute, 'PM');
			}
		} else {
			if(time.hour == 0) {
				toReturn = new Time(12, time.minute, 'AM');
			} else {
				toReturn = new Time(time.hour, time.minute, 'AM');
			}
		}
		return toReturn;
	}

}
