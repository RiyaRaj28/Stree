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

const getAllContactMessages = async (req, res) => {
    try {
        const contactMessages = await Contact.find();
        if(!contactMessages) {
            return res.status(404).json({ msg: 'No contact messages found.' });
        }
        return res.status(200).json(contactMessages);
    } catch (err) {
        next(error)
    }
}

const getAllIncidents = async (req, res) => {
    try {
        const incidents = await Incident.find().populate('user', 'userName');
        if(!incidents) {
            return res.status(404).json({ msg: 'No incidents found.' });
        }
        return res.status(200).json(incidents);
    } catch (err) {
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

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUserData = req.body; 

        const updatedData= await User.updateOne({_id : id}, { $set: updatedUserData});
        return res.status(200).json(updatedData);


    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllUsers,
    getAllContactMessages,
    getAllIncidents,
    deleteUser,
    getUserById,
    updateUser
}