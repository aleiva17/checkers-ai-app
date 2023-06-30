import {Checker} from "./checker.ts";
import {Coordinate} from "./coordinate.ts";

export interface GameState {
  isPlayerTurn: boolean;
  aiPieces: Array<Checker>;
  playerPieces: Array<Checker>;
  selectedChecker: Checker | null;
  cellsToHighlight: Array<Coordinate>;
}