import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hand } from '../../data/hands';

@Component({
  selector: 'app-selector-hand',
  templateUrl: './selector-hand.component.html',
  styleUrls: ['./selector-hand.component.scss']
})
export class SelectorHandComponent implements OnInit {
  @Input() hand: Hand
  @Output() handSelected: EventEmitter<Hand> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectHand() {
    if (this.hand.disabled || this.hand.selected) return;
    this.handSelected.emit(this.hand);
  }

  getClasses() {
    const obj = {
      'selector-hand': true,
      disabled: this.hand.disabled,
      selected: this.hand.selected
    }

    obj[`selector-hand-${this.hand.name}`] = true;

    return obj;
  }

}
