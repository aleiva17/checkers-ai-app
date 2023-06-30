import {Link} from "react-router-dom";

const Home = () => {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2 place-items-center h-full"
    >
      <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        <h1
          className="text-5xl md:text-7xl font-extrabold"
        >
          Take your checkers to the next level
        </h1>
        <p className="my-6 text-lg">Prepare for an intense battle of wits as you go head-to-head with our AI in a game of checkers.</p>
        <Link
          to="/play"
          className="flex items-center text-lg bg-indigo-700 hover:bg-indigo-600 text-white rounded-lg duration-300 w-fit px-5 py-2.5 gap-2"
        >
          Begin Match
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </span>
        </Link>
      </div>
      <div>
        <img
          src="/isometric-checkboard.png"
          alt="Beautiful and minimalist checkerboard icon"
          className="blob"
        />
      </div>
    </section>
  );
};

export default Home;