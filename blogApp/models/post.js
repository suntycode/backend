const mongoose = require("mongoose");
const Like = require("./like")
const Comment = require("./comment")
const postSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
       minLength:10
    },
    
    description:{
        type:String,
        required:true
    },
    like:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like",
        required:true
    }],
    comment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment",
        required:true
    }]
})

module.exports= mongoose.model("Post",postSchema)