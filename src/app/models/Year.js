const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Year = new Schema({
  name: { type: String },
  // createdAt: { type: Date, default: Date.now },
  // updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Year', Year);
