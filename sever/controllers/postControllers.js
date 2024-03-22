
//=========================================CREATE A POST
//PSOT :api/posts
//PROTECTED
const createPost=async(req,res,next)=>{
        res.json("create Post")
}
//=========================================GET ALL POSTS
//GET :api/getposts
//PROTECTED
const getPosts=async(req,res,next)=>{
    res.json("get all Post")
}
//=========================================GET SINGLE POSTS
//GET :api/posts/:id
//UNPROTECTED
const getPost=async(req,res,next)=>{
    res.json(" get single Post")
}
//=========================================CREATE A POST BY CATEGORY
//GET :api/posts/category/:category
//PROTECTED
const getCatPost=async(req,res,next)=>{
    res.json("get  Posts by category")
}
//=========================================GET USER/AUTHOR POST
//GET :api/posts/users/:id
//UNPROTECTED
const getUserPosts=async(req,res,next)=>{
    res.json("Get user post")
}
//=========================================EDIT POST
//PATCH :api/posts/:id
//UNPROTECTED
const editPost=async(req,res,next)=>{
    res.json("Edit Post")
}
s
//=========================================EDIT POST
//PATCH :api/posts/:id
//UNPROTECTED
const deletePost=async(req,res,next)=>{
    res.json("Delete Post")
}
