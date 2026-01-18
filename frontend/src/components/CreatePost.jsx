import { useState } from "react";
import { createPost } from "../services/api";

export default function CreatePost({ refreshPosts }) {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", "Kajal");
    formData.append("text", text);
    formData.append("image", image);

    await createPost(formData);

    setText("");
    setImage(null);
    setPreview(null);
    refreshPosts();
  };

  return (
    <>
      <div className="post-form">
        <input
          className="post-input"
          placeholder="What's on your mind?"
          value={text}
          onChange={(e)=>setText(e.target.value)}
        />

        <label className="file-label">
          📷 Add Image
          <input 
            type="file"
            hidden
            onChange={handleImage}
          />
        </label>

        <button className="post-btn" onClick={handleSubmit}>Post</button>
      </div>

      {preview && (
        <div style={{marginBottom:"20px"}}>
          <img 
            src={preview} 
            alt="preview" 
            style={{width:"100%", borderRadius:"8px"}}
          />
        </div>
      )}
    </>
  );
}
