export enum Emoji {
  Rock = '✊',
  Paper = '✋',
  Scissors = '✌'
};

export type HandString = 'rock' | 'paper' | 'scissors';

export interface Hand {
  emoji: Emoji;
  beats: HandString;
};

const hands: { [key in HandString]: Hand } = {
  rock: {
    emoji: Emoji.Rock,
    beats: 'scissors'
  },
  paper: {
    emoji: Emoji.Paper,
    beats: 'rock'
  },
  scissors: {
    emoji: Emoji.Scissors,
    beats: 'paper'
  }
};

export default hands;