import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { pokemon } from '../pokemon';

@Component({
  selector: 'app-specs',
  templateUrl: './specs.component.html',
  styleUrls: ['./specs.component.css']
})
export class SpecsComponent implements OnInit {

  @Input() pokemon: pokemon;
  
  constructor() { }

  ngOnInit() {
  }

  // It define a border color for the img by the color property 
  setColor(col, name) {
    if (col == 'Red') {
      $('.'+ name + ' img').addClass('border-danger');
    }else if(col == 'Yellow'){
      $('.'+ name + ' img').addClass('border-warning');
    }else if(col == 'Green'){
      $('.'+ name + ' img').addClass('border-success');
    }else if(col == 'Blue'){
      $('.'+ name + ' img').addClass('border-primary');
    }else if(col == 'White'){
      $('.'+ name + ' img').addClass('border-white');
    }else if(col == 'Purple'){
      $('.'+ name + ' img').addClass('border-dark');
    }else if(col == 'Brown'){
      $('.'+ name + " img").addClass('border-secondary');
    }else if(col == 'Pink'){
      $('.'+ name + ' img').addClass('border-danger');
    }else if(col == 'Black'){
      $('.'+ name + ' img').addClass('border-dark');
    }
  }
}
