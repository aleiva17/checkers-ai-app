import {GameState} from "../model/gameState.ts";
import {Checker} from "../model/checker.ts";
import {Coordinate} from "../model/coordinate.ts";

type GameAction =
  | { type: 'changeBoard', payload: { aiPieces: Array<Checker>, playerPieces: Array<Checker>, isPlayerTurn: boolean } }
  | { type: 'setIsPlayerTurn', payload: boolean }
  | { type: 'setPlayerPieces', payload: Array<Checker> }
  | { type: 'setAiPieces', payload: Array<Checker> }
  | { type: 'setSelectedChecker', payload: Checker | null }
  | { type: 'setCellsToHighlight', payload: Array<Coordinate> }
  | { type: 'moveSelectedChecker', payload: Checker }
  | { type: 'removeCheckerAtCoordinate', payload: Coordinate };

export const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'changeBoard':
      return {
        ...state,
        aiPieces: [...action.payload.aiPieces],
        playerPieces: [...action.payload.playerPieces],
        isPlayerTurn: action.payload.isPlayerTurn,
      };
    case 'setIsPlayerTurn':
      return  {
        ...state,
        isPlayerTurn: action.payload
      };
    case 'setAiPieces':
      return {
        ...state,
        aiPieces: action.payload
      };
    case 'setPlayerPieces':
      return {
        ...state,
        playerPieces: action.payload
      };
    case 'setSelectedChecker':
      return {
        ...state,
        selectedChecker: action.payload
      }
    case 'setCellsToHighlight':
      return {
        ...state,
        cellsToHighlight: [...action.payload]
      }
    case 'moveSelectedChecker':
      return {
        ...state,
        playerPieces: state.playerPieces.map(checker => {
          if (checker !== action.payload) return { ...checker };
          return { ...action.payload };
        })
      }
    case 'removeCheckerAtCoordinate':
      return {
        ...state,
        playerPieces: [...state.playerPieces.filter(checker => {
            return !(checker.xCoordinate === action.payload.x && checker.yCoordinate === action.payload.y);
        })],
        aiPieces: [...state.aiPieces.filter(checker => {
          return !(checker.xCoordinate === action.payload.x && checker.yCoordinate === action.payload.y);
        })]
      }
    default:
      return state;
  }
};