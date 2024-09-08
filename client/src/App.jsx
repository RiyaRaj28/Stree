import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import React, { Suspense } from 'react';
import Loading from './components/Loading';
const Home = React.lazy(() => import('./pages/Home'));
const Resources = React.lazy(() => import('./pages/Resources'));
const Login = React.lazy(() => import('./pages/Login'));
const Forum = React.lazy(() => import('./pages/Forum'));
const Header = React.lazy(() => import('./components/Header'));
const Register = React.lazy(() => import('./pages/Register'));
const Helpline = React.lazy(() => import('./pages/Helpline'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Logout = React.lazy(() => import('./pages/Logout'));
const IncidentForm = React.lazy(() => import('./pages/IncidentForm'));
const LoginForm = React.lazy(() => import('./pages/Login'));
const Map = React.lazy(() => import('./pages/Map'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));
const RegisterForm = React.lazy(() => import('./pages/Register'));
const AdminLayout = React.lazy(() => import('./components/layouts/admin-layouts'));
const AdminIncidents = React.lazy(() => import('./pages/AdminIncidents'));
const AdminContacts = React.lazy(() => import('./pages/AdminContacts'));
const AdminUsers = React.lazy(() => import('./pages/AdminUsers'));
const EditUser = React.lazy(() => import('./pages/EditUser')); // Import the EditUser component
const EditIncident = React.lazy(() => import('./pages/EditIncident')); // Import the EditIncident component
const EditContact = React.lazy(() => import('./pages/EditContact'));

import Footer from './components/Footer';

import './index.css';
import UserProfile from './pages/UserProfile';

function App() {
  const location = useLocation();
  
  const noHeaderFooterRoutes = ['/login', '/register'];

  const shouldHideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);

  return (
    <div className="app-container">
      <Suspense fallback={<Loading/>}>
        {(!shouldHideHeaderFooter) ? <Header /> : null} {/* Conditionally render Header */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/helpline" element={<Helpline />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/incident-form" element={<IncidentForm />} />
          <Route path="/map" element={<Map />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="incidents" element={<AdminIncidents />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="users/:id/edit" element={<EditUser />} /> {/* Dynamic route for editing users */}
            <Route path="incidents/:id/edit" element={<EditIncident />} /> {/* Dynamic route for editing users */}
            <Route path="contacts/:id/edit" element={<EditContact />} /> {/* Dynamic route for editing users */}

          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>


        {(!shouldHideHeaderFooter) ? <Footer /> : null} {/* Conditionally render Footer */}
      </Suspense>
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
