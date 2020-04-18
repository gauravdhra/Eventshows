import { Component, ElementRef } from '@angular/core';

import { HostListener, Inject } from "@angular/core";
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SairyoRedefined';
  yesscroll = false;
  constructor(private elementRef: ElementRef, @Inject(DOCUMENT) private document: any) {

  }
  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 300) {
      console.log('You are 100px from the top to bottom');
      //  .navbar - custom.top - nav - collapse {
      //   padding: 0.375rem 1.5rem 0.375rem 2rem;
      //   box - shadow: 0 0.0625rem 0.375rem 0 rgba(0, 0, 0, 0.1);
      //   background - color: #113448;
      // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'yourColor';
      this.yesscroll = true;
    } else if (number < 300) {
      this.yesscroll=false;
    }
  }
}
