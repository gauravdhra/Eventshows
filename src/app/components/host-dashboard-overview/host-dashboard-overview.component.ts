import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-dashboard-overview',
  templateUrl: './host-dashboard-overview.component.html',
  styleUrls: ['./host-dashboard-overview.component.scss']
})
export class HostDashboardOverviewComponent implements OnInit {

  constructor() { }

  home = false;
  settings = false;
  profile = false;  

  ngOnInit(): void {
    this.home = true;
  }

  onProfileClick(){
    this.home = false;
    this.profile = true;
    this.settings = false;
  }

  onSettingsClick(){
    this.home = false;
    this.profile = false;
    this.settings = true;
  }

  onHomeClick(){
    this.home = true;
    this.profile = false;
    this.settings = false;
  }

}
