import { Hand } from './hands';
import { WinStatus } from '../classes/player/player';

export type HistoryItem = { player: Hand, opponent: Hand, status: WinStatus };

export type History = HistoryItem[];