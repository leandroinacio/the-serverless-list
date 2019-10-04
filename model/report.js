const mongoose = require('mongoose');
const reportSchema = new mongoose.Schema({
    key: Number,
    title: String,
    views: Number
});
module.exports = mongoose.model('Report', reportSchema);