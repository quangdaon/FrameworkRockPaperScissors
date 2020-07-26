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
    this.handSelected.emit(this.hand);
  }

}
