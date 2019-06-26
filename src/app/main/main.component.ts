import { Component, OnInit, Input, NgModule } from '@angular/core';
import json from '../../assets/pokemon.json';
import { IsActiveService } from './../is-active.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {  

  public isActive: boolean = false;

  public pokemons;

  @Input() search: string;

  constructor(public myService: IsActiveService) { }

  ngOnInit() {

    this.pokemons = JSON.parse(JSON.stringify(json.pokemons));
  }
  
  ngOnChanges() {
    this.isActive = this.myService.getEstat();
    console.log('onchangesWorks')
  }

  

}
