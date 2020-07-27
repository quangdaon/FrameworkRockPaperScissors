import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import hands, { Hand } from '../../helpers/hands';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {
  options: Hand[];
  selected: Hand;

  @Output() selection: EventEmitter<Hand> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.options = Object.values(hands);
  }

  selectHand(hand: Hand): void {
    this.selected = hand;
  }

  isSelected(hand) {
    return this.selected && this.selected === hand;
  }

  isDisabled(hand) {
    return this.selected && this.selected !== hand;
  }
}
