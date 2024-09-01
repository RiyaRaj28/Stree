import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import { useAuth } from '../store/auth';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, LogoutUser } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <Link to="/">Stree</Link>
            </h1>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link to="/resources" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Resources
              </Link>
              <Link to="/helpline" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Helpline
              </Link>
              {/* <Link to="/forum" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Forum
              </Link> */}
              <Link to="/incident-form" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Report Incident
              </Link>
              <Link to="/map" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Map
              </Link>
              <Link to="/user-profile" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                User Profile
              </Link>
              <Link to="/contact-us" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact us
              </Link> 
            { isLoggedIn  ? 
              ( <Link to="/login" onClick = {LogoutUser} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Logout
              </Link> )
             :
              ( <>
              <Link to="/register" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Register
              </Link>
              <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Login
              </Link>
              </> 
              )
            }
              {/* <Link to="/about-us" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About us
              </Link> */}

            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                {isOpen ? (
                  <RxCrossCircled className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <IoMenu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 max-h-64 overflow-y-auto ">
          <div className="px-2 pt-2 pb-3 sm:pb-20 space-y-1 sm:px-3">
            <Link to="/" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/register" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Register
            </Link>
            <Link to="/login" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Login
            </Link>
            <Link to="/resources" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Resources
            </Link>
            <Link to="/helpline" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Helpline
            </Link>
            <Link to="/forum" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Forum
            </Link>
            <Link to="/incident-form" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Report Incident
            </Link>
            <Link to="/map" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Map
            </Link>
            <Link to="/incident-form" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Report Incident
            </Link>
            <Link to="/map" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Map
            </Link>
            <Link to="/about-us" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              About us
            </Link>
            <Link to="/contact-us" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Contact us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;