import { Component, OnInit } from '@angular/core';
import hands, { Hand, SelectableHand } from '../../data/hands';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {
  options: SelectableHand[];
  selected: Hand;

  constructor() { }

  ngOnInit(): void {
    this.options = Object.values(hands).map(h => {
      const hand: SelectableHand = <SelectableHand>h;
      hand.disabled = false;
      hand.selected = false;
      return hand;
    });
  }

  handSelected(hand: Hand): void {
    this.selected = hand;

    this.options.forEach(h => {
      h.selected = h === this.selected;
      h.disabled = h !== this.selected;
    });

    console.log(this.selected);
  }

}
