const Commnet = require("../models/comment")
const Like = require("../models/like")
const Post = require("../models/post")


exports.createPost = async(req,res)=>{
    try {
        const {title,description}=req.body
        const post = new Post({
            title,description
        })
        const savePost = await post.save();
        res.status(200).json({
            success:true,
            data:savePost,
            message:"post created successfully"
        })
    } catch (error) {
        console.log("error in post created")
        console.error(error);
        res.status(500).json({
            success:false,
            
            message:" post failed"
        })
    }
}

exports.getAllPost = async(req,res)=>{
    try {
       
       const response  = await Post.find().populate("like").populate("comment").exec();
        res.status(200).json({
            success:true,
            data:response,
            message:" get all post  successfully"
        })
    } catch (error) {
        console.log("error in  get all post ")
        console.error(error);
        res.status(500).json({
            success:false,
            
            message:" post failed"
        })
    }
}

exports.removePost = async(req,res)=>{
    try {
       
          const {id} =req.body;
          const updatedPost = await Post.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            data:updatedPost,
            message:" remove post  successfully"
        })
    } catch (error) {
        console.log("error in  remove post ")
        console.error(error);
        res.status(500).json({
            success:false,
            
            message:" post remove failed"
        })
    }
}