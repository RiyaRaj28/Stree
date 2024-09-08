const User = require('../models/userSchema');
const Contact = require('../models/contactSchema');
const Incident = require('../models/incidentSchema');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, {password : 0});
        console.log("Users from admin rote : ", users);
        if( !users || users.length === 0) {
            return res.status(404).json({ Message: 'No users found.' });
        }

        return res.status(200).json(users);

    }
    catch (error) {
        next(error)
    }
}

const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findOne({_id : id}, {password : 0});
        console.log("User from admin rote by id: ", user);

        if( !user ) {
            return res.status(404).json({ Message: 'No users found.' });
        }

        return res.status(200).json(user);
    }
    catch (error) {
        next(error)
    }
}

const updateUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUserData = req.body; 

        const updatedData = await User.updateOne({_id : id}, { $set: updatedUserData});
        return res.status(200).json({Success : updatedData});


    } catch (error) {
        next(error)
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        
        await User.deleteOne({_id : id});
        return res.status(200).json({ Message : 'User deleted successfully.' });
    } catch (error) {
        next(error)
    }
}

//fetched all incidents data except the user 
const getAllIncidents = async (req, res) => {
    try {
        const incidents = await Incident.find().populate('user');;
        if(!incidents) {
            return res.status(404).json({ msg: 'No incidents found.' });
        }
        return res.status(200).json(incidents);
    } catch (error) {
        next(error)
    }
}

const getIncidentById = async (req, res) => {
    try {
        const id = req.params.id;
        const incident = await Incident.findOne({_id: id}, );
        if(!incident) {
            return res.status(404).json({ msg: 'No incident found.' });
        }
        return res.status(200).json(incident);
    } catch (error) {
        next(error)
    }
}

const updateIncident = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedIncidentData = req.body; 

        const updatedData= await Incident.updateOne({_id : id}, { $set: updatedIncidentData});
        return res.status(200).json(updatedData);
    } catch (error) {
        next(error)
    }
}

const deleteIncident = async (req, res) => {
    try {
        const id = req.params.id;
        
        await Incident.deleteOne({_id : id});
        return res.status(200).json({ Message : 'Incident deleted successfully.' });
    } catch (error) {
        next(error)
    }
}

const getAllContactMessages = async (req, res) => {
    try {
        const contactMessages = await Contact.find();
        if(!contactMessages) {
            return res.status(404).json({ msg: 'No contact messages found.' });
        }
        return res.status(200).json(contactMessages);
    } catch (error) {
        next(error)
    }
}

const getContactMessageById = async (req, res) => {
    try {
        const id = req.params.id;
        const contactMessage = await Contact.findOne({_id : id});   
        if(!contactMessage) {
            return res.status(404).json({ msg: 'No contact message found.' });
        }
        return res.status(200).json(contactMessage);
    }
    catch (error) {
        next(error)
    }
}

const updateContactMessage = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedContactMessageData = req.body; 

        const updatedData= await Contact.updateOne({_id : id}, { $set: updatedContactMessageData});
        return res.status(200).json(updatedData);
    } catch (error) {
        next(error)
    }
}

const deleteContactMessage = async (req, res) => {
    try {
        const id = req.params.id;
        
        await Contact.deleteOne({_id : id});
        return res.status(200).json({ Message : 'Contact message deleted successfully.' });
    }
    catch (error) {
        next(error)
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUser,

    getAllIncidents,
    getIncidentById,
    updateIncident,
    deleteIncident,

    getAllContactMessages,
    getContactMessageById,
    updateContactMessage,
    deleteContactMessage
}