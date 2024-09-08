const  express = require("express");
const router = express.Router();
// import controller
const {createTodo} =  require("../controllers/createTodo")
const {updateTodo} =  require("../controllers/updatedTodo")
const {deleteTodo} =  require("../controllers/deleteTodo")
const {getTodo} =  require("../controllers/getTodo")
const {getTodoById} =  require("../controllers/getTodo")
// map with route
router.post("/create",createTodo);
router.put("/update/:id",updateTodo);
router.delete("/delete/:id",deleteTodo);
router.get("/getAll",getTodo);
router.get("/get/:id",getTodoById);
// export router
module.exports= router