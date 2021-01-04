import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/internal/operators/map';
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

  getListOfLinks() {
    return this._http.get('assets/data/listOfLinks.json')
      .pipe(map((data: any) => {
        return data.links
      })

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