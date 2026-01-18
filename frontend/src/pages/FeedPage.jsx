import { useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";
import PostCard from "../components/PostCard";
import { fetchPosts } from "../services/api";

export default function FeedPage(){
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    fetchPosts().then(res => setPosts(res.data));
  },[]);

  return (
    <div className="container">
      <h1>Mini Social Wall</h1>
      <CreatePost refreshPosts={()=>{
        fetchPosts().then(res => setPosts(res.data));
      }}/>
      
      {posts.map(post => (
        <PostCard 
            key={post.id} 
            post={post} 
            refreshPosts={()=>{
                fetchPosts().then(res => setPosts(res.data))
            }}
        />
        ))}

    </div>
  );
}
