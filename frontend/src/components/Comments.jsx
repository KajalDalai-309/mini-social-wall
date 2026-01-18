import { useEffect, useState } from "react";
import { fetchComments, addComment } from "../services/api";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const loadComments = async () => {
    const res = await fetchComments(postId);
    setComments(res.data);
  };

  useEffect(() => {
    loadComments();
  }, []);

  const handleAdd = async () => {
    if(!text.trim()) return;
    
    await addComment(postId, {
      username: "Kajal ",
      comment: text
    });

    setText("");
    loadComments();
  };

  return (
    <div className="comment-section">

      {comments.map(c => (
        <div key={c.id} className="comment">
          <b>{c.username}</b>
          <span>{c.comment}</span>
        </div>
      ))}

      <div className="comment-input-box">
        <input 
          className="comment-input"
          placeholder="Write a comment..."
          value={text}
          onChange={(e)=>setText(e.target.value)}
        />
        <button className="comment-btn" onClick={handleAdd} type="button">Post</button>
      </div>

    </div>
  );
}
