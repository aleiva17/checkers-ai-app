import GameHud from "../components/GameHud.tsx";
import {GameProvider} from "../context/GameProvider.tsx";
const Play = () => {
  return (
    <GameProvider>
      <section
        className="flex flex-col justify-center items-center gap-8 h-full"
      >
        <GameHud />
      </section>
    </GameProvider>
  );
};

export default Play;