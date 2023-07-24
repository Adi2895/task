const mongoose = require('mongoose');

// Define the schema for the data
const dataSchema = new mongoose.Schema({
  end_year: {unique: false, type: Number, sparse:true},
  intensity: {unique: false, type: Number, sparse:true},
  sector: {unique: false, type: String, sparse:true},
  topic: {unique: false, type: String, sparse:true},
  insight: {unique: false, type: String, sparse:true},
  url: {unique: false, type: String, sparse:true},
  region: {unique: false, type: String, sparse:true},
  start_year: {unique: false, type: Number, sparse:true},
  impact: {unique: false, type: Number, sparse:true},
  added: {unique: false, type: String, sparse:true},
  published: {unique: false, type: String, sparse:true},
  country: {unique: false, type: String, sparse:true},
  relevance: {unique: false, type: Number, sparse:true},
  pestle: {unique: false, type: String, sparse:true},
  source: {unique: false, type: String, sparse:true},
  title: {unique: false, type: String, sparse:true},
  likelihood: {unique: false, type: Number, sparse:true}
, });

// Create and export the model
module.exports = mongoose.model('Data', dataSchema);