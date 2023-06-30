import router from "../../router";
import {Route, Routes} from "react-router-dom";
import Toolbar from "./Toolbar.tsx";

const Layout = () => {
  return (
    <div
      className="flex justify-center items-center bg-light dark:bg-slate-900  dark:text-white duration-300"
    >
      <div
        className="min-h-screen container grid grid-rows-[auto_1fr]"
      >
        <Toolbar />
        <main
          className="p-4 md:p-8"
        >
          <Routes>
            {
              router.map(route => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))
            }
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Layout;