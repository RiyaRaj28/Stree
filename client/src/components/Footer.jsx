import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-bold text-purple-300">Stree</h4>
          <p className="mt-2 text-sm">For our fierce warriors and their never diminishing light</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-bold text-purple-300">HOME</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link to="#" className="hover:text-purple-400">About us</Link></li>
            <li><Link to="#" className="hover:text-purple-400">Feedback</Link></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-bold text-purple-300">ABOUT US</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link to="#" className="hover:text-purple-400">About team</Link></li>
            <li><Link to="#" className="hover:text-purple-400">Contact us</Link></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-bold text-purple-300">COMMUNITY</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link to="#" className="hover:text-purple-400">Codess Cafe</Link></li>
            <li><Link to="#" className="hover:text-purple-400">Women who code Delhi</Link></li>
            <li><Link to="#" className="hover:text-purple-400">GirlScript Foundation</Link></li>
            <li><Link to="#" className="hover:text-purple-400">Women Tech Makers</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-bold text-purple-300">SOCIAL MEDIA</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">Github</Link></li>
            <li><Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">Linkedin</Link></li>
            <li><Link href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">Discord</Link></li>
            <li><Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">Instagram</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 border-t border-gray-700 pt-4 flex justify-between items-center">
        <p className="text-sm">© Copyright 2023</p>
        <div className="flex space-x-4 text-white">
          <Link href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <FaDiscord className="hover:text-gray-400 cursor-pointer" />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-gray-400 cursor-pointer" />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-gray-400 cursor-pointer" />
          </Link>
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-400 cursor-pointer" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-gray-400 cursor-pointer" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
