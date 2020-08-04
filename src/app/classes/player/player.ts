import { Hand } from '../../helpers/hands';

export type WinStatus = 'waiting' | 'win' | 'lose' | 'draw';

export class Player {
  selected: Hand = null;

  select(hand: Hand) {
    this.selected = hand;
  }

  compete(opponent: Player): WinStatus {
    const oppHand = opponent.selected;
    const playerHand = this.selected;

    if (!oppHand || !playerHand) return 'waiting';
    if (playerHand.name === oppHand.name) return 'draw';
    if (playerHand.beats === oppHand.name) return 'win';
    if (oppHand.beats === playerHand.name) return 'lose';

    return 'waiting';
  }
}