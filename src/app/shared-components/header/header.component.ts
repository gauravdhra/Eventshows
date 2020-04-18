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

  constructor() { }

  ngOnInit(): void {
  }
  brands: Brand[] = [
    { value: 'none', viewValue: 'none' },
    // { value: 'Gucci', viewValue: 'Gucci' },
    // { value: 'Prada', viewValue: 'Prada' },
    // { value: 'Chanel', viewValue: 'Chanel' },
  ];


}
