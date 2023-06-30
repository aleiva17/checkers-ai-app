import "../styles/AiAvatar.css";
import {useGame} from "../hooks/useGame.ts";


const AiAvatar = () => {
  const { isPlayerTurn } = useGame();

  return (
    <div className="flex w-full gap-3 px-1 py-6">
      <div className="relative overflow-hidden rounded p-1.5">
        <div
          className={`
          absolute left-[-25%] top-[-25%] origin-center w-[150%] h-[150%] z-10
          ${
            !isPlayerTurn
              ? "rainbow-border-animation"
              : "bg-gray-300"
          }`
          }
        />
        <div
          className={`
            relative grid place-items-center font-medium w-12 h-12 rounded z-20
            ${
            isPlayerTurn
              ? "bg-light dark:bg-slate-900 dark:text-white"
              : "bg-light dark:bg-slate-900"
          }`
          }
        >
          <span>AI</span>
        </div>
        </div>
      <div className="flex flex-col justify-center">
        <p className="xs:text-md text-lg">Algo-chan</p>
        <span className="xs:hidden flex text-sm">Former Checkers World Champion</span>
      </div>
    </div>
  );
};

export default AiAvatar;