import { Component, OnInit } from '@angular/core';
import { Player } from '../../classes/player/player';
import { randomFromArray } from '../../helpers/helpers';
import hands from 'src/app/helpers/hands';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  private player: Player;
  private opponent: Player;

  constructor() { 
    this.player = new Player();
    this.opponent = new Player();

  }
  
  ngOnInit(): void {
    this.opponent.select(randomFromArray(Object.values(hands)));
  }

}
