import { createContext } from "react";
import {GameState} from "../model/gameState.ts";
import {checkerOwner} from "../model/checkerOwner.ts";
import {Coordinate} from "../model/coordinate.ts";

export type GameContextProps = {
  gameState: GameState;
  resetGame: () => void;
  getNextMoveBoard: () => void;
  getCheckerOwnerOnCoordinate: (coordinate: Coordinate) => checkerOwner;
  toggleIsPlayerTurn: () => void;
  isCheckerQueenOnCoordinate: (coordinate: Coordinate) => boolean;
  removeSelectedChecker: () => void;
  setSelectedChecker: (coordinate: Coordinate) => void;
  moveSelectedChecker: (coordinate: Coordinate) => void;
};

export const GameContext = createContext<GameContextProps>({} as GameContextProps);