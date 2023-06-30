import Board from "./Board.tsx";
import AiAvatar from "./AiAvatar.tsx";

const GameHud = () => {
  return (
    <div>
      <AiAvatar />
      <Board />
    </div>
  );
};

export default GameHud;