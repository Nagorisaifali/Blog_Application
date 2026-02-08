const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const multer = require('multer') ; 
const path = require('path') ; 
const BlogModel = require("../models/Blog") ; 
const { decode } = require("punycode");

const Comment = require("../models/Comment") ; 
const Like = require("../models/Like") ; 
const user = require("../models/user");

const JWT_SECRET = "Saifu78@";



// Signup
router.post("/signup", async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) return res.status(400).json({ error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1d" });

    res.json({ token, user: { id: user._id, name: user.name, username: user.username, email: user.email } });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads')); // Use __dirname for safe path
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extName = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + extName);
  }
});



const upload = multer({ storage: storage }) ; 

router.post('/uploadBlog' , upload.single('file') , async (req , res) => {
  try{
    let {title , content , token ,  desc} = req.body ;
  let decode = jwt.verify(token ,  JWT_SECRET) ; 
  let user = await User.findOne({ _id:decode.userId}) ; 
  if(!user){
    return res.json({
      success : false , 
      msg : "User Not Found" , 
    })
  }

  const imageName = req.file ? req.file.filename : null ; 

  let blog = await BlogModel.create({
    title : title , 
    content : content , 
    image : imageName , 
    desc : desc , 
    user : user._id , 
  })
  return res.json({
    success:true , 
    msg : "Blog Created Successfully" , 
    blog : blog
  }) ; 
  }
  catch (error){
    console.log(error) ; 
    return res.json({
      success:false , 
      msg : "An error Occurred" , 
    })
  }
})


router.post("/getBlogs" , async (req , res) =>{
  let {token} = req.body ; 
  let decode = jwt.verify(token ,  JWT_SECRET) ; 
  let user = await User.findOne({_id : decode.userId}) ; 
  if(!user){
    return res.json({
      success : false , 
      msg : "User not found" ,
    });
  }else{
    let blogs = await BlogModel.find({}) ; 
    return res.json({
      success : true , 
      msg : "Blog Featched Successfully" , 
      blogs : blogs 
    })
  }
})


router.post("/getBlog" , async (req , res) => {
  let {token , blogId} = req.body ; 
  let decoded = jwt.verify(token ,  JWT_SECRET) ; 
  let user = await User.findOne({_id : decoded.userId}) ; 
  if(!user){
    return res.json({
      success : false , 
      msg : "User not found" ,
    });
  }
  else {
    let blog = await BlogModel.findOne({_id : blogId }) ; 
    return res.json({
      success : true , 
      msg : "Blog Featched Successfully" , 
      blog : blog , 
    })
  }
})



router.post('/addComment' , async (req , res) => {
  const { blogId , userId , username , text } = req.body ; 
  try{
    const comment = await Comment.create({
      blogId , userId , username , text 
    }) ; 
    res.json({
      success:true , 
      comment , 
    });
  }
  catch(err){
    res.status(500).json({ success : false , msg : "Failed to add comment" }) ; 
  }
}) ; 

router.post("/getComments" , async (req , res) => {
  const { blogId } = req.body ; 
  try{
    const comments = await Comment.find({blogId}).sort({ createdAt : -1 }) ; 
    res.json({success : true , comments}) ; 
  }
  catch(err){
    res.status(500).json({ success: false, msg: 'Failed to get comments' });
  }
})

router.post('/toggleLike' , async (req , res) => {
  const {blogId , userId} = req.body ; 
  try{
    const like = await Like.findOne({blogId , userId}) ; 
    if(like){
      await Like.deleteOne({ _id : Like._id }) ; 
      res.json({ success : true , liked : false }) ; 
    }
    else {
      await Like.create({blogId , userId}) ; 
      res.json({success : true , liked : true }) ; 
    }
  }
  catch (err) {
    res.status(500).json({ success: false, msg: 'Error toggling like' });
  }
})


router.post('/getLikes' , async (req , res) => {
  const { blogId } = req.body ; 
  try{
    const count = await Like.countDocuments({ blogId });
    res.json({ success: true, count });
  }
  catch(err){
    res.status(500).json({ success: false, msg: 'Failed to get like count' });
  }
})



router.put("/editBlog/:id", async (req, res) => {
  const { title, desc, content } = req.body;
  const { id } = req.params;

  try {
    const blog = await BlogModel.findByIdAndUpdate(
      id,
      { title, desc, content, updatedAt: Date.now() },
      { new: true }
    );
    res.json({ success: true, msg: "Blog updated", blog });
  } catch (err) {
    res.status(500).json({ success: false, msg: "Error updating blog" });
  }
});

router.delete("/deleteBlog/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await BlogModel.findByIdAndDelete(id);
    res.json({ success: true, msg: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ success: false, msg: "Error deleting blog" });
  }
});



router.post('/deleteComment', async (req, res) => {
  const { commentId } = req.body;
  try {
    await Comment.findByIdAndDelete(commentId);
    res.json({ success: true, message: 'Comment deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error deleting comment' });
  }
});





module.exports = router;
