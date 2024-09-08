const Todo = require("../models/todo");

exports.updateTodo = async(req,res)=>{
    try {
        const id =req.params.id
        const {title,description}= req.body;

        const response = await Todo.findByIdAndUpdate({_id:id},{title,description,updatedAt:Date.now()})

        res.status(200).json({
            success:true,
            data:response,
            message:"todo updated successfully"
        })



    } catch (error) {
        console.log("error update todo")
        console.log(error)
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message
        })

    }  
}