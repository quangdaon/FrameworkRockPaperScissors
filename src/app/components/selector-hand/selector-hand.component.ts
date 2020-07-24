import { Component, OnInit, Input } from '@angular/core';
import { Hand } from 'src/data/hands';

@Component({
  selector: 'app-selector-hand',
  templateUrl: './selector-hand.component.html',
  styleUrls: ['./selector-hand.component.scss']
})
export class SelectorHandComponent implements OnInit {
  @Input() hand: Hand

  constructor() { }

  ngOnInit(): void {
  }

}
