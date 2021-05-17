import { Component, OnInit } from '@angular/core';
declare var jQuery;
declare var GitHubCalendar;
declare var GitHubActivity;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  projectList = [{ name: 'name', imageName: 'mp1.PNG', projName: "projName", projDesc: " sit amet, consectetur adipiscin" },
  // {name:'name',imageName:'sp1.PNG',projName:"projName",projDesc:"sit amet, consectetur adipiscin."},
  { name: 'name1', imageName: 'w1.PNG', projName: "projName", projDesc: " sit amet, consectetur adipiscin" },

  ];
  active = true;


  constructor() { }

  ngAfterViewInit() {
  }
}
