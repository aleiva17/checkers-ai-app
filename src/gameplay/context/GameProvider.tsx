import { GameContext } from "./GameContext.tsx";
import {ReactElement, useEffect, useReducer, useState} from "react";
import {gameReducer} from "./GameReducer.ts";
import {checkerOwner} from "../model/checkerOwner.ts";
import {Coordinate} from "../model/coordinate.ts";
import {nextMoveApiService} from "../services/nextMoveApi.service.ts";
import {INITIAL_STATE} from "../data/initialGameState.ts";

interface GameProviderProps {
  children: Array<ReactElement> | ReactElement
}

export const GameProvider = ({ children }: GameProviderProps) => {
  const [gameState, dispatch] = useReducer(gameReducer, {
    aiPieces: [...INITIAL_STATE.aiPieces.map(piece => ({ ...piece }))],
    playerPieces: [...INITIAL_STATE.playerPieces.map(piece => ({...piece}))],
    cellsToHighlight: [...INITIAL_STATE.cellsToHighlight],
    selectedChecker: null,
    isPlayerTurn: true
  });
  const [needToUpdate, setNeedToUpdate] = useState(false);

  const resetGame = () => {
    dispatch({ type: "changeBoard", payload: { ...INITIAL_STATE } });
  }

  const toggleIsPlayerTurn = () => {
    dispatch({ type: 'setIsPlayerTurn', payload: !gameState.isPlayerTurn });
  }

  const getNextMoveBoard = async () => {
    try {
      const res = await nextMoveApiService([...gameState.aiPieces], [...gameState.playerPieces]);
      const { ai_pieces, player_pieces } = await res.json();

      dispatch({
        type: 'changeBoard',
        payload: {
          playerPieces: player_pieces.map((checker: any) => {
            return {
              isQueen: checker.is_queen,
              xCoordinate: checker.x_coordinate,
              yCoordinate: checker.y_coordinate
            }
          }),
          aiPieces: ai_pieces.map((checker: any) => {
            return {
              isQueen: checker.is_queen,
              xCoordinate: checker.x_coordinate,
              yCoordinate: checker.y_coordinate
            }
          }),
          isPlayerTurn: true
        }
      });
    }
    catch(error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    if (needToUpdate) {
      getNextMoveBoard();
      setNeedToUpdate(false);
    }
  }, [needToUpdate])

  const setSelectedChecker = ({x, y}: Coordinate): void => {
    const checker = gameState.playerPieces.find(checker => checker.xCoordinate === x && checker.yCoordinate === y);

    if (!checker) return;

    const cellsToHighlight: Array<Coordinate> = [];
    const topNeighbours: Array<[number, number]> = [[-1, -1], [1, -1]];
    const bottomNeighbours: Array<[number, number]> = [[-1, 1], [1, 1]];

    topNeighbours.forEach(([dx, dy]) => {
      const owner = getCheckerOwnerOnCoordinate({x: x + dx, y: y + dy});

      if (owner === "None") {
        cellsToHighlight.push({x: x + dx, y: y + dy});
      }
      else if (owner === "AI") {
        if (getCheckerOwnerOnCoordinate({x: x + 2 * dx, y: y + 2 * dy}) === "None") {
          cellsToHighlight.push({x: x + 2 * dx, y: y + 2 * dy});
        }
      }
    });

    if (checker.isQueen) {
      bottomNeighbours.forEach(([dx, dy]) => {
        const owner = getCheckerOwnerOnCoordinate({x: x + dx, y: y + dy});

        if (owner === "None") {
          cellsToHighlight.push({x: x + dx, y: y + dy});
        }
        else if (owner == "AI") {
          if (getCheckerOwnerOnCoordinate({x: x + 2 * dx, y: y + 2 * dy}) === "None") {
            cellsToHighlight.push({x: x + 2 * dx, y: y + 2 * dy});
          }
        }
      });
    }

    dispatch({ type: 'setSelectedChecker', payload: checker });
    dispatch({ type: 'setCellsToHighlight', payload: cellsToHighlight });
  }

  const removeSelectedChecker = (): void => {
    dispatch({ type: 'setSelectedChecker', payload: null });
    dispatch({ type: 'setCellsToHighlight', payload: [] });
  }

  const getCheckerOwnerOnCoordinate = ({x, y}: Coordinate): checkerOwner => {
    if (gameState.aiPieces.find(checker => checker.xCoordinate === x && checker.yCoordinate === y)) {
      return "AI";
    }

    if (gameState.playerPieces.find(checker => checker.xCoordinate === x && checker.yCoordinate === y)) {
      return "Player";
    }

    return "None";
  }

  const isCheckerQueenOnCoordinate = ({x, y}: Coordinate): boolean => {
    const aiPiece = gameState.aiPieces.find(checker => checker.xCoordinate === x && checker.yCoordinate === y);
    const playerPiece = gameState.playerPieces.find(checker => checker.xCoordinate === x && checker.yCoordinate === y);

    return !!aiPiece?.isQueen || !!playerPiece?.isQueen;
  }

  const removeAtCoordinate = ({x, y}: Coordinate) => {
    dispatch({
      type: 'removeCheckerAtCoordinate',
      payload: {
        x: Math.floor((gameState.selectedChecker!.xCoordinate + x) / 2),
        y: Math.floor((gameState.selectedChecker!.yCoordinate + y) / 2)
      }
    });
  }

  const moveSelectedChecker = async ({x, y}: Coordinate) => {
    if (!gameState.selectedChecker) return;

    if (Math.abs(gameState.selectedChecker.xCoordinate - x) == 2) {
      removeAtCoordinate({x, y});
    }

    gameState.selectedChecker.xCoordinate = x;
    gameState.selectedChecker.yCoordinate = y;
    if (y === 0) gameState.selectedChecker.isQueen = true;

    dispatch({ type: 'moveSelectedChecker', payload: gameState.selectedChecker });
    removeSelectedChecker();
    dispatch({ type: 'setIsPlayerTurn', payload: false });
    //await getNextMoveBoard();
    setNeedToUpdate(true);
  }

  return (
    <GameContext.Provider
      value={{
        gameState,
        resetGame,
        getNextMoveBoard,
        getCheckerOwnerOnCoordinate,
        setSelectedChecker,
        removeSelectedChecker,
        isCheckerQueenOnCoordinate,
        toggleIsPlayerTurn,
        moveSelectedChecker
      }}
    >
      { children }
    </GameContext.Provider>
  );
};