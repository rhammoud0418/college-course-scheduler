import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesInputComponent } from './courses-input/courses-input.component';

const routes: Routes = [
  { path: '', redirectTo: 'courses-input', pathMatch: 'full' },
  { path: 'courses-input', component: CoursesInputComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
