const express = require("express")
const router =  express.Router();

const {createPost,getAllPost,removePost} = require("../controllers/postCon")
const {createComment,removeComment} = require("../controllers/commentCon")
const{createLike,removeLike} = require("../controllers/likeCon")

router.post("/create-post",createPost);
router.get("/get-all-post",getAllPost)
router.post("/remove-post",removePost)
router.post("/create-comment",createComment);
router.post("/create-like",createLike);
router.post("/remove-like",removeLike);
router.post("/remove-comment",removeComment);

module.exports = router