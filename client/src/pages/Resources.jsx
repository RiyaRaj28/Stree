import { useState } from 'react';
import { FaPhoneAlt, FaLinkedin, FaUserTie, FaBook, FaBriefcase, FaRegMoneyBillAlt, FaFileAlt, FaPiggyBank, FaBabyCarriage, FaPlayCircle, FaVideo, FaHeadphones, FaPodcast, FaDollarSign, FaInfoCircle, FaUniversity, FaHandsHelping, FaEnvelope, FaPassport, FaBookReader, FaGlobeAmericas, FaGraduationCap, FaChalkboard, FaBookOpen, FaLaptopCode, FaLightbulb, FaGavel, FaHome, FaUserGraduate, FaChalkboardTeacher, FaHeartbeat, FaChevronDown, FaChevronUp, FaGlobe, FaHandHoldingHeart, FaFlag } from "react-icons/fa";

function Resources() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-br from-pink-50 to-pink-100 py-10">
        <div className="max-w-7xl mx-auto text-center py-12">
          <h1 className="text-4xl font-bold text-pink-900">Women&apos;s Education and Career Guidance in STEM</h1>
          <p className="mt-4 text-lg text-gray-600">
            A resource page to help women in India get access to emergency contact numbers, legal assistance, counseling services, and much more.
          </p>
        </div>
        
        <img 
          src="/issues.png" 
          className="w-full h-auto object-cover mx-auto mb-8"
          alt="Issues"
        />

        {/* Women in Tech career resources */}
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-pink-50 transform transition duration-300 ease-in-out hover:scale-100 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-pink-900">Women in Tech Career Resources</h2>
            <p className="mt-4 text-gray-600">
              Discover various career opportunities, training programs, and resources specifically designed to empower women in the tech industry. Stay informed about job openings, internships, and more.
              <a href="https://example.com/career-opportunities" className="text-black underline hover:no-underline hover:text-pink-800"> Read more</a>
            </p>
          </div>
          <div className="relative">
            <button
              className="flex items-center justify-between w-full text-left bg-pink-200 px-4 py-3 rounded-lg text-pink-900 font-semibold shadow-md"
              onClick={toggleDropdown}
            >
              <span><FaBriefcase className="text-pink-600 text-2xl mr-3 inline-block" aria-label="Briefcase icon" />Current Job Openings</span>
              {isDropdownOpen ? <FaChevronUp className="text-pink-600 text-2xl" /> : <FaChevronDown className="text-pink-600 text-2xl" />}
            </button>

            {isDropdownOpen && (
              <div className="bg-white mt-4 rounded-lg shadow-lg p-4">
                <ul className="space-y-2 text-md">
                  <li><FaBriefcase className="text-gray-600 mr-2 inline-block" /> <strong>Software Developer:</strong> <a href="https://www.diversifytech.com/job-board/#browse" className="text-pink-500">Apply Now</a></li>
                  <li><FaBriefcase className="text-gray-600 mr-2 inline-block" /> <strong>Data Scientist:</strong> <a href="https://www.diversifytech.com/job-board/#browse" className="text-pink-500">Apply Now</a></li>
                  <li><FaBriefcase className="text-gray-600 mr-2 inline-block" /> <strong>UI/UX Designer:</strong> <a href="https://www.diversifytech.com/job-board/#browse" className="text-pink-500">Apply Now</a></li>
                  <li><FaBriefcase className="text-gray-600 mr-2 inline-block" /> <strong>Project Manager:</strong> <a href="https://www.diversifytech.com/job-board/#browse" className="text-pink-500">Apply Now</a></li>
                </ul>
                <p className="mt-4 text-sm text-gray-400">Explore more opportunities:</p>
                <ul className="mt-2 space-y-1 text-sm text-gray-400">
                  <li><a href="https://example.com/internships" className="text-pink-500 hover:underline">Internships</a></li>
                  <li><a href="https://example.com/training-programs" className="text-pink-500 hover:underline">Training Programs</a></li>
                  <li><a href="https://example.com/certifications" className="text-pink-500 hover:underline">Certifications</a></li>
                </ul>
              </div>
            )}
          </div>
        </div>


        {/* Counseling */}
        <div className="bg-white max-w-5xl mx-auto p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-pink-50 transform transition duration-300 ease-in-out hover:scale-100 mb-8">
  <div className="text-center mb-8">
    <h2 className="text-3xl font-semibold text-pink-900">Career Development Resources</h2>
    <p className="mt-4 text-gray-600">
      Explore various resources that help women advance in their careers and education. These platforms provide guidance, courses, and opportunities to grow professionally.
      <a href="https://www.careerguide.com" className="text-black underline hover:no-underline hover:text-pink-800"> Read more</a>
    </p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div>
      <p className="text-gray-600">Professional Networking:</p>
      <ul className="mt-4 space-y-2 text-lg">
        <li><strong><FaLinkedin className="text-pink-600 text-3xl mr-3 inline-block" aria-label="LinkedIn icon" />LinkedIn:</strong> <a href="https://www.linkedin.com" className="text-pink-500">linkedin.com</a></li>
        <li><strong><FaUserTie className="text-pink-600 text-3xl mr-3 inline-block" aria-label="Career icon" />Shenomics:</strong> <a href="https://www.shenomics.com" className="text-pink-500">shenomics.com</a></li>
      </ul>
    </div>
    <div>
      <p className="text-gray-600">Skill Development:</p>
      <ul className="mt-4 space-y-2 text-lg">
        <li><strong><FaBook className="text-pink-600 text-3xl mr-3 inline-block" aria-label="Book icon" />Coursera for Women:</strong> <a href="https://www.coursera.org" className="text-pink-500">coursera.org</a></li>
        <li><strong><FaChalkboardTeacher className="text-pink-600 text-3xl mr-3 inline-block" aria-label="Teacher icon" />Women Who Code:</strong> <a href="https://www.womenwhocode.com" className="text-pink-500">womenwhocode.com</a></li>
      </ul>
    </div>
    <div>
      <p className="text-gray-600">Educational Opportunities:</p>
      <ul className="mt-4 space-y-2 text-lg">
        <li><strong><FaUniversity className="text-pink-600 text-3xl mr-3 inline-block" aria-label="University icon" />EdX Women's Scholarships:</strong> <a href="https://www.edx.org/scholarships" className="text-pink-500">edx.org/scholarships</a></li>
        <li><strong><FaGraduationCap className="text-pink-600 text-3xl mr-3 inline-block" aria-label="Graduation cap icon" />Scholarship for Women in STEM:</strong> <a href="https://www.scholarships.com" className="text-pink-500">scholarships.com</a></li>
      </ul>
    </div>
  </div>
