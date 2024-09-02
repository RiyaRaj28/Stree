import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/auth';
import BottomWarning from './BottomWarning';
const backendUrl = import.meta.env.VITE_BACKEND_URL

function RegisterForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userName: '',
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);

    try {
      const response = await fetch(`${backendUrl}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok)
      { 
        const res_data = await response.json();
        console.log("response from server : ", res_data); 

        storeTokenInLS(res_data.token);
        // localStorage.setItem('token', res_data.token);


        setFormData({
          email: '',
          password: '',
          userName: '',
        });

        navigate("/");
      }

      // const data = await response.json();
      console.log('Registration successful:', response);
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <div className="bg-gray-800 p-8 mt-60 sm:mt-100 lg:mt-8  rounded-lg shadow-lg w-full max-w-2xl -z-0">
      <h2 className="text-4xl font-extrabold text-white mb-6 text-center">Register</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-purple-300 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-purple-300 mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Create a password"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-purple-300 mb-2">Username</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Choose a username"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 rounded-lg font-bold hover:bg-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-400"
        >
          Register
        </button>


        <BottomWarning to={"/login"} label={"Already have an account?"} ButtonText={"Login"} />


      </form>
    </div>

  );
}

export default RegisterForm;
