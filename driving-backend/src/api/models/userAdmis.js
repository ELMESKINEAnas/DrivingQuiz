const mongoose = require('mongoose');

const userAdmisSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    score : {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('UserAdmis', userAdmisSchema);