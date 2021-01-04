import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio-v1';
  ngOnInit() {

  }

  scrollPage(event: any) {
    if (
      location.pathname.replace(/^\//, "") ==
      event.pathname.replace(/^\//, "") &&
      location.hostname == event.hostname
    ) {
      var target = $(event.hash);
      target = target.length
        ? target
        : $("[name=" + event.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          "easeInOutExpo"
        );
      }
    }
    $(".navbar-collapse").collapse("hide");
  }


}
