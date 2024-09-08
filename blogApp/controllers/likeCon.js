const Like = require("../models/like");
const Post = require("../models/post")

exports.createLike = async(req,res)=>{
    try {
        const {post,user}=req.body
        const like = new Like({post,user})
        const saveLike = await like.save();
        const updatePost = await Post.findByIdAndUpdate(post,{$push :{like:saveLike._id}}).populate("like").exec();
        res.status(200).json({
            success:true,
            data:updatePost,
            message:"like on post  successfully"
        })

    } catch (error) {
        console.log("error in like created")
        console.error(error);
        res.status(500).json({
            success:false,
            
            message:"like on post failed"
        })
        
    }
}

exports.removeLike = async(req,res)=>{
    try {
        const {post,id}=req.body
        const deleteLike = await Like.findByIdAndDelete(id)
        const updatePost = await Post.findByIdAndUpdate(post,{$pull :{like:deleteLike._id}}).populate("like").exec();
        res.status(200).json({
            success:true,
            data:updatePost,
            message:"like on post remove successfully"
        })

    } catch (error) {
        console.log("error in like remove")
        console.error(error);
        res.status(500).json({
            success:false,
            
            message:" remove like on post failed"
        })
        
    }
}