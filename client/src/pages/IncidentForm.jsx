import React, { useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const backendUrl = import.meta.env.VITE_BACKEND_URL

const IncidentForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('mistreatment');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [isAnonymous, setIsAnonymous] = useState(false); // New state for anonymous submission

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

  // Custom hook to handle map clicks and set latitude and longitude
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
      name: isAnonymous ? 'Anonymous' : name,
      description,
      category,
      date,
      time,
      location: {
        type: 'Point',
        coordinates: [longitude, latitude], // Ensure coordinates are in [longitude, latitude] order
      },
    };
    // axios.post('http://localhost:5000/api/incidents', newIncident)
    axios.post(`${backendUrl}/api/incidents/addIncident`, newIncident)

      .then(response => {
        console.log('Incident saved:', response.data);
      })
      .catch(error => {
        console.error('Error saving incident:', error);
      });
    setName('');
    setDescription('');
    setCategory('mistreatment');
    setDate('');
    setTime('');
    setLatitude(null);
    setLongitude(null);
  };
  return (
    <div style={containerStyles}>
      <div style={formContainerStyles}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Report an Incident</h2>
        <form onSubmit={onSubmit} style={formStyles}>
          <div style={fieldContainer}>
            <label style={labelStyles}>Name</label>
            <input
              type="text"
              value={isAnonymous ? '' : name} // Clear name field if anonymous
              onChange={(e) => setName(e.target.value)}
              disabled={isAnonymous} // Disable input if anonymous is selected
              required={!isAnonymous} // Make field required only if not anonymous
              style={inputStyles}
            />
          </div>

          <div style={fieldContainer}>
            <label style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
                style={{ marginRight: '10px' }}
              />
              Submit Anonymously
            </label>
          </div>

          <div style={fieldContainer}>
            <label style={labelStyles}>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              style={textareaStyles}
            />
          </div>

          <div style={fieldContainer}>
            <label style={labelStyles}>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              style={inputStyles}
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
              />
              <button type="button" onClick={setToday} style={smallButtonStyles}>
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
              />
              <button type="button" onClick={setNow} style={smallButtonStyles}>
                Now
              </button>
            </div>
          </div>

          <div style={fieldContainer}>
            <label style={labelStyles}>Location</label>
            <button
              type="button"
              onClick={detectLocation}
              style={buttonStyles}
            >
              Detect My Location
            </button>
            <p style={locationTextStyles}>
              {latitude && longitude
                ? `Latitude: ${latitude}, Longitude: ${longitude}`
                : 'Click on the map to set a location'}
            </p>
          </div>

          <button
            type="submit"
            disabled={!latitude || !longitude}
            style={submitButtonStyles}
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

// Styles
const containerStyles = {
  display: 'flex',
  flexDirection: 'row',
  paddingTop: '60px',
  height: '100vh', // Full height of the viewport
  width: '100vw', // Full width of the viewport
  position: 'relative',
  zIndex: '1',
};

const formContainerStyles = {
  flex: 2, // Increased flex value to make the form wider
  padding: '20px',
  backgroundColor: '#1E1E1E',
  color: '#fff',
  borderRadius: '8px',
};

const mapContainerStyles = {
  flex: 5, // Decreased flex value to reduce the map width
  // marginLeft: '10px', // Maintain some space between form and map
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
  fontSize: '16px',
  marginBottom: '5px',
  color: '#555',
};

const textareaStyles = {
  padding: '10px',
  fontSize: '14px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  height: '100px',
};

const smallButtonStyles = {
  padding: '5px 10px',
  fontSize: '14px',
  borderRadius: '4px',
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  marginLeft: '10px', // Add margin to ensure spacing between input and button
};

const inputStyles = {
  padding: '10px',
  fontSize: '14px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  flex: '1', // Allows input to take up the remaining space
};

const buttonStyles = {
  padding: '10px',
  fontSize: '14px',
  borderRadius: '4px',
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

const submitButtonStyles = {
  padding: '10px 20px',
  fontSize: '16px',
  borderRadius: '4px',
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  marginTop: '20px',
};

const locationTextStyles = {
  marginTop: '10px',
  color: '#777',
};

export default IncidentForm;