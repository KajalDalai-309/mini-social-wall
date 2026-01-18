const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.get("/", (req,res)=>{
  res.send("Mini Social Wall Backend Running 🚀");
});

const postRoutes = require("./routes/postRoutes");
app.use(postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log("Server running on port " + PORT);
});
