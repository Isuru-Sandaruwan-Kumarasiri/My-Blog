const express = require("express");
const cors = require('cors');
const { connect } = require('mongoose');
require('dotenv').config();


const userRoutes=require('./routes/postRoutes')
const postRoutes=require('./routes/userRoutes')

const app = express();
app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}))
app.use(cors({credentials:true,origin:"http://localhost:3000"}))

app.use("/api/users",userRoutes)
app.use("/api/posts",postRoutes)

connect(process.env.MONGO_URL)
  .then(() => app.listen(process.env.PORT || 5000, () => console.log(`Server running on port ${process.env.PORT || 5000}`)))
  .catch(error => console.log(error));
