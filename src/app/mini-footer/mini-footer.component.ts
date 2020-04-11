import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-footer',
  templateUrl: './mini-footer.component.html',
  styleUrls: ['./mini-footer.component.scss']
})
export class MiniFooterComponent implements OnInit {
  collapse = false
  constructor() { }
  
  ngOnInit() {
  }
  
  
    toggle() {
      this.collapse = !this.collapse
    }
}
