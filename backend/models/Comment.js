
const mongoose = require('mongoose') ; 

const CommentSchema = new mongoose.Schema({
    blogId : mongoose.Schema.Types.ObjectId , 
    userId : mongoose.Schema.Types.ObjectId , 
    username : String , 
    text : String , 
    createdAt : {type : Date , default : Date.now } , 
}); 

module.exports = mongoose.model("Comment" , CommentSchema) ; 