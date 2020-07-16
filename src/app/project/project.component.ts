import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FLAGS } from '@angular/core/src/render3/interfaces/view';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  username: any;
  specificDetails;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.username = params.get('username');
    });
    for (let i = 0; i < this.detailsPro.length; i++) {
      if (this.detailsPro[i].id == this.username) {
        this.specificDetails = this.detailsPro[i];
      }
    }

    var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    // var img = <HTMLImageElement>document.getElementById('myImg');
    var modalImg = <HTMLImageElement>document.getElementById("img01");
    var captionText = document.getElementById("caption");
    // if(img)
    // img.onclick = function(){
    //   modal.style.display = "block";
    //   modalImg.src = img.src;
    //   captionText.innerHTML = img.alt;
    // }

    // Get the <span> element that closes the modal



  }
  @ViewChild('getPath') tempPath;
  showimg(j) {
    var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    // var img = <HTMLImageElement>document.getElementById('myImg');
    var modalImg = <HTMLImageElement>document.getElementById("img01");
    //  console.log(img.src,this.tempPath.nativeElement.src,'g');

    var captionText = document.getElementById("caption");
    // img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = '../../assets/proimages/' + j.img1;
    // captionText.innerHTML = img.alt;
    // }
  }

  hidepreviewpop() {
    // var span = document.getElementsByClassName("close")[0];
    var modal = document.getElementById('myModal');
    // var img = <HTMLImageElement>document.getElementById('myImg');
    var modalImg = <HTMLImageElement>document.getElementById("img01");
    // When the user clicks on <span> (x), close the modal
    // span.onclick = function() { 
    modal.style.display = "none";
    // modalImg.src ='';
    // }
  }




  detailsPro = [
    // { id: "salespro", proName: "Salespro", proDesc: "This is an order creation app which consists of thousands of items and can make order from this. There are different functionality include like the generation of reports, different calculations, transmit order, making price sheet, notepad etc.", subheading: "webApp(Offline & Online)", prolink: "https://salesproqa.curtze.com:85", prolinkdesc: "For More Info Visit here", gitLink: "", techUsed: "HTML,CSS,JS,Angular 2,", mainImg: "sp2.PNG", otherInfo: [{ p1: "We have used JSpdf, xlsx third-party libraries to generate reports." }, { p1: "fingerprint.js for getting system info." }, { p1: "shrortcut.js for adding some custom shortcuts." }, { p1: "There is an admin section to give permission to the salesperson." }], otherImg: [{ img1: "sp1.PNG" }, { img1: "sp3.PNG" }, { img1: "sp4.PNG" }, { img1: "sp5.PNG" }] },
    { id: "menupro", proName: "Menupro", proDesc: "This is an food app in which you can create menus, recipes etc.  In this, you can generate reports in excel and pdf format. This app will work in online and offline mode. There is different calculation applied while creating recipes.", subheading: "webApp(Offline & Online)", prolink: "", gitLink: "", techUsed: "HTML,CSS,JS,Angular2+", prolinkdesc: "For More Info Visit here", mainImg: "mp2.PNG", otherInfo: [{ p1: "we have used the TinyMCE library for notes formating." }, { p1: "created custom  shortcuts with js." }], otherImg: [{ img1: "mp1.PNG" }, { img1: "mp3.PNG" }, { img1: "mp4.PNG" }, { img1: "mp5.PNG" }] },
    { id: "texttool", proName: "Unit Conversions & Text tools", proDesc: "There are different types of conversion in this project like land measurement units, currency converter, number systems. It also has different types of text tools like generating random strings, numbers and generate different types of bar code, find and replace functionality.", subheading: "currency Converter, land measurement ...", prolink: "https://unit-conversions.netlify.com/", prolinkdesc: "For More Info Visit here", gitLink: "https://github.com/sunny7899/unit-conversions", techUsed: "HTML,CSS,JS,Angular 2+", mainImg: "u1.PNG", otherInfo: [{ p1: "In this project, we have used currency converter API to convert different currency." }, { p1: "We have used Angular material for designing UI." }], otherImg: [{ img1: "u2.gif" }, { img1: "u3.PNG" }, { img1: "u4.PNG" }, { img1: "u5.PNG" }] },
    { id: "rtohelp", proName: "Ready to help", proDesc: "It is a single page web application with several tabs like contact us, services, download, workflow, About developer.", subheading: "Theme", prolink: "https://readytohelp.netlify.com/", prolinkdesc: "For More Info Visit here", gitLink: "https://github.com/sunny7899/rtohelp", techUsed: "HTML,CSS,JS,Angular 2+, Jquery", mainImg: "r2.PNG", otherInfo: [{ p1: "We have used font awesome for icons." }, { p1: "Different  third-party libraries for formatting." }], otherImg: [{ img1: "r3.PNG" }, { img1: "r4.PNG" }, { img1: "r5.PNG" }, { img1: "r1.gif" }] },
    { id: "js30", proName: "JS30", proDesc: "This app has various side projects which teaches you many concepts of websites. There are different functionality we can do with JS like speech recognition, taking the photo, text to speech, image slider, whack game.", subheading: "Coding challenge", prolink: "https://js30coding.netlify.com/", prolinkdesc: "For More Info Visit here", gitLink: "https://github.com/sunny7899/js30", techUsed: "HTML,CSS,JS,Angular 2+,SCSS, jquery", mainImg: "js3.PNG", otherInfo: [{ p1: "we have used location service of angular" }, { p1: "geoloaction api" }], otherImg: [{ img1: "js2.PNG" }, { img1: "js4.PNG" }, { img1: "js5.PNG" }, { img1: "js6.PNG" }] },
    { id: "weather", proName: "Weather forecast", proDesc: "This app will show the min. and max. the temperature of any country.", subheading: "Get temp. Info of any country", prolink: "https://weather-forecast-web.netlify.com/", prolinkdesc: "For More Info Visit here", gitLink: "https://github.com/sunny7899/weatherApp", techUsed: "HTML,CSS,JS,Angular 2+", mainImg: "w1.PNG", otherInfo: [{ p1: "we have used openweathermap API here." }, { p1: "we can change the theme colour by using the toggle button." }], otherImg: [{ img1: "w2.PNG" }, { img1: "w3.PNG" }, { img1: "w4.PNG" }] },
    { id: "quote", proName: "Random quote generator", proDesc: "In this, it will generate the random quote on button click. it also shows the current date and time.", subheading: "Motivation App", prolink: "https://random-quote-generation.netlify.com/", prolinkdesc: "For More Info Visit here", gitLink: "https://github.com/sunny7899/quotegenerator", techUsed: "HTML,CSS,JS", mainImg: "q1.PNG", otherInfo: [{ p1: "we can share quote to twitter." }], otherImg: [{ img1: "q1.PNG" }, { img1: "q2.PNG" },] },
    { id: "hackernews", proName: "Hackernews Clone", proDesc: "This is the clone of popular website hackernews. It will show the latest technology news. In this, we can see the content and comments of the user.", subheading: "Popular website", prolink: "https://hackernews-clone-web.netlify.com/", prolinkdesc: "For More Info Visit here", gitLink: "https://github.com/sunny7899/hackernewsclone", techUsed: "HTML,CSS,JS,Angular 2+", mainImg: "h1.PNG", otherInfo: [{ p1: "used hackernews apis." }], otherImg: [{ img1: "h1.PNG" }, { img1: "h2.PNG" }, { img1: "h3.PNG" }, { img1: "h4.PNG" }] },
    { id: "theme", proName: "Simple theme", proDesc: "It is a simple theme to present your business. ", subheading: "website", prolink: "https://businesstheme.netlify.com/", prolinkdesc: "For More Info Visit here", gitLink: "https://github.com/sunny7899/Simple-theme", techUsed: "HTML,CSS,JS", mainImg: "st1.PNG", otherInfo: [{ p1: "we have used font-awesome for icons" }], otherImg: [{ img1: "st2.PNG" }, { img1: "st3.PNG" }, { img1: "st5.PNG" }, { img1: "st4.PNG" }] }]
}
