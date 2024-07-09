const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    mobileNumber:{
        type: String,
    },
    description:{
        type: String,
    },
    category:{
        type: String,
    },
    subCategory:{
        type: String,
    },
    narration:{
        type: String,
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

UserSchema.methods.generateHash = async function(password) {
    return await bcrypt.hash(password, 10);
};

UserSchema.methods.validPassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
