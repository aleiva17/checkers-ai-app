import {Checker} from "../model/checker.ts";

const apiUrl = "http://127.0.0.1:8000/api/v1/game/next-move";

export const nextMoveApiService = (aiPieces: Array<Checker>, playerPieces: Array<Checker>): Promise<Response> => {
  return fetch(
    apiUrl,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        player_pieces: playerPieces.map(checker => {
          return {
            is_queen: checker.isQueen,
            x_coordinate: checker.xCoordinate,
            y_coordinate: checker.yCoordinate
          }
        }),
        ai_pieces: aiPieces.map(checker => {
          return {
            is_queen: checker.isQueen,
            x_coordinate: checker.xCoordinate,
            y_coordinate: checker.yCoordinate
          }
        })
      }),
    }
  );
}