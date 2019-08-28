import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoursesInputComponent } from './courses-input/courses-input.component';
import { CoursesDatatableComponent } from './courses-datatable/courses-datatable.component';
import { CoursesAddCourseFormComponent } from './courses-add-course-form/courses-add-course-form.component';
import { CoursesAddLectureFormComponent } from './courses-add-lecture-form/courses-add-lecture-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesInputComponent,
    CoursesDatatableComponent,
    CoursesAddCourseFormComponent,
    CoursesAddLectureFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    AppRoutingModule,
    MatListModule,
    MatDividerModule,
    MatProgressBarModule,
    MatStepperModule,
    MatTableModule,
    MatButtonToggleModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
