import { HomeComponent } from './home-page/home/home.component';
import { ContactComponent } from './home-page/contact/contact.component';
import { SkillsComponent } from './home-page/skills/skills.component';
import { AboutComponent } from './home-page/about/about.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperiencesComponent } from './home-page/experiences/experiences.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/', pathMatch: 'full'
  },
  
  {
    path:'/', component:HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
