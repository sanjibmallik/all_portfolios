import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {

  skills:any;

  constructor(private _Service: DataService) { }

  ngOnInit() {
    this.loadSkills();
  }

  loadSkills() {
    this._Service.getSkillsDetails()
      .subscribe((data: any) => {
        this.skills = data.skills;
      })
  }

}
