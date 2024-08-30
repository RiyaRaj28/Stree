const mongoose = require('mongoose');

const IncidentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  location: {
    type: { type: String, enum: ['Point'], required: true },
    coordinates: { type: [Number], required: true },
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['mistreatment', 'hooligans', 'cat-calling', 'shady-area'],
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  // name: {
  //   type: String,
  //   default: null, 
  // },
  // isAnonymous: {
  //   type: Boolean,
  //   default: function () {
  //     return this.name ? false : true; 
  //   },
  // },
});

IncidentSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Incident', IncidentSchema);
