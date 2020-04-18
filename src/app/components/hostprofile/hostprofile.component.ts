import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hostprofile',
  templateUrl: './hostprofile.component.html',
  styleUrls: ['./hostprofile.component.scss']
})
export class HostprofileComponent implements OnInit {

  constructor() { }  
  page=1;
  showPopUp = true;
  ngOnInit(): void {
    this.page=1;
  }

  closePopUp(){
    this.showPopUp = false;
    console.log("closed")
  }

  pageIncrement(){
    if(this.page!=4)
    {
      this.page = this.page + 1;
      console.log("page increased", this.page)
    }    
  }

  PageDecrement(){
    if(this.page!=1)
    {
      this.page = this.page - 1;
      console.log("page decreased", this.page)
    }    
  }
}
