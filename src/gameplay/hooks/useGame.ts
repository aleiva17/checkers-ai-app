import {useContext} from "react";
import {GameContext} from "../context/GameContext.tsx";

export const useGame = () => {
  const {
    gameState,
    getNextMoveBoard,
    toggleIsPlayerTurn,
    getCheckerOwnerOnCoordinate,
    isCheckerQueenOnCoordinate,
    setSelectedChecker,
    removeSelectedChecker,
    resetGame,
    moveSelectedChecker
  } = useContext(GameContext);

  const {
    aiPieces,
    selectedChecker,
    playerPieces,
    isPlayerTurn,
    cellsToHighlight
  } = gameState;

  return {
    aiPieces: aiPieces,
    playerPieces: playerPieces,
    isPlayerTurn: isPlayerTurn,
    cellsToHighlight: cellsToHighlight,
    selectedChecker: selectedChecker,
    getNextMoveBoard,
    toggleIsPlayerTurn,
    resetGame,
    isCheckerQueenOnCoordinate,
    getCheckerOwnerOnCoordinate,
    setSelectedChecker,
    removeSelectedChecker,
    moveSelectedChecker
  };
}