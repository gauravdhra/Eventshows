import { Component, OnInit, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  yesscroll = false;  
  constructor(private elementRef: ElementRef) {    
   }
   
  ngOnInit(): void {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 200) {
      // console.log('You are 100px from the top to bottom');
      //  .navbar - custom.top - nav - collapse {
      //   padding: 0.375rem 1.5rem 0.375rem 2rem;
      //   box - shadow: 0 0.0625rem 0.375rem 0 rgba(0, 0, 0, 0.1);
      //   background - color: #113448;
      // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'yourColor';
      this.yesscroll = true;
    } else if (number < 200) {
      this.yesscroll = false;
    }
  }

}
