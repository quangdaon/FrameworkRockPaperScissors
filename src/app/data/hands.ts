export enum Emoji {
  Rock = '✊',
  Paper = '✋',
  Scissors = '✌'
};

export type HandString = 'rock' | 'paper' | 'scissors';

export interface Hand {
  name: HandString;
  emoji: Emoji;
  beats: HandString;
  disabled: boolean;
  selected: boolean;
};

const hands: { [key in HandString]: Hand } = {
  rock: {
    name: 'rock',
    beats: 'scissors',
    emoji: Emoji.Rock,
    disabled: false,
    selected: false
  },
  paper: {
    name: 'paper',
    beats: 'rock',
    emoji: Emoji.Paper,
    disabled: false,
    selected: false
  },
  scissors: {
    name: 'scissors',
    beats: 'paper',
    emoji: Emoji.Scissors,
    disabled: false,
    selected: false
  }
};

export default hands;