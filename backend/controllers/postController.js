let posts = [];
let comments = [];

exports.getPosts = (req, res) => {
  res.json(posts);
};

exports.createPost = (req, res) => {
  const newPost = {
    id: Date.now(),
    username: req.body.username || "User",
    text: req.body.text,
    image: req.file ? req.file.filename : null,
    likes: 0,
    created_at: new Date()
  };

  posts.unshift(newPost);
  res.json(newPost);
};

exports.likePost = (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  if (post) {
    post.likes += 1;
    res.json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
};

exports.getComments = (req, res) => {
  const postComments = comments.filter(c => c.post_id == req.params.id);
  res.json(postComments);
};

exports.addComment = (req, res) => {
  const newComment = {
    id: Date.now(),
    post_id: req.params.id,
    username: req.body.username || "User",
    comment: req.body.comment,
    created_at: new Date()
  };

  comments.push(newComment);
  res.json(newComment);
};

exports.deletePost = (req,res)=>{
  const postId = req.params.id;
  posts = posts.filter(p => p.id != postId);

  // also delete related comments
  comments = comments.filter(c => c.post_id != postId);

  res.json({message:"Post deleted"});
};
