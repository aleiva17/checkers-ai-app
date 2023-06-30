import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const GameOver = () => {
  const [userWin, setUserWin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const localStorageValue = localStorage.getItem("game-state");
    if (localStorageValue === null) {
      navigate("/home");
    }
    setUserWin(JSON.parse(localStorageValue!) as boolean);
    localStorage.removeItem("game-state");
  }, []);

  return (
    <section
      className="grid place-items-center h-full"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <img
          src={`/${userWin ? "won" : "lost"}-${Math.floor(Math.random() * 4) + 1}.png`}
          alt="Game over image"
          className="h-auto w-56 md:w-64 lg:w-72"
        />
        <div className="text-center">
          <p
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-3"
          >
            { userWin ? "Congratulations! You won" : "Oh no. You lost" }
          </p>
        </div>
        <Link
          to="/home"
          className="bg-indigo-700 hover:bg-indigo-600 text-white rounded-full duration-300 px-4 py-2"
        >
          Go back to Home
        </Link>
        <Link
          to="/play"
          className="bg-indigo-700 hover:bg-indigo-600 text-white rounded-full duration-300 px-4 py-2"
        >
          Play again
        </Link>
      </div>
    </section>
  )
};

export default GameOver;