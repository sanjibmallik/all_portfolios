import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  scrollPage(event) {

    if (location.pathname.replace(/^\//, '') == event.pathname.replace(/^\//, '') && location.hostname == event.hostname) {
      var target = $(event.hash);
      target = target.length ? target : $('[name=' + event.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 600);
        //return false;
      }
    }

  }

}
