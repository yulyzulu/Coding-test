const { Schema, model } = require('mongoose');

const languageSchema = new Schema({
  language: {
    type: String,
    required: true,
    unique: true
  },
  greeting: {
    type: String,
    required: true
  },
  farewell:{
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
});

module.exports = model('Language', languageSchema);