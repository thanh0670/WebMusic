const mongoose = require("mongoose");

const SongSchema = new mongoose.Schema({
    title: String,
    artist: String,
    segments: [String], // các URL từ Firebase Storage
});

module.exports = mongoose.model('Song', SongSchema);