import { Component, OnInit, Input } from '@angular/core';
import { History, HistoryItem } from '@shared/helpers/history';
import { WinStatus } from '@shared/classes/player/player';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  @Input() history: History;
  visibleItemsCount: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

  getHandClasses(item: HistoryItem, isOpponent: boolean = false): object {
    const classes = {
      'history-hand': true,
      'history-player': !isOpponent,
      'history-opponent': isOpponent,
      'history-winner': (!isOpponent && item.status === 'win') || (isOpponent && item.status === 'lose')
    };

    return classes;
  }

  getScore(status: WinStatus): number {
    return this.history.filter(h => h.status === status).length;
  }

  getVisibleItems(): History {
    return this.history.reverse().slice(0, this.visibleItemsCount);
  }

  increaseVisibleCount(): void {
    this.visibleItemsCount += 5;
  }

}
