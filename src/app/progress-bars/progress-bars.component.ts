import { Component, OnInit, Input } from '@angular/core';
import { pokemon } from '../pokemon';

@Component({
  selector: 'app-progress-bars',
  templateUrl: './progress-bars.component.html',
  styleUrls: ['./progress-bars.component.css']
})
export class ProgressBarsComponent implements OnInit {

  @Input() pokemon: pokemon;
  
  constructor() { }

  ngOnInit() {
  }

  // returns the specifies spec for drawing of the progress bar
  getProperty(spec) {
    let property = {
      'width': spec + '%'
    }
    return property;
  }
}
