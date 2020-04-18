import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard-onboarding',
  templateUrl: './user-dashboard-onboarding.component.html',
  styleUrls: ['./user-dashboard-onboarding.component.scss']
})
export class UserDashboardOnboardingComponent implements OnInit {
  constructor() { }
  showPopUp = false;

  ngOnInit(): void {
    this.showPopUp = true;
  }

  closePopUp(){
    this.showPopUp = false;
    console.log("closed")
  }

}
