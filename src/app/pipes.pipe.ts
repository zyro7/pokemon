import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipes'
})
/**
 * Pipe that search in the array of pokemons the name
 */
export class PipesPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const resultPokemon = [];
    for (const pokemon of value) {
      if (pokemon.name.indexOf(args)  > -1) {
        resultPokemon.push(pokemon);
      }
    }
    return resultPokemon;
  }

}
