const Incident = require('../models/incidentSchema');

const getAllIncidents = async (req, res) => {
  try {
    const incidents = await Incident.find();

    if(!incidents) {
      return res.status(404).json({ msg: 'No incidents found.' });
    }
    res.status(200).json(incidents);
    
  } catch (err) {
    console.error(err.message);0.
    res.status(500).send('Server Error');
  }
};

const addNewIncident = async (req, res) => {
  const { location, description, category, date, time, name } = req.body;
  console.log(req.body);

  try {
    if (typeof location.coordinates[0] !== 'number' || typeof location.coordinates[1] !== 'number') {
      return res.status(400).json({ msg: 'Latitude and longitude are required and must be numbers.' });
    }

    if (!location.type || location.type !== 'Point') {
      return res.status(400).json({ msg: 'Location type must be "Point".' });
    }

    const newIncident = new Incident({
      location: {
        type: location.type,
        coordinates: [location.coordinates[0], location.coordinates[1]], // Longitude first, then latitude
      },
      description,
      category,
      date,
      time,
      name,
      isAnonymous: !name, // isAnonymous is true if name is not provided
    });

    const incident = await newIncident.save();
    console.log(incident);

    res.json(incident);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getAllIncidents,
  addNewIncident,
};

