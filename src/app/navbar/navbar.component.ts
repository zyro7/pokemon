import { Component, OnInit,NgModule } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
// The pipe of the search use this
  public filterPokemon = '';
  buscarPokemon = new FormGroup({
    search: new FormControl('')
  })
  constructor() { }

  ngOnInit() {
  }

  sendSearch() {
    
  }
}
