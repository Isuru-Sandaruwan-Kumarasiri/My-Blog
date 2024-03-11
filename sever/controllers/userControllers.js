//***********************REGISTER A NEW USER
//POST:api/users/register
//UNPROTECTED

const registerUser=async(req,res,next)=>{
    res.json("Register user")
}




//***********************LOGIN A REGISTERED USER
//POST:api/users/login
//UNPROTECTED

const loginUser=async(req,res,next)=>{
    res.json("loginuser")
}




//***********************USER PROFILE
//POST:api/users/:id
//PROTECTED

const getUser=async(req,res,next)=>{
    res.json("user profile")
}




//*********************** CHANGE USER AVATAR 
//POST:api/users/change-avatar
//PROTECTED

const changeAvatar=async(req,res,next)=>{
    res.json("change user avatar")
}




//***********************EDIT USER DETAILS
//POST:api/users/edit-user
//PROTECTED

const editUser=async(req,res,next)=>{
    res.json("edit user details")
}





//***********************GET AUTHORS
//POST:api/users/authors
//UNPROTECTED

const getAuthor=async(req,res,next)=>{
    res.json("get all users /authors")
}

module.exports={registerUser,loginUser,getUser,changeAvatar,editUser,getAuthor}