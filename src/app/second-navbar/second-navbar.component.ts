import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { GetPokemonService } from '../get-pokemon.service';
import {  faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-second-navbar',
  templateUrl: './second-navbar.component.html',
  styleUrls: ['./second-navbar.component.css']
})
export class SecondNavbarComponent implements OnInit {

  selected =" ";

  faSortAmountDownAlt = faSortAmountDownAlt;

  public isActive: boolean = false;

  constructor(private _getPokemonService: GetPokemonService) {
    
  }

  ngOnInit() {
  }

  //Call method dependings the selected option
  change(){
    switch (this.selected) {
      case 'c':
        this._getPokemonService.orderHeight()
        break;
      case 'b':
        this._getPokemonService.orderName()
        break;
      case 'd':
          this._getPokemonService.orderAttack()
          break;
      default:
        this._getPokemonService.orderId()
        break;
    }
  }
  //Show or hide the statics of the pokemons
  cambi() {
    if(this.isActive == true){
      $('app-progress-bars').css("display","block");
    }else{
      $('app-progress-bars').css("display","none");
    }
  }

}
