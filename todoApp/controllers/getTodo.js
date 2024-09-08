const Todo = require("../models/todo");
exports.getTodo = async(req,res)=>{
    try {
       

        const response = await Todo.find({})

        res.status(200).json({
            success:true,
            data:response,
            message:" get all todo  successfully"
        })



    } catch (error) {
        console.log("error get all todo")
        console.log(error)
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message
        })

    }  
}

exports.getTodoById = async(req,res)=>{
    try {
       
       const id = req.params.id;
        const response = await Todo.findById({
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
            message:" get  todo by id successfully"
        })



    } catch (error) {
        console.log("error get  todo by id")
        console.log(error)
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:error.message
        })

    }  
}