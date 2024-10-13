import mongoose from "mongoose";

const {Schema}=mongoose;

const notesSchema=new Schema({
    title: String,
    note:String
})

const User=mongoose.model("userNote",notesSchema);
export default User;