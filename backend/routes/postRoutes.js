const express = require("express");
const multer = require("multer");
const router = express.Router();

const { getPosts, createPost, likePost, getComments, addComment,deletePost  } = require("../controllers/postController");

const upload = multer({ dest: "uploads/" });

router.get("/posts", getPosts);
router.post("/posts", upload.single("image"), createPost);
router.post("/posts/:id/like", likePost);

router.get("/posts/:id/comments", getComments);
router.post("/posts/:id/comment", addComment);
router.delete("/posts/:id", deletePost);



module.exports = router;
