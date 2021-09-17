export enum Emoji {
  Rock = '✊',
  Paper = '✋',
  Scissors = '✌'
}

export type HandString = 'rock' | 'paper' | 'scissors';

export interface Hand {
  name: HandString;
  emoji: Emoji;
  beats: HandString;
}

const hands: { [key in HandString]: Hand } = {
  rock: {
    name: 'rock',
    beats: 'scissors',
    emoji: Emoji.Rock
  },
  paper: {
    name: 'paper',
    beats: 'rock',
    emoji: Emoji.Paper
  },
  scissors: {
    name: 'scissors',
    beats: 'paper',
    emoji: Emoji.Scissors
  }
};

export default hands;