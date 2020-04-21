import { Component, OnInit } from '@angular/core';

export interface Brand {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  collapse = false
  showFiller = false;

  sidenavWidth = 4;
  ngStyle: string;
  constructor() { }

  ngOnInit(): void {
  }
  categories: Brand[] = [
    { value: 'categories', viewValue: 'Categories' },
    { value: 'Gucci', viewValue: 'Gucci' },
    { value: 'Prada', viewValue: 'Prada' },
    { value: 'Chanel', viewValue: 'Chanel' }
  ];
  dates: Brand[] = [
    { value: 'dates', viewValue: 'Dates' },
    { value: 'Gucci', viewValue: 'Gucci' },
    { value: 'Prada', viewValue: 'Prada' },
    { value: 'Chanel', viewValue: 'Chanel' }
  ];
  increase() {
    this.sidenavWidth = 15;
    console.log('increase sidenav width');
  }
  decrease() {
    this.sidenavWidth = 4;
    console.log('decrease sidenav width');
  }

  toggle() {
    this.collapse = !this.collapse
  }

}

