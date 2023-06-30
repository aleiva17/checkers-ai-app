import {useGame} from "../hooks/useGame.ts";
import {checkerOwner} from "../model/checkerOwner.ts";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Board = () => {
  const {
    isPlayerTurn,
    selectedChecker,
    cellsToHighlight,
    playerPieces,
    aiPieces,
    setSelectedChecker,
    resetGame,
    removeSelectedChecker,
    moveSelectedChecker,
    isCheckerQueenOnCoordinate,
    getCheckerOwnerOnCoordinate
  } = useGame();

  const navigate = useNavigate();

  useEffect(() => {
    if (playerPieces.length === 0) {
      setTimeout(() => {
        resetGame();
        localStorage.setItem("game-state", JSON.stringify(false));
        navigate("/game-over");
      }, 1250);
    }
  }, [playerPieces]);

  useEffect(() => {
    if (aiPieces.length === 0) {
      setTimeout(() => {
        resetGame();
        localStorage.setItem("game-state", JSON.stringify(true));
        navigate("/game-over");
      }, 1250);
    }
  }, [aiPieces]);

  const cellIsClicked = async (row: number, col: number, owner: checkerOwner) => {
    if (!isPlayerTurn) return;

    if (selectedChecker) {
      if (cellsToHighlight.find(({x, y}) => x === col && y === row)) {
        await moveSelectedChecker({x: col, y: row});
        return;
      }
      removeSelectedChecker();
      return;
    }

    owner === "Player" && setSelectedChecker({x: col, y: row});
  }

  return (
    <div className="grid grid-cols-8 border-4 border-gray-700 grid-rows-8">
      {
        Array(64)
          .fill(null)
          .map((_, index) => {
            const row: number = Math.floor(index / 8) + 1;
            const col: number = index % 8;
            const owner = getCheckerOwnerOnCoordinate({x: col, y: row - 1});
            const isQueen = isCheckerQueenOnCoordinate({x: col, y: row - 1});

            return (
              <div
                key={index}
                className={`
                  ${ col % 2 === row % 2 ? "bg-[#2c3b4b]" : "bg-[#ebebff]" } 
                  flex justify-center items-center
                  xs:w-6 xs:h-6
                  w-10 h-10
                  md:w-12 md:h-12
                  lg:w-16 lg:h-16
                `}
                onClick={() => cellIsClicked(row - 1, col, owner)}
              >
                {
                  owner === "AI"
                    ? (
                      <img
                        className="w-10/12 h-10/12"
                        src={`/black${ isQueen ? "-queen" : "" }-chip.svg`}
                        alt="Ai checker chip"
                      />
                    )
                    : owner === "Player" ? (
                      <img
                        className="w-10/12 h-10/12"
                        src={`/red${ isQueen ? "-queen" : "" }-chip.svg`}
                        alt="Player checker chip"
                      />
                    ) : (
                      cellsToHighlight.find(({x, y}) => x === col && y === row - 1) &&
                        <div className="
                          xs:w-2 xs:h-2
                          w-4 h-4
                          rounded-full bg-yellow-400"
                        />
                    )
                }
              </div>
            )
          })
      }
    </div>
  );
};

export default Board;