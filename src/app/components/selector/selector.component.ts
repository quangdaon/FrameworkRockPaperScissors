import { Component, OnInit } from '@angular/core';
import hands, { Hand } from '../../data/hands';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {
  options: Hand[];
  selected: Hand;

  constructor() { }

  ngOnInit(): void {
    this.options = Object.values(hands);
  }

  handSelected(hand: Hand): void {
    this.selected = hand;
  }

  isSelected(hand) {
    return this.selected && this.selected === hand;
  }

  isDisabled(hand) {
    return this.selected && this.selected !== hand;
  }
}
