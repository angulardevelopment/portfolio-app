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
  @ViewChild('getPath') tempPath;
  detailsPro = [
    { id: "name", proName: "dfvas", proDesc: "sfasa", subheading: "sdcsd", prolink: "", gitLink: "", techUsed: "HTML,CSS,JS,Angular2+", prolinkdesc: "For More Info Visit here", mainImg: "mp2.PNG", otherInfo: [{ p1: "." }, { p1: "" }], otherImg: [{ img1: "mp1.PNG" }, { img1: "mp3.PNG" }, { img1: "mp4.PNG" }, { img1: "mp5.PNG" }] },
    { id: "name1", proName: "fas", proDesc: "", subheading: "", prolink: "", prolinkdesc: "For More Info Visit here", gitLink: "#", techUsed: "HTML,CSS,JS,Angular 2+", mainImg: "u1.PNG", otherInfo: [{ p1: "" }, { p1: "" }], otherImg: [{ img1: "u2.gif" }, { img1: "u3.PNG" }, { img1: "u4.PNG" }, { img1: "u5.PNG" }] },
]

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




 }
