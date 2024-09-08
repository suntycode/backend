
const Todo = require("../models/todo");

exports.deleteTodo = async(req,res)=>{
    try {
       
       const id = req.params.id;
        const response = await Todo.findByIdAndDelete({
            _id:id
        })
        
        if(!response){
          return  res.status(404).json({
                success:false,
               
                message:" no data found"
            })
            
        }

        res.status(200).json({
            success:true,
            data:response,
            message:" delete  todo by id successfully"
        })



    } catch (error) {
        console.log("error delete  todo by id")
        console.log(error)
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message
        })

    }  
}