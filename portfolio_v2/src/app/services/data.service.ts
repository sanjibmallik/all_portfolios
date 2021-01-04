import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private _http: HttpClient) { }

  getUserDetails() {

    return this._http.get('assets/data/user_details.json')
      .pipe(

      )
  }

  getSkillsDetails() {
    return this._http.get('assets/data/skills.json')
      .pipe()

  }

  getEducationDetails() {
    return this._http.get('assets/data/education.json').pipe()
  }

  getCertificationDetails() {

  }

  getProjectDetails() {

  }

  getExperienceDetails() {
    return this._http.get('assets/data/education.json')
  }

}