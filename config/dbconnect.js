const  mongoose =require("mongoose")
require("dotenv").config();

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("db connection sucessfull")
    })
    .catch((err)=>{
        console.log("db connection nahee huaa")
        console.log(err);
        process.exit(1);
    })
}

module.exports=dbConnect;