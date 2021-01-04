import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.sass']
})
export class EducationComponent implements OnInit {
  
  educations:any;

  constructor(private _service: DataService) { }

  ngOnInit() {
    this.loadEducationDetails();
  }

  loadEducationDetails(){
    this._service.getEducationDetails()
    .subscribe((data:any)=>{
      this.educations = data.education
    })

  }

}
