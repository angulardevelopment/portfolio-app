import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


// <section id="contact-section">
// <div class="wrap-pad">
//     <div class="row">
//         <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 " data-scrollreveal="enter top and move 100px, wait 0.5s">
//             <div class="text-center">
//                 <h1><i class="fa fa-tint small-icons bk-color-black"></i>Contact Me</h1>
//                 <p class="lead">
//                 <!-- Sig -->
//                 </p>
//             </div>
//         </div>
//         <!-- ./ Heading div-->
//         <div class="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1  margin-top-20">
//             <div class="col-md-6  col-sm-12" data-scrollreveal="enter left and move 100px, wait 0.6s"
//                 style="width:100%">
//                 <h3><i class="fa fa-pencil small-icons bk-color-light-blue"></i>Get in touch</h3>
//                 <hr />
        
//                 <form action="https://formspree.io/apexmansunny@gmail.com" method="POST">
//                     <div class="row">
//                         <div class="col-md-6 col-sm-6">
//                             <div class="form-group">
//                                 <input type="text" class="form-control" name="name" required="required" placeholder="Name">
//                             </div>
//                         </div>
//                         <div class="col-md-6 col-sm-6">
//                             <div class="form-group">
//                                 <input type="text" class="form-control" name="email" required="required" placeholder="Email address">
//                             </div>
//                         </div>
//                     </div>
//                     <div class="row">
//                         <div class="col-md-12 col-sm-12">
//                             <div class="form-group">
//                                 <textarea name="message" id="message" required="required" class="form-control"
//                                     rows="4" placeholder="Message"></textarea>
//                             </div>
//                             <div class="form-group">
//                                 <button type="submit" class="btn btn-primary btn-lg">Send Message</button>
//                             </div>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//             <!-- <div class="col-md-4 col-md-offset-1  col-sm-12" data-scrollreveal="enter right and move 100px, wait 0.6s">
//             <h3><i class="fa fa-comments small-icons bk-color-red"></i>Reach Us Here</h3>
//             <hr />
//             123, New york lane.<br />
//             Call: +23-00-89-009<br />
//             Email: info@yourdomain.com<br />
//             <h3><i class="fa fa-plus small-icons bk-color-green"></i>Social Presence</h3>
//             <a href="#"><i class="fa fa-facebook fa-3x color-facebook"></i></a>
//             <a href="#"><i class="fa fa-twitter fa-3x color-twitter"></i></a>
//             <a href="#"><i class="fa fa-google-plus fa-3x color-google-plus"></i></a>
//             <a href="#"><i class="fa fa-linkedin fa-3x color-linkedin"></i></a>
//             <a href="#"><i class="fa fa-pinterest fa-3x color-pinterest"></i></a>
//         </div> -->
//         </div>
//         <!-- ./ Content div-->
//     </div>
// </div>
// </section>