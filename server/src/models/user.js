import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        maxlength: 20,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 8
    },
    token: String,
    tokenExp: Number,
    registerDt: Date
});

const model = mongoose.model('User', UserSchema);
export default model;