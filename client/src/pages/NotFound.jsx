import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex items-center mb-4">
        <h1 className="text-6xl font-bold text-purple-600">4</h1>
        <img
          src="/zero.png" 
          className="w-20 h-20 object-cover rounded-full mx-4"
          alt="zero"
        />
        <h1 className="text-6xl font-bold text-purple-600">4</h1>
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        to="/"
        className="px-6 py-2 bg-purple-500 text-white text-lg font-semibold rounded hover:bg-purple-700 transition duration-300"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default NotFound;
