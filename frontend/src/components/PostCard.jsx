import { likePost, deletePost } from "../services/api";
import Comments from "./Comments";

export default function PostCard({ post, refreshPosts }) {

  const handleLike = async () => {
    await likePost(post.id);
    refreshPosts();
  };

  const handleDelete = async () => {
    await deletePost(post.id);
    refreshPosts();
  };

  return (
    <div style={{
      background:"#fff",
      padding:"15px",
      marginBottom:"15px",
      borderRadius:"10px",
      boxShadow:"0 2px 5px rgba(0,0,0,0.1)"
    }}>

      <div style={{display:"flex", justifyContent:"space-between"}}>
        <h4>{post.username}</h4>

        <button 
          type="button"
          onClick={handleDelete}
          style={{
            border:"none",
            background:"transparent",
            color:"red",
            cursor:"pointer",
            fontSize:"14px"
          }}
        >
          🗑️
        </button>
      </div>

      <p>{post.text}</p>

      {post.image && (
        <img 
          src={`https://mini-social-wall.onrender.com/uploads/${post.image}`}
          style={{width:"100%", borderRadius:"8px"}}
        />
      )}

      <div style={{marginTop:"8px"}}>
        <button 
          type="button"
          onClick={handleLike}
          style={{
            border:"none",
            background:"transparent",
            cursor:"pointer",
            fontSize:"16px"
          }}
        >
          ❤️ {post.likes}
        </button>
      </div>

      <Comments postId={post.id}/>
    </div>
  );
}
