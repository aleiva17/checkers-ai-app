import {GameState} from "../model/gameState.ts";

export const INITIAL_STATE: GameState = {
  playerPieces: [
    { xCoordinate: 0, yCoordinate: 7, isQueen: false },
    { xCoordinate: 2, yCoordinate: 7, isQueen: false },
    { xCoordinate: 4, yCoordinate: 7, isQueen: false },
    { xCoordinate: 6, yCoordinate: 7, isQueen: false },
    { xCoordinate: 1, yCoordinate: 6, isQueen: false },
    { xCoordinate: 3, yCoordinate: 6, isQueen: false },
    { xCoordinate: 5, yCoordinate: 6, isQueen: false },
    { xCoordinate: 7, yCoordinate: 6, isQueen: false },
    { xCoordinate: 0, yCoordinate: 5, isQueen: false },
    { xCoordinate: 2, yCoordinate: 5, isQueen: false },
    { xCoordinate: 4, yCoordinate: 5, isQueen: false },
    { xCoordinate: 6, yCoordinate: 5, isQueen: false },
  ],
  aiPieces: [
    { xCoordinate: 1, yCoordinate: 0, isQueen: false },
    { xCoordinate: 3, yCoordinate: 0, isQueen: false },
    { xCoordinate: 5, yCoordinate: 0, isQueen: false },
    { xCoordinate: 7, yCoordinate: 0, isQueen: false },
    { xCoordinate: 0, yCoordinate: 1, isQueen: false },
    { xCoordinate: 2, yCoordinate: 1, isQueen: false },
    { xCoordinate: 4, yCoordinate: 1, isQueen: false },
    { xCoordinate: 6, yCoordinate: 1, isQueen: false },
    { xCoordinate: 1, yCoordinate: 2, isQueen: false },
    { xCoordinate: 3, yCoordinate: 2, isQueen: false },
    { xCoordinate: 5, yCoordinate: 2, isQueen: false },
    { xCoordinate: 7, yCoordinate: 2, isQueen: false },
  ],
  isPlayerTurn: true,
  selectedChecker: null,
  cellsToHighlight: []
}