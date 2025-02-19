import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-6">
      <h1 className="text-6xl md:text-8xl font-bold text-black leading-none">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
        Page Not Found
      </h2>
      <p className="text-base md:text-lg text-gray-600 mb-6 max-w-md">
        Oops! The page you are looking for doesn’t exist.
      </p>
      <Link
        to="https://elastomech.in/"
        className="bg-[#ffda31] text-black font-semibold px-5 py-2 md:px-6 md:py-3 rounded-md shadow-md transition-all hover:bg-black hover:text-white"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
