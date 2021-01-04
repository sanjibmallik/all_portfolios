import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.sass']
})
export class ExperiencesComponent implements OnInit {
  
experience:any;

  constructor(private _service: DataService) { }

  ngOnInit() {
    this.loadExperience();
  }

  loadExperience(){
    this._service.getExperienceDetails()
    .subscribe((data:any)=>{
      this.experience = data.experience
    })
  }

}
