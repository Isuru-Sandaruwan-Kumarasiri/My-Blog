//***********************REGISTER A NEW USER
//POST:api/users/register
//UNPROTECTED

const registerUser=(req,res,next)=>{
    res.jons("Register user")
}




//***********************LOGIN A REGISTERED USER
//POST:api/users/login
//UNPROTECTED

const loginUser=(req,res,next)=>{
    res.jons("loginuser")
}




//***********************USER PROFILE
//POST:api/users/:id
//PROTECTED

const getUser=(req,res,next)=>{
    res.jons("user profile")
}




//*********************** CHANGE USER AVATAR 
//POST:api/users/change-avatar
//PROTECTED

const changeAvatar=(req,res,next)=>{
    res.jons("change user avatar")
}




//***********************EDIT USER DETAILS
//POST:api/users/edit-user
//PROTECTED

const editUser=(req,res,next)=>{
    res.jons("edit user details")
}





//***********************GET AUTHORS
//POST:api/users/authors
//UNPROTECTED

const getAuthor=(req,res,next)=>{
    res.jons("get all users /authors")
}

module.exports={registerUser,loginUser,getUser,changeAvatar,editUser,getAuthor}