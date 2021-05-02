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
  projectList = [{ name: 'menupro', imageName: 'mp1.PNG', projName: "Menupro", projDesc: "App to create restaurant menus." },
  // {name:'salespro',imageName:'sp1.PNG',projName:"Salespro",projDesc:"App to create orders."},
  { name: 'weather', imageName: 'w1.PNG', projName: "Weather App", projDesc: "Show weather forecast." },
  { name: 'rtohelp', imageName: 'r2.PNG', projName: "Readytohelp", projDesc: "The simple theme to show your business and its services." },
  { name: 'texttool', imageName: 'u1.PNG', projName: "Unit Conversion & Text tools", projDesc: "this app has various useful tools for conversions." },

  { name: 'quote', imageName: 'q1.PNG', projName: "Quote Generator", projDesc: "This app will generate random quotes on click." },
  { name: 'theme', imageName: 'st1.PNG', projName: "Simple theme", projDesc: "the simple theme to show your business." },

  { name: 'hackernews', imageName: 'h1.PNG', projName: "Hackernews Clone", projDesc: "It is probably the most known developer/engineer website in the World." },
  { name: 'js30', imageName: 'js2.PNG', projName: "JS30", projDesc: "It consists of the various project to understand programming language concepts." },
  ];
  active = true;


  constructor() { }

  ngAfterViewInit() {
  }
}
