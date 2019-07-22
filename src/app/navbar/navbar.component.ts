import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faCoffee, faSearch, faSort } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';
import { GetPokemonService } from '../get-pokemon.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // The pipe of the search use this
  public filterPokemon ='';

  public types = '';

  faSearch = faSearch;

  faSort = faSort;
  
  buscarPokemon: FormGroup;
  
  search: string = '';

  constructor(public _getPokemonService: GetPokemonService,private fb: FormBuilder) {
    this.buscarPokemon = fb.group({
      'search':[]
    })
   }

  ngOnInit() {
    this.getPokemon('all');
  }

  //Search pokemons with the pipe and hide the stadistics for a bug
  sendSearch(search) {
    this.filterPokemon = search.search;
    $('.checkbox').prop( "checked", false );
    $('app-progress-bars').css("display","none");
  }

  //Get the diferent types of pokemon
  getPokemon(type){
    this.types = type;
  }
}
