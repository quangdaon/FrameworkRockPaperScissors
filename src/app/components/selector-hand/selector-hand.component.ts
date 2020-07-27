import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hand } from '../../helpers/hands';

@Component({
  selector: 'app-selector-hand',
  templateUrl: './selector-hand.component.html',
  styleUrls: ['./selector-hand.component.scss']
})
export class SelectorHandComponent implements OnInit {
  @Input() hand: Hand;
  @Input() disabled: boolean;
  @Input() selected: boolean;
  @Output() handSelected: EventEmitter<Hand> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectHand() {
    if (this.disabled || this.selected) return;
    this.handSelected.emit(this.hand);
  }

  getClasses() {
    const obj = {
      'selector-hand': true,
      disabled: this.disabled,
      selected: this.selected
    }

    obj[`selector-hand-${this.hand.name}`] = true;

    return obj;
  }

}
