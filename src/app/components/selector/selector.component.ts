import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import hands, { Hand } from '../../helpers/hands';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {
  options: Hand[];
  selected: Hand;

  @Input() slow: boolean;

  @Output() selection: EventEmitter<Hand> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.options = Object.values(hands);
  }

  reset() {
    this.selected = null;
  }

  selectHand(hand: Hand): void {
    this.selected = hand;
    this.selection.emit(hand);
  }

  isSelected(hand) {
    return this.slow && this.selected && this.selected === hand;
  }

  isDisabled(hand) {
    return this.slow && this.selected && this.selected !== hand;
  }
}
