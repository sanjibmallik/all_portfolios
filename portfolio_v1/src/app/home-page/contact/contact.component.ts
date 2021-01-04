import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  user:any;

  constructor(private _service: DataService) { }

  ngOnInit() {
    this.loadUser()
  }

  loadUser(){
    this._service.getUserDetails()
    .subscribe((data)=>{
     this.user = data;
    })
  }

}
