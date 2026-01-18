# Mini Social Wall – Full Stack Assignment

## Project Overview
Mini Social Wall is a full-stack social feed application where users can:
- Create posts with text and an image
- View all posts in a feed
- Like posts
- Add comments to posts
- Delete posts

This project demonstrates frontend UI design, backend API creation, image upload handling, and full-stack integration.

---

## Tech Stack
Frontend:
- React (Vite)
- Axios
- CSS

Backend:
- Node.js
- Express.js
- Multer (Image Upload)
- CORS

Database:
- Currently using in-memory storage (server runtime memory)
- Database layer can be easily extended to MongoDB/MySQL

---

## Features
- Create Post (text + image)
- Display Feed
- Like Posts
- Comment on Posts
- Delete Posts
- Responsive Modern UI

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /posts | Get all posts |
| POST | /posts | Create post with image |
| POST | /posts/:id/like | Like a post |
| GET | /posts/:id/comments | Get comments for post |
| POST | /posts/:id/comment | Add comment |
| DELETE | /posts/:id | Delete post |

---

## Folder Structure

project-root/
frontend/
├ src/
│ ├ components/
│ ├ pages/
│ ├ services/
│ └ styles/
backend/
├ controllers/
├ routes/
└ index.js

---

## How to Run

### Frontend
cd frontend
npm install
npm run dev

### Backend
cd backend
npm install
node index.js

Frontend runs on: http://localhost:5173  
Backend runs on: http://localhost:5000

---

## Future Improvements
- Connect MongoDB or MySQL for permanent storage
- User authentication
- Edit post feature
- Search posts
- Deployment

---

## Author
Kajal
✅ Flow Diagram (Draw this or export as image)
[ User Browser ]
        |
        v
[ React Frontend ]
(Create Post / Like / Comment / Delete)
        |
   Axios API Calls
        |
        v
[ Express Backend Routes ]
        |
        v
[ Controllers ]
(Post / Like / Comment Logic)
        |
        v
[ In-Memory Data Store ]
(Posts & Comments Arrays)
        |
        v
[ Response Back to Frontend ]
