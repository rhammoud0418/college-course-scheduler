import { Component, OnInit, Input } from '@angular/core';

import { Course } from '../course';

@Component({
	selector: 'app-courses-datatable',
	templateUrl: './courses-datatable.component.html',
	styleUrls: ['./courses-datatable.component.css']
})
export class CoursesDatatableComponent implements OnInit {

	courseColumnsToDisplay: string[] = ['name','lectures'];
	@Input() coursesList: Course[];

	constructor() { }

	ngOnInit() { }

}
