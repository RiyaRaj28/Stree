import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Signup';
import Login from './pages/Login';
import Resources from './pages/Resources';
import Helpline from './pages/Helpline';
import Forum from './pages/Forum';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound'; 
import './index.css'; 

function App() {
  const location = useLocation();

  // Define the routes where you don't want to display the header and footer
  const noHeaderFooterRoutes = ['/login', '/register'];

  // Check if the current route matches any of the defined paths
  const shouldHideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);

  return (
    <div className="app-container">
      {!shouldHideHeaderFooter && <Header />} {/* Conditionally render Header */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/helpline" element={<Helpline />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!shouldHideHeaderFooter && <Footer />} {/* Conditionally render Footer */}
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
