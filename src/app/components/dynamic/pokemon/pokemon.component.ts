import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponen implements OnInit {
  
  constructor() {}
  ngOnInit() {}

  @Input() listPokemons:any= [];
}
