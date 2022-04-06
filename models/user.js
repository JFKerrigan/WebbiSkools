const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        reguired: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    editAccess: {
        type: Boolean
    },
    viewAccess: {
        type: Boolean
    },
    restrictedAccess: {
        type: Boolean
    }
});
const user = mongoose.model('User', userSchema);

module.exports = user