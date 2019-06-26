import { Component, OnInit } from '@angular/core';
import { IsActiveService } from './../is-active.service';

@Component({
  selector: 'app-second-navbar',
  templateUrl: './second-navbar.component.html',
  styleUrls: ['./second-navbar.component.css']
})
export class SecondNavbarComponent implements OnInit {

  public isActive: boolean;

  constructor(public myService: IsActiveService) {
    this.isActive = false;
  }

  ngOnInit() {
  }
  cambi() {
    this.myService.estat(this.isActive);
  }
}
