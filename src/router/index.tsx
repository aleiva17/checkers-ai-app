import {ReactElement} from "react";
import {Navigate} from "react-router-dom";

import Home from "../public/pages/Home.tsx";
import NotFound from "../public/pages/NotFound.tsx";
import Play from "../gameplay/pages/Play.tsx";
import GameOver from "../gameplay/pages/GameOver.tsx";

interface IRoute {
  path: string;
  element: ReactElement;
}

const router: Array<IRoute> = [
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/play",
    element: <Play />
  },
  {
    path: "/game-over",
    element: <GameOver />
  },
  {
    path: "/*",
    element: <NotFound />
  }
];

export default router;