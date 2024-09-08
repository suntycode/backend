const Comment = require("../models/comment");
const Post = require("../models/post")

exports.createComment = async(req,res)=>{
    try {
        const {post,user,body}=req.body
        const comment = new Comment({post,user,body})
        const saveComment = await comment.save();
        const updatePost = await Post.findByIdAndUpdate(post,{$push :{comment:saveComment._id}}).populate("comment").exec();
        res.status(200).json({
            success:true,
            data:updatePost,
            message:"comment on post  successfully"
        })

    } catch (error) {
        console.log("error in comment created")
        console.error(error);
        res.status(500).json({
            success:false,
            
            message:"comment on post failed"
        })
        
    }
}


exports.removeComment = async(req,res)=>{
    try {
        const {post,id}=req.body
        const deleteComment = await Comment.findByIdAndDelete(id);
        const postUpdate = await Post.findByIdAndUpdate(post,{$pull:{comment:deleteComment._id}}).populate("comment").exec()

       res.status(200).json({
            success:true,
            data:postUpdate,
            message:"comment on post remove successfully"
        })

    } catch (error) {
        console.log("error in comment  remove")
        console.error(error);
        res.status(500).json({
            success:false,
            
            message:"comment remove failed"
        })
        
    }
}