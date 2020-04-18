import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-browse-categories',
  templateUrl: './browse-categories.component.html',
  styleUrls: ['./browse-categories.component.scss']
})
export class BrowseCategoriesComponent implements OnInit {
  cities: SelectItem[];

  cities2: City[];

  selectedCity: City;
  
  constructor() {
    this.cities = [
      { label: 'Sort by Date', value: null },
      { label: 'today', value: { id: 1, name: 'New York', code: 'NY' } },
      { label: 'tommorrow', value: { id: 2, name: 'Rome', code: 'RM' } },
      { label: 'last week', value: { id: 3, name: 'London', code: 'LDN' } },
      { label: 'month', value: { id: 4, name: 'Istanbul', code: 'IST' } },
      { label: 'year', value: { id: 5, name: 'Paris', code: 'PRS' } }
    ];

    //An array of cities
    this.cities2 = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ]; 
    
   }

  ngOnInit() {
  }

}
