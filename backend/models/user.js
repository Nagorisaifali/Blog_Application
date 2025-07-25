const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String,  },
  name : {type : String } , 
  email: { type: String ,  },
  password: { type: String , },
  isAdmin : {
    type : Boolean , 
    default : false , 
  }, 
  Date :{
    type : Date , 
    default : Date.now() , 
  },

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
