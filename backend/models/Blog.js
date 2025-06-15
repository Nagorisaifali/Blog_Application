
const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
    content: {
      type: String,
    },
    image: {
      type: String,
      default: null, 
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    Date : {
        type : Date , 
        default : Date.now() ,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", BlogSchema);

