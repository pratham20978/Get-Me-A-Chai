import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const UserSchema = new Schema({
    email: {type: String, required: true},
    name: {type: String},
    username: {type: String, required: true},
    profilepic: {type: String},
    coverpic: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    razorpaysecret: {type: String} ,
    razorpayid: {type: String}
})

const User = models.User || model("User", UserSchema )
export default User;