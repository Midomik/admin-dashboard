import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-4 text-4xl font-bold text-gray-800">Page Not Found</h1>
      <p className="mb-6 text-lg text-gray-600">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-blue-500 hover:bg-blue-600 inline-block rounded px-6 py-3 font-semibold text-white transition duration-300"
      >
        Go to Home
      </Link>
    </div>
  );
};
