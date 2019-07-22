import { Component, OnInit, Input } from '@angular/core';
import { GetPokemonService } from '../get-pokemon.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {  

  public pokemons = [] ;

  @Input() search: string;

  @Input() types: string;

  modalRef: BsModalRef;
  
  public pokemonsObservable;

  constructor(public _getPokemonService: GetPokemonService, private modalService: BsModalService) { 
    //Subscribe to a service getPokemons and set the Array empty, to update it later
    this.pokemonsObservable = this._getPokemonService.getPokemons();
    this.pokemonsObservable.subscribe((pokemonsData: any[]) => {
      this.refresh();
      setTimeout(()=>{    
        this.pokemons = pokemonsData;
      }, 10);
    })
  }

  ngOnInit() {

  }
  
  openModal() {
    const modalRef = this.modalService.show(ModalComponent);
    this.modalRef.content.closeBtnName = 'Close';
  }
  
  refresh() {
    this.pokemons = [];
  }
}
