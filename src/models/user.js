const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    citycode  : {
        type: String,
        required: true
    },
    unique_id: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const db = mongoose.connection.useDb('SurvicTrial');
const User = db.model('User', userSchema);

module.exports = User