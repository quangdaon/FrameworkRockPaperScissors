import { Component, OnInit } from '@angular/core';
import hands, { Hand } from 'src/data/hands';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {
  options: Hand[];

  constructor() { }

  ngOnInit(): void {
    this.options = Object.values(hands);
  }

}
