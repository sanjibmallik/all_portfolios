import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  skills: any;
  link = "";
  user:any;
  constructor(private _Service: DataService) { }

  ngOnInit() {
    this.loadSkills()
    this.loadResumeLink();
  }

  loadSkills() {
    this._Service.getSkillsDetails()
      .subscribe((data: any) => {
        this.skills = data.skills;
      })
  }

  loadResumeLink(){
    this._Service.getUserDetails()
    .subscribe((data:any)=>{
      this.link = data.link;
      this.user = data;

    })
  }

}
