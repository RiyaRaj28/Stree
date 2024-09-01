import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const resources = [
  {
    title: "Career Counseling",
    description:
      "Guidance and counseling services to help women with career choices, resumes, and interview preparation.",
    link: "https://www.careerguide.com/",
  },
  {
    title: "Mentorship Programs",
    description:
      "Pairing women with professionals for mentorship and support in their careers.",
    link: "https://www.womenwhocode.com/",
  },
  {
    title: "Free Online Courses",
    description:
      "Platforms offering free or affordable online courses in tech, business, and other fields.",
    link: "https://www.coursera.org/",
  },
  {
    title: "Podcasts and Videos",
    description:
      "Educational podcasts and TED talks for women’s education and development.",
    link: "https://www.ted.com/topics/women",
  },
];

const ResourcesPage = () => {
  const [isScholarshipOpen, setIsScholarshipOpen] = useState(false);
  const [isChildScholarshipOpen, setIsChildScholarshipOpen] = useState(false);
  const [isOthersOpen, setIsOthersOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-pink-50 to-pink-100 min-h-screen flex flex-col items-center py-12 mt-16">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl font-extrabold text-pink-900 mb-6 text-center">
          Scholarships & Resources for Women
        </h1>
        <p className="text-gray-700 text-lg mb-4 text-center">
          Discover a range of resources designed to empower women in tech and beyond. Whether you&apos;re looking for scholarships, mentorship, or career guidance, these resources provide valuable support for your journey.
        </p>
        <div className="shadow-xl rounded-lg p-8 mb-10">
          <div className="space-y-4">
            <div>
              <button
                className="w-full text-left bg-pink-100 py-3 px-4 rounded-lg text-pink-700 font-semibold flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-pink-300"
                onClick={() => setIsScholarshipOpen(!isScholarshipOpen)}
              >
                Women Scholarships
                {isScholarshipOpen ? (
                  <FaChevronUp className="ml-2 text-pink-700" />
                ) : (
                  <FaChevronDown className="ml-2 text-pink-700" />
                )}
              </button>
              {isScholarshipOpen && (
                <div className="mt-3 space-y-2 bg-white rounded-lg shadow-lg p-4">
                  <a href="https://www.scholarships.gov.in/" className="block text-pink-600 no-underline hover:underline">
                    National Women Scholarships
                  </a>
                  <a href="https://www.britishcouncil.in/study-uk/scholarships" className="block text-pink-600 no-underline hover:underline">
                    International Scholarships for Women
                  </a>
                  <a href="https://scholarships-india.com/" className="block text-pink-600 no-underline hover:underline">
                    Educational Grants for Women
                  </a>
                </div>
              )}
            </div>
            <div>
              <button
                className="w-full text-left bg-purple-100 py-3 px-4 rounded-lg text-purple-700 font-semibold flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-purple-300"
                onClick={() => setIsChildScholarshipOpen(!isChildScholarshipOpen)}
              >
                Child Scholarships
                {isChildScholarshipOpen ? (
                  <FaChevronUp className="ml-2 text-purple-700 " />
                ) : (
                  <FaChevronDown className="ml-2 text-purple-700" />
                )}
              </button>
              {isChildScholarshipOpen && (
                <div className="mt-3 space-y-2 bg-white rounded-lg shadow-lg p-4">
                  <a href="https://www.indiaparenting.com/" className="block text-purple-600 no-underline hover:underline">
                    Child Support and Scholarships
                  </a>
                  <a href="https://www.scholarships-india.com/child-scholarships/" className="block text-purple-600 no-underline hover:underline">
                    Scholarships for Children in Need
                  </a>
                </div>
              )}
            </div>
            <div>
              <button
                className="w-full text-left bg-blue-100 py-3 px-4 rounded-lg text-blue-700 font-semibold flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-300"
                onClick={() => setIsOthersOpen(!isOthersOpen)}
              >
                Other Resources
                {isOthersOpen ? (
                  <FaChevronUp className="ml-2 text-blue-700" />
                ) : (
                  <FaChevronDown className="ml-2 text-blue-700" />
                )}
              </button>
              {isOthersOpen && (
                <div className="mt-3 space-y-2 bg-white rounded-lg shadow-lg p-4">
                  <a href="https://www.mhrd.gov.in/scholarships-education-loans" className="block text-blue-600 no-underline hover:underline">
                    Government Financial Aid
                  </a>
                  <a href="https://www.coursera.org/" className="block text-blue-600 no-underline hover:underline">
                    Free Online Courses
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-6 flex flex-col justify-between flex-grow">
                <h2 className="text-xl font-bold text-pink-900 mb-3">
                  {resource.title}
                </h2>
                <p className="text-gray-600 mb-5">{resource.description}</p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 font-semibold hover:underline mt-auto"
                >
                  Explore &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
