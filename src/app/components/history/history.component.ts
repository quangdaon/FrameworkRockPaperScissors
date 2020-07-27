import { Component, OnInit, Input } from '@angular/core';
import { History, HistoryItem } from 'src/app/helpers/history';
import { WinStatus } from '../../classes/player/player';

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

  getClasses(item: HistoryItem, isOpponent: string): object {
    const classes = {
      'history-hand': true
    };

    const playerClass = isOpponent ? 'opponent' : 'player';

    classes[`history-${playerClass}`] = true;

    if (
      (!isOpponent && item.status === 'win') ||
      (isOpponent && item.status === 'lose')
    ) {
      classes['winner'] = true;
    }

    return classes;
  }

  getScore(status: WinStatus): number {
    return this.history.filter(h => h.status === status).length;
  }

  getVisibleItems(): History {
    return this.history.reverse().slice(0, this.visibleItemsCount);
  }

  increaseVisibileCount(): void {
    this.visibleItemsCount += 5;
  }

}
