const User = require('../models/userSchema');
const Incident = require('../models/incidentSchema');

const getHello = (req, res) => {
    res.send("Hello World from controller!");
}

const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
}

const getUserIncidents = async (req, res) => {
    try {
      const incidents = await Incident.find({ user: req.userId });
      res.status(200).json({incidents});
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };

const updateUserIncident = async (req, res) => {
    try {
      const incident = await Incident.findOneAndUpdate(
        { _id: req.params.id, user: req.userId }, 
        req.body,
        { new: true }
      );
      if (!incident) {
        return res.status(404).json({ msg: 'Incident not found or not authorized' });
      }
      res.status(200).json(incident);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };

  const deleteUserIncident = async (req, res) => {
    try {
      const incident = await Incident.findOneAndDelete({ _id: req.params.id, user: req.userId });
      if (!incident) {
        return res.status(404).json({ msg: 'Incident not found or not authorized' });
      }
      res.status(200).json({ msg: 'Incident deleted' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };

module.exports = {
    getHello,
    createUser,
    getUserIncidents,
    updateUserIncident,
    deleteUserIncident,
};
