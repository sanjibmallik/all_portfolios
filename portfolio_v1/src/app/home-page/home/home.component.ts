import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  user:any = {}

  constructor(private _service: DataService) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser(){
    this._service.getUserDetails()
    .subscribe((data)=>{
     this.user = data;
    })
  }

}
