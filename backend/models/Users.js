import mongoose from "mongoose";


const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    
    fullName:{

        type:  String,
        required: true
      },
      userName:{
        type: String,
        required: true,
        unique: true
    },

    password:{
        type: String,
        required: true,
        // Make it private so that no one can able to change it after creating
        // private:true,
        // minlength: 6
    },
    gender:{
        type : String,
        required :true,
        enum:["male","female"]
    },
    profilePic:{
        type:String,
        default: " "
    }

}, 
//  createdAt and updatedAt like member since createdAt 
 {timestamps:true})

const Users = mongoose.model("User", UsersSchema);

export default Users;