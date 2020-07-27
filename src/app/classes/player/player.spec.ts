import { Player } from './player';
import hands from 'src/app/helpers/hands';

describe('Player class', () => {
  let player: Player;

  beforeEach(() => {
    player = new Player;
  });

  it('should create', () => {
    expect(player).toBeTruthy();
  });

  it('should not have a hand', () => {
    expect(player.selected).toBeUndefined();
  });

  it('should allow selection', () => {
    for (let h in hands) {
      const hand = hands[h];
      player.select(hand);

      expect(player.selected).toBe(hand);
    }
  });

  describe('compete', () => {
    let opponent: Player;

    beforeEach(() => {
      opponent = new Player();
      opponent.select(hands.rock);
    });

    it('should return "waiting" if player hand is not selected', () => {
      expect(player.compete(opponent)).toBe('waiting');
    });

    it('should return "waiting" if opponent hand is not selected', () => {
      player.select(hands.rock);
      opponent = new Player();
      expect(player.compete(opponent)).toBe('waiting');
    });

    it('should return "draw" if hands are the same', () => {
      player.select(hands.rock);
      expect(player.compete(opponent)).toBe('draw');
    });

    it('should return "win" if player hand beats opponent hand', () => {
      player.select(hands.paper);
      expect(player.compete(opponent)).toBe('win');
    });

    it('should return "lose" if opponent hand beats player hand', () => {
      player.select(hands.scissors);
      expect(player.compete(opponent)).toBe('lose');
    });
  });
});