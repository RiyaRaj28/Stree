import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useAuth } from "../store/auth";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
import { MdMyLocation } from "react-icons/md";


const IncidentForm = () => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('mistreatment');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const { user, token } = useAuth(); 
  const [mytoken,setMytoken] = useState(token);
  const [name, setName] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.userName); 
    }
  }, [user]);

  const detectLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  };

  const setToday = () => {
    const today = new Date();
    setDate(today.toISOString().split('T')[0]);
  };

  const setNow = () => {
    const now = new Date();
    setTime(now.toTimeString().split(' ')[0].slice(0, 5));
  };

  const MapClickHandler = () => {
    useMapEvents({
      click: (e) => {
        setLatitude(e.latlng.lat);
        setLongitude(e.latlng.lng);
      },
    });
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (latitude === null || longitude === null) {
      alert('Please select a valid location on the map.');
      return;
    }

    const newIncident = {
      name,
      description,
      category,
      date,
      time,
      location: {
        type: 'Point',
        coordinates: [longitude, latitude], 
      },
    };
    
    try {
      const config =  {
          "headers": {
            Authorization: `Bearer ${mytoken}`, 
            "Content-Type": "application/json",
      }};
      const response = await axios.post(`${backendUrl}/api/incidents/addIncident`,newIncident,config);
      console.log('Incident saved:', response.data);
    } catch (error) {
      console.error('Error saving incident:', error);
    }

    setDescription('');
    setCategory('mistreatment');
    setDate('');
    setTime('');
    setLatitude(null);
    setLongitude(null);
  };

  return (
    <div style={containerStyles} className=''>
      <div style={formContainerStyles} className='bg-white shadow-lg'>
        <h2 style={{ textAlign: 'center',}} className='text-gray-900 text-xl m-3'>Report an Incident</h2>
        <form onSubmit={onSubmit} style={formStyles}>
          <div style={fieldContainer}>
            <label style={labelStyles} >Name</label>
            <input
              type="text"
              value={name}
              readOnly 
              style={inputStyles}
              className='bg-gray-800 focus:bg-gray-900 outline-none border border-white focus:border-pink-400'
            />
          </div>

          <div style={fieldContainer}>
            <label style={labelStyles}>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              style={textareaStyles}
              className='bg-gray-800 focus:bg-gray-900 outline-none border border-white '
            />
          </div>

          <div style={fieldContainer}>
            <label style={labelStyles}>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              style={inputStyles}
              className='bg-gray-800 focus:bg-gray-900'
            >
              <option value="mistreatment">Mistreatment</option>
              <option value="hooligans">Hooligans</option>
              <option value="cat-calling">Cat-calling</option>
              <option value="shady-area">Shady Area</option>
            </select>
          </div>

          <div style={fieldContainer}>
            <label style={labelStyles}>Date</label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                style={{ ...inputStyles, flex: '1' }}
                className='bg-gray-800 focus:bg-gray-900'
              />
              <button type="button" onClick={setToday} style={smallButtonStyles} className='bg-pink-500'>
                Today
              </button>
            </div>
          </div>

          <div style={fieldContainer}>
            <label style={labelStyles}>Time</label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                style={{ ...inputStyles, flex: '1' }}
                className='bg-gray-800 focus:bg-gray-900'
              />
              <button type="button" onClick={setNow} style={smallButtonStyles} className='bg-pink-500'>
                Now
              </button>
            </div>
          </div>

          <div style={fieldContainer}>
            <label style={labelStyles} className=''>Location</label>
            <button
              type="button"
              onClick={detectLocation}
              style={buttonStyles}
              className='bg-pink-500'
            >
              Detect My Location<MdMyLocation className='inline-block mx-1 text-xl hover:bg-pink-600'/>
            </button>
            <p style={locationTextStyles} className=' text-xs m-0 mt-1'>
              {latitude && longitude
                ? `Latitude: ${latitude}, Longitude: ${longitude}`
                : 'Click on the map to set a location'}
            </p>
          </div>

          <button
            type="submit"
            disabled={!latitude || !longitude}
            style={submitButtonStyles}
            className='bg-pink-600'
          >
            Submit
          </button>
        </form>
      </div>

      <div style={mapContainerStyles}>
        <MapContainer
          center={[29.954880, 76.819534]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          />
          <MapClickHandler />
          {latitude && longitude && (
            <Marker position={[latitude, longitude]}></Marker>
          )}
        </MapContainer>
      </div>
    </div>
  );
};

const containerStyles = {
  display: 'flex',
  flexDirection: 'row',
  paddingTop: '40px',
  height: '100vh', 
  width: '100vw',
  position: 'relative',
  zIndex: '1',
};

const formContainerStyles = {
  flex: 2, 
  padding: '20px',
  // backgroundColor: '#1E1E1E',
  color: '#fff',
  // borderRadius: '8px',
  
};

const mapContainerStyles = {
  flex: 5, 
  borderRadius: '8px',
  overflow: 'hidden',
};
const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const fieldContainer = {
  display: 'flex',
  flexDirection: 'column',
};

const labelStyles = {
  fontSize: '10px',
  marginBottom: '5px',
  color: '#555',
};

const textareaStyles = {
  padding: '10px',
  fontSize: '14px',
  borderRadius: '4px',
  // border: '1px solid #ccc',
  height: '100px',
};

const smallButtonStyles = {
  padding: '5px 10px',
  fontSize: '14px',
  borderRadius: '4px',
  // backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  marginLeft: '10px', 
};

const inputStyles = {
  padding: '10px',
  fontSize: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  flex: '1', 
};

const buttonStyles = {
  padding: '8px',
  fontSize: '9px',
  borderRadius: '4px',
  // backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

const submitButtonStyles = {
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '4px',
  // backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  marginTop: '10px',
};

const locationTextStyles = {
  // marginTop: '10px',
  color: '#777',
};

export default IncidentForm;