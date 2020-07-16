import { Component, OnInit } from '@angular/core';
declare var jQuery;
declare var GitHubCalendar;
declare var GitHubActivity;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  constructor() { }

  ngAfterViewInit() {
    jQuery(document).ready(function($) {


      /*======= Skillset *=======*/
      
      $('.level-bar-inner').css('width', '0');
      
      $(window).on('load', function() {
  
          $('.level-bar-inner').each(function() {
          
              var itemWidth = $(this).data('level');
              
              $(this).animate({
                  width: itemWidth
              }, 800);
              
          });
  
      });
      
      /* Bootstrap Tooltip for Skillset */
      $('.level-label').tooltip();
      
      
      /* jQuery RSS - https://github.com/sdepold/jquery-rss */
      
      $("#rss-feeds").rss(
      
          //Change this to your own rss feeds
          "http://feeds.feedburner.com/TechCrunch/startups",
          
          {
          // how many entries do you want?
          // default: 4
          // valid values: any integer
          limit: 3,
          
          // the effect, which is used to let the entries appear
          // default: 'show'
          // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
          effect: 'slideFastSynced',
          
          // outer template for the html transformation
          // default: "<ul>{entries}</ul>"
          // valid values: any string
          layoutTemplate: "<div class='item'>{entries}</div>",
          
          // inner template for each entry
          // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
          // valid values: any string
          entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>'
          
          }
      );
      
      /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    //   GitHubCalendar("#github-graph", "IonicaBizau");
      
      
      /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    //   GitHubActivity.feed({ username: "caseyscarborough", selector: "#ghfeed" });
  
  
  });
  }
  
  
projectList=[{name:'menupro',imageName:'mp1.PNG',projName:"Menupro",projDesc:"App to create restaurant menus."},
// {name:'salespro',imageName:'sp1.PNG',projName:"Salespro",projDesc:"App to create orders."},
{name:'weather',imageName:'w1.PNG',projName:"Weather App",projDesc:"Show weather forecast."},
{name:'rtohelp',imageName:'r2.PNG',projName:"Readytohelp",projDesc:"The simple theme to show your business and its services."},
{name:'texttool',imageName:'u1.PNG',projName:"Unit Conversion & Text tools",projDesc:"this app has various useful tools for conversions."},
   
{name:'quote',imageName:'q1.PNG',projName:"Quote Generator",projDesc:"This app will generate random quotes on click."},
{name:'theme',imageName:'st1.PNG',projName:"Simple theme",projDesc:"the simple theme to show your business."},

{name:'hackernews',imageName:'h1.PNG',projName:"Hackernews Clone",projDesc:"It is probably the most known developer/engineer website in the World."},
{name:'js30',imageName:'js2.PNG',projName:"JS30",projDesc:"It consists of the various project to understand programming language concepts."},
];
active=true;
onSubmit() {

  this.active = false;
  setTimeout(() => this.active = true, 0);
}
}
