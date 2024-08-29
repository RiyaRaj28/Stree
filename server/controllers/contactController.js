const Contact = require('../models/contactSchema');

const  contactData = async (req, res) => {
    try {
      const response = req.body; 
      await Contact.create(response);
      return res.status(200).json({ Message : "Message sent successfully" });
      
    } catch (err) {
        return res.status(500).json({ Message : "Message not sent" });
    }
  };

module.exports = { contactData };