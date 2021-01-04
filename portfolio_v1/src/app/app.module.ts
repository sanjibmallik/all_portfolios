import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './home-page/header/header.component';
import { AboutComponent } from './home-page/about/about.component';
import { SkillsComponent } from './home-page/skills/skills.component';
import { ContactComponent } from './home-page/contact/contact.component';
import { ProjectsComponent } from './home-page/projects/projects.component';
import { ExperiencesComponent } from './home-page/experiences/experiences.component';
import { HomeComponent } from './home-page/home/home.component';
import { EducationComponent } from './home-page/education/education.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    ProjectsComponent,
    ExperiencesComponent,
    HomeComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
