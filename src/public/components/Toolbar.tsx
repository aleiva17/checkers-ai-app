import {Link} from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher.tsx";

const Toolbar = () => {
  return (
    <header
      className="flex justify-between md:justify-around items-center p-4"
    >
      <Link
        to="/home"
        className="flex items-center hover:scale-105 duration-300 gap-3"
      >
        <img
          src="/logo.png"
          alt="AI Checkers logo"
          className="h-12 w-12"
        />
        <span className="xs:hidden flex text-2xl font-bold">AI Checkers</span>
      </Link>
      <div className="flex items-center gap-8">
        <ThemeSwitcher />
        <nav className="font-medium">
          <ul className="flex gap-4">
            <li>
              <Link
                to="/home"
                className="hover:text-indigo-700 dark:hover:text-yellow-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/play"
                className="hover:text-indigo-700 dark:hover:text-yellow-400"
              >
                Play
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Toolbar;