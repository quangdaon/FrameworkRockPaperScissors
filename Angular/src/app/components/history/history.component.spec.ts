import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryComponent } from './history.component';
import { History, HistoryItem } from 'src/app/helpers/history';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import hands from 'src/app/helpers/hands';
import seedHistory from './history.component.seed';



describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;
  let history: History;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();

    history = seedHistory();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    component.history = history;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getHandClasses', () => {
    it('should have a "history-item" class', () => {
      const classes = component.getHandClasses(history[0]);

      expect(classes['history-hand']).toBeTrue();
    });

    it('should assign "history-player" by default', () => {
      const classes = component.getHandClasses(history[0]);

      expect(classes['history-player']).toBeTrue();
      expect(classes['history-opponent']).toBeFalse();
    });

    it('should assign "history-player" when isOpponent is false', () => {
      const classes = component.getHandClasses(history[0], false);

      expect(classes['history-player']).toBeTrue();
      expect(classes['history-opponent']).toBeFalse();
    });

    it('should assign "history-opponent" when isOpponent is true', () => {
      const classes = component.getHandClasses(history[0], true);

      expect(classes['history-player']).toBeFalse();
      expect(classes['history-opponent']).toBeTrue();
    });

    it('should not assign "history-winner" when isOpponent is false and player loses', () => {
      const historyItem: HistoryItem = {
        player: null,
        opponent: null,
        status: 'lose'
      };
      const classes = component.getHandClasses(historyItem);

      expect(classes['history-winner']).toBeFalse();
    });

    it('should assign "history-winner" when isOpponent is false and player wins', () => {
      const historyItem: HistoryItem = {
        player: null,
        opponent: null,
        status: 'win'
      };
      const classes = component.getHandClasses(historyItem);

      expect(classes['history-winner']).toBeTrue();
    });

    it('should not assign "history-winner" when isOpponent is true and player wins', () => {
      const historyItem: HistoryItem = {
        player: null,
        opponent: null,
        status: 'win'
      };
      const classes = component.getHandClasses(historyItem, true);

      expect(classes['history-winner']).toBeFalse();
    });

    it('should assign "history-winner" when isOpponent is false and player wins', () => {
      const historyItem: HistoryItem = {
        player: null,
        opponent: null,
        status: 'lose'
      };
      const classes = component.getHandClasses(historyItem, true);

      expect(classes['history-winner']).toBeTrue();
    });
  });

  describe('getScore', () => {
    it('should return count of all items if given status', () => {
      expect(component.getScore('win')).toBe(8);
      expect(component.getScore('lose')).toBe(5);
      expect(component.getScore('draw')).toBe(7);
    });
  });

  describe('increaseVisibleCount', () => {
    it('should increment visibleItemsCount by 5', () => {
      component.increaseVisibleCount();
      expect(component.visibleItemsCount).toBe(10);
      component.increaseVisibleCount();
      expect(component.visibleItemsCount).toBe(15);
      component.increaseVisibleCount();
      expect(component.visibleItemsCount).toBe(20);
    });
  });

  describe('getVisibleItems', () => {
    it('should return history in reverse', () => {
      component.history = [
        {
          player: hands.rock,
          opponent: hands.paper,
          status: 'lose'
        },
        {
          player: hands.scissors,
          opponent: hands.paper,
          status: 'win'
        }
      ];

      expect(component.getVisibleItems()).toEqual([
        {
          player: hands.scissors,
          opponent: hands.paper,
          status: 'win'
        },
        {
          player: hands.rock,
          opponent: hands.paper,
          status: 'lose'
        }
      ]);
    });

    it('should respect visibleItemsCount', () => {
      expect(component.getVisibleItems().length).toBe(5);
      component.visibleItemsCount = 3;
      expect(component.getVisibleItems().length).toBe(3);
    });

    it('should take from end of history', () => {
      expect(component.getVisibleItems()).toEqual([
        {
          player: hands.scissors,
          opponent: hands.rock,
          status: "win"
        },
        {
          player: hands.scissors,
          opponent: hands.paper,
          status: "lose"
        },
        {
          player: hands.scissors,
          opponent: hands.paper,
          status: "lose"
        },
        {
          player: hands.paper,
          opponent: hands.paper,
          status: "draw"
        },
        {
          player: hands.paper,
          opponent: hands.paper,
          status: "draw"
        }
      ]);
      component.visibleItemsCount = 3;
      expect(component.getVisibleItems().length).toBe(3);
    });
  });
});
