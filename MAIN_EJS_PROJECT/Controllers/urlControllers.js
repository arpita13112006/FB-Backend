const mongoose = require('mongoose');
const { create } = require('../models/urlModel');
const urlSchema = new mongoose.Schema(
  {
    originalUrl: {
      type: String,
      required: true   
    },
    shortUrl: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true   
}
);

const Url = mongoose.model('Url', urlSchema);

module.exports = {createShortUrl};
