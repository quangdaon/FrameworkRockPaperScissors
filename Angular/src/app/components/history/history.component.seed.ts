import hands from 'src/app/helpers/hands';
import { History } from 'src/app/helpers/history';

export default (): History => ([
  {
    player: hands.rock,
    opponent: hands.rock,
    status: "draw"
  },
  {
    player: hands.rock,
    opponent: hands.scissors,
    status: "lose"
  },
  {
    player: hands.scissors,
    opponent: hands.rock,
    status: "win"
  },
  {
    player: hands.paper,
    opponent: hands.paper,
    status: "draw"
  },
  {
    player: hands.scissors,
    opponent: hands.rock,
    status: "win"
  },
  {
    player: hands.scissors,
    opponent: hands.rock,
    status: "win"
  },
  {
    player: hands.rock,
    opponent: hands.scissors,
    status: "lose"
  },
  {
    player: hands.paper,
    opponent: hands.scissors,
    status: "win"
  },
  {
    player: hands.paper,
    opponent: hands.scissors,
    status: "win"
  },
  {
    player: hands.scissors,
    opponent: hands.scissors,
    status: "draw"
  },
  {
    player: hands.rock,
    opponent: hands.paper,
    status: "win"
  },
  {
    player: hands.rock,
    opponent: hands.rock,
    status: "draw"
  },
  {
    player: hands.scissors,
    opponent: hands.scissors,
    status: "draw"
  },
  {
    player: hands.paper,
    opponent: hands.rock,
    status: "lose"
  },
  {
    player: hands.scissors,
    opponent: hands.rock,
    status: "win"
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
    player: hands.scissors,
    opponent: hands.rock,
    status: "win"
  }
])