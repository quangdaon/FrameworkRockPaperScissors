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
  result: string;

  constructor() {
    this.player = new Player();
    this.opponent = new Player();
  }

  ngOnInit(): void {
    this.opponent.select(randomFromArray(Object.values(hands)));
  }

  playerSelected(hand) {
    this.player.select(hand);

    this.compareResults();
  }
  compareResults() {
    const result = this.player.compete(this.opponent)
    const selection = `Opponent selected ${this.opponent.selected.emoji}`;

    switch (result) {
      case 'draw':
        this.result = `${selection}. It's a draw!`
        break;
      case 'win':
        this.result = `${selection}. You win!`;
        break;
      case 'draw':
        this.result = `${selection}. You lose!`;
        break;
    }
  }
}