</div>


        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/*Mentorship for women in STEM */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-pink-50 transform transition duration-300 ease-in-out hover:scale-100 mx-auto">
            <div className="flex items-center mb-4">
                <FaLightbulb className="text-pink-600 text-3xl mr-3" aria-label="Lightbulb icon" />
                <h2 className="text-2xl font-semibold text-pink-900">Mentorship for Women in STEM</h2>
            </div>
            <p className="text-gray-600">Connect with experienced mentors who guide women in Science, Technology, Engineering, and Mathematics (STEM) to advance their careers and education.</p>
            <ul className="mt-4 space-y-2 text-lg">
                <li><FaUserGraduate className="text-pink-600 mr-2 inline-block" /><strong>STEM Mentorship Program:</strong> <a href="https://www.stemmentorship.org" className="text-pink-500" target="_blank" rel="noopener noreferrer">Visit Website</a></li>
                <li><FaChalkboardTeacher className="text-pink-600 mr-2 inline-block" /><strong>Find a Mentor:</strong> <a href="https://www.findamentor.org" className="text-pink-500" target="_blank" rel="noopener noreferrer">Find a Mentor</a></li>
            </ul>
          </div>

          {/* Free online courses */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-pink-50 transform transition duration-300 ease-in-out hover:scale-100 mx-auto">
              <div className="flex items-center mb-4">
                  <FaLaptopCode className="text-pink-600 text-3xl mr-3" aria-label="Laptop icon" />
                  <h2 className="text-2xl font-semibold text-pink-900">Free Online Courses</h2>
              </div>
              <p className="text-gray-600">Explore a variety of free online courses across different fields to enhance your knowledge and skills.</p>
              <ul className="mt-4 space-y-2 text-lg">
                  <li><FaGraduationCap className="text-pink-600 mr-2 inline-block" /><strong>Coursera:</strong> <a href="https://www.coursera.org" className="text-pink-500" target="_blank" rel="noopener noreferrer">coursera.org</a></li>
                  <li><FaBookOpen className="text-pink-600 mr-2 inline-block" /><strong>edX:</strong> <a href="https://www.edx.org" className="text-pink-500" target="_blank" rel="noopener noreferrer">edx.org</a></li>
                  <li><FaChalkboard className="text-pink-600 mr-2 inline-block" /><strong>Khan Academy:</strong> <a href="https://www.khanacademy.org" className="text-pink-500" target="_blank" rel="noopener noreferrer">khanacademy.org</a></li>
              </ul>
          </div>


          {/* Finanacial aid, scholarships, etc */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-pink-50 transform transition duration-300 ease-in-out hover:scale-100 mx-auto">
            <div className="flex items-center mb-4">
                <FaPiggyBank className="text-pink-600 text-3xl mr-3" aria-label="Piggy bank icon" />
                <h2 className="text-2xl font-semibold text-pink-900">Government Financial Aid</h2>
            </div>
            <p className="text-gray-600">Learn about government financial aid programs, including Pell Grants, FAFSA, and other assistance programs available for women.</p>
            <ul className="mt-4 space-y-2 text-lg">
                <li><FaRegMoneyBillAlt className="text-pink-600 mr-2 inline-block" /><strong>Pell Grants:</strong> <a href="https://studentaid.gov/understand-aid/types/grants/pell" className="text-pink-500" target="_blank" rel="noopener noreferrer">studentaid.gov</a></li>
                <li><FaFileAlt className="text-pink-600 mr-2 inline-block" /><strong>FAFSA:</strong> <a href="https://fafsa.ed.gov" className="text-pink-500" target="_blank" rel="noopener noreferrer">fafsa.ed.gov</a></li>
                <li><FaHandsHelping className="text-pink-600 mr-2 inline-block" /><strong>Other Assistance Programs:</strong> <a href="https://www.benefits.gov" className="text-pink-500" target="_blank" rel="noopener noreferrer">benefits.gov</a></li>
            </ul>
        </div>


           {/* International scholarships */}
           <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-pink-50 transform transition duration-300 ease-in-out hover:scale-100 mx-auto">
                <div className="flex items-center mb-4">
                    <FaGlobeAmericas className="text-pink-600 text-3xl mr-3" aria-label="Globe icon" />
                    <h2 className="text-2xl font-semibold text-pink-900">International Scholarships</h2>
                </div>
                <p className="text-gray-600">Discover various international scholarships that can help you pursue higher education abroad.</p>
                <ul className="mt-4 space-y-2 text-lg">
                    <li><FaUniversity className="text-pink-600 mr-2 inline-block" /><strong>Fulbright Program:</strong> <a href="https://foreign.fulbrightonline.org" className="text-pink-500" target="_blank" rel="noopener noreferrer">fulbrightonline.org</a></li>
                    <li><FaBookReader className="text-pink-600 mr-2 inline-block" /><strong>Chevening Scholarships:</strong> <a href="https://www.chevening.org" className="text-pink-500" target="_blank" rel="noopener noreferrer">chevening.org</a></li>
                    <li><FaPassport className="text-pink-600 mr-2 inline-block" /><strong>DAAD Scholarships:</strong> <a href="https://www.daad.de/en/" className="text-pink-500" target="_blank" rel="noopener noreferrer">daad.de</a></li>
                </ul>
            </div>


        {/* Childcare support*/}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-pink-50 transform transition duration-300 ease-in-out hover:scale-100 mx-auto">
          <div className="flex items-center mb-4">
              <FaBabyCarriage className="text-pink-600 text-3xl mr-3" aria-label="Baby carriage icon" />
              <h2 className="text-2xl font-semibold text-pink-900">Childcare Support</h2>
          </div>
          <p className="text-gray-600">Find information on childcare resources available to women pursuing education, including on-campus childcare and childcare subsidies.</p>
          <ul className="mt-4 space-y-2 text-lg">
              <li><FaHandsHelping className="text-pink-600 mr-2 inline-block" /><strong>On-Campus Childcare:</strong> <a href="https://www.universitychildcare.com" className="text-pink-500" target="_blank" rel="noopener noreferrer">universitychildcare.com</a></li>
              <li><FaDollarSign className="text-pink-600 mr-2 inline-block" /><strong>Childcare Subsidies:</strong> <a href="https://www.childcareaware.org" className="text-pink-500" target="_blank" rel="noopener noreferrer">childcareaware.org</a></li>
              <li><FaInfoCircle className="text-pink-600 mr-2 inline-block" /><strong>Childcare Resources:</strong> <a href="https://www.womenshealth.gov/childcare" className="text-pink-500" target="_blank" rel="noopener noreferrer">womenshealth.gov/childcare</a></li>
          </ul>
      </div>


        {/* Podcasts, videos focusing on women's education */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-pink-50 transform transition duration-300 ease-in-out hover:scale-100 mx-auto">
          <div className="flex items-center mb-4">
              <FaPodcast className="text-pink-600 text-3xl mr-3" aria-label="Podcast icon" />
              <h2 className="text-2xl font-semibold text-pink-900">Podcasts and Videos</h2>
          </div>
          <p className="text-gray-600">Explore podcasts, TED talks, and videos that focus on women’s education, scholarships, and personal development.</p>
          <ul className="mt-4 space-y-2 text-lg">
              <li><FaHeadphones className="text-pink-600 mr-2 inline-block" /><strong>Women in STEM Podcast:</strong> <a href="https://www.womeninstempodcast.com" className="text-pink-500" target="_blank" rel="noopener noreferrer">womeninstempodcast.com</a></li>
              <li><FaVideo className="text-pink-600 mr-2 inline-block" /><strong>TED Talks on Women's Education:</strong> <a href="https://www.ted.com/topics/women+in+education" className="text-pink-500" target="_blank" rel="noopener noreferrer">ted.com/topics/women+in+education</a></li>
              <li><FaPlayCircle className="text-pink-600 mr-2 inline-block" /><strong>Personal Development Videos:</strong> <a href="https://www.youtube.com/playlist?list=PL8dPuuaLjXtNcAJRf3bE4lhOQ7cq7gNVP" className="text-pink-500" target="_blank" rel="noopener noreferrer">YouTube Playlist</a></li>
          </ul>
      </div>

        </div>
      </div>
    </>
  );
}

export default Resources;
