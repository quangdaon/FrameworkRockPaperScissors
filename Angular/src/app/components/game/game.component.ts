import { Component, OnInit, ViewChild } from '@angular/core';
import { Player } from '@shared/classes/player/player';
import { randomFromArray } from '@shared/helpers/helpers';
import hands from '@shared/helpers/hands';
import { SelectorComponent } from '../selector/selector.component';
import { History } from '@shared/helpers/history';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @ViewChild(SelectorComponent) selector: SelectorComponent;

  private player: Player;
  private opponent: Player;
  result: string = '';
  history: History = [];
  slow: boolean = true;

  constructor() {
    this.player = new Player();
    this.opponent = new Player();
  }

  ngOnInit(): void {
  }

  playerSelected(hand) {
    this.player.select(hand);
    this.opponent.select(randomFromArray(Object.values(hands)));
    this.compareResults();
  }

  reset() {
    this.player = new Player();
    this.opponent = new Player();
    this.opponent.select(randomFromArray(Object.values(hands)));
    this.result = '';
    this.selector.reset();
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
      case 'lose':
        this.result = `${selection}. You lose!`;
        break;
      default:
        return;
    }

    this.history.push({
      player: this.player.selected,
      opponent: this.opponent.selected,
      status: result
    });
  }
}
