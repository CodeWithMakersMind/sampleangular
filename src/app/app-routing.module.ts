import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { CoursesComponent } from './courses/courses.component';
import { EventsComponent } from './events/events.component';
import { RegistrationComponent } from './registration/registration.component';
import { TeacherComponent } from './teacher/teacher.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'dashboard', component: IndexComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Courses', component: CoursesComponent },
  { path: 'Events', component: EventsComponent },
  { path: 'Registration', component: RegistrationComponent },
  { path: 'Teacher', component: TeacherComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
