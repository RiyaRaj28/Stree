import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';

function MainContent() {
  return (
    <div className="min-h-screen m-30 bg-gray-900/95 text-white flex flex-col items-center justify-center py-16 mt-10">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-6xl font-bold text-pink-500">Stree</h1>
          <p className="text-xl mt-4">For our fierce warriors and their never diminishing light.</p>

          <div className="mt-16 space-y-6 ">
        <Link to="/report-incident">
          <div className="group m-2 w-96 h-16 bg-pink-600 hover:bg-pink-700 text-white text-lg font-semibold flex items-center justify-between px-6 cursor-pointer rounded-lg transition-all duration-300">
            <span>Report Incident</span>
            <span
              className="inline-flex items-center opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300"
            >
              <FaLongArrowAltRight className="text-gray-900" size={24} />
            </span>
          </div>
        </Link>

        <Link to="/view-incidents">
          <div className="group m-2 w-80 h-16 bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold flex items-center justify-between px-6 cursor-pointer rounded-lg transition-all duration-300">
            <span>View Incidents</span>
            <span
              className="inline-flex items-center opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300"
            >
              <FaLongArrowAltRight className="text-gray-900" size={24} />
            </span>
          </div>
        </Link>

        <Link to="/resources">
          <div className="group m-2 w-72 h-16 bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold flex items-center justify-between px-6 cursor-pointer rounded-lg transition-all duration-300">
            <span>Get Resources</span>
            <span
              className="inline-flex items-center opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300"
            >
              <FaLongArrowAltRight className="text-gray-900" size={24} />
            </span>
          </div>
        </Link>

        <Link to="/helpline">
          <div className="group m-2 w-64 h-16 bg-pink-400 hover:bg-pink-500 text-white text-lg font-semibold flex items-center justify-between px-6 cursor-pointer rounded-lg transition-all duration-300">
            <span>Get Help</span>
            <span
              className="inline-flex items-center opacity-0 group-hover:opacity-100 group-hover:ml-4 transition-all duration-300"
            >
              <FaLongArrowAltRight className="text-gray-900" size={24} />
            </span>
          </div>
        </Link>
      </div>
        </div>
        
        <div className="mt-10 md:mt-0 md:ml-16">
          <img
            src="/mainimg.png"
            alt="main image"
            className=""
          />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
