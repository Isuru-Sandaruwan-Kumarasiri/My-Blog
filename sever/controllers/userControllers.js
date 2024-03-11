const bcrypt=require('bcryptjs');


const User =require ("../models/userModel");
const HttpError=require("../models/errorModel");




//***********************REGISTER A NEW USER
//POST:api/users/register
//UNPROTECTED

const registerUser=async(req,res,next)=>{
    try {
        const {name,email,password,password2}=req.body;
        
        if(!name || !email || !password){
            return next (new HttpError ("Fill in all fields ",422));
        }

        const newEmail=email.toLowerCase();
        const emailExists =await User.findOne({email:newEmail});
        if(emailExists){
            return next(new HttpError ("Email already exists ",422))
        }
        if((password.trim()).lenght<6){
            return next(new HttpError ("Password should be at least 6 charactoers",422)) 
        }
        if(password!=password2){
            return next(new HttpError ("Password do not match ",422))
        }

        const salt=await bcrypt.genSalt(10);
        const hashePass=await bcrypt.hash(password,salt);
        const newUser=await User.create({name,eamil:newEmail,password:hashePass})
        res.status(201).json(newUser)

    } catch (error) {
       return next (new HttpError("User registration failed",422)) 
    }
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