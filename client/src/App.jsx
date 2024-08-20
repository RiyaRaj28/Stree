import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
import Home from './pages/Home';
import Register from './pages/Signup';
import Login from './pages/Login';
import Resources from './pages/Resources';
import Helpline from './pages/Helpline';
import Forum from './pages/Forum';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
// import Footer from './components/Footer';
import './index.css'; 

function App() {
  return (
    <div className="app-container">
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/helpline" element={<Helpline />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
