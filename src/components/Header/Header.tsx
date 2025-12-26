import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-white text-gray-900 py-20">
      <div className="w-11/12 mx-auto text-center max-w-3xl">
        <h1 className="text-gray-900 text-4xl font-bold mb-4">
          Welcome to <span className=" text-4xl font-extrabold text-orange-500 leading-snug mb-4">BookCafe</span>
        </h1>
        <p className="text-base text-gray-600 mb-8">
          Explore, read, and grow with our rich collection of books. BookBase helps you expand your knowledge, one page at a time.
        </p>

        <div className="flex justify-center gap-3 flex-wrap">
          <Link
            to="/books"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md text-sm font-semibold shadow transition duration-300"
          >
            Get Started
          </Link>
          <Link
            to="/borrow-summary"
            className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-2 rounded-md text-sm font-semibold transition duration-300"
          >
            Borrow Summary
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
