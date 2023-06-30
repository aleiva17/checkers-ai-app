import {Link, useLocation} from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <section
      className="grid place-items-center h-full"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <img
          src="/404.png"
          alt="Girl holding a sign with a 404 error message"
          className="h-auto w-56 md:w-64 lg:w-72"
        />
        <div className="text-center">
          <p
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% py-3"
          >
            Oops!
          </p>
          <p className="mt-2"> You didn't break the internet, but we can't find what you are looking for.</p>
          <p className="text-sm">{ location.pathname } doesn't exist</p>
        </div>
        <Link
          to="/home"
          className="bg-indigo-700 hover:bg-indigo-600 text-white rounded-full duration-300 px-4 py-2"
        >
          Go back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;