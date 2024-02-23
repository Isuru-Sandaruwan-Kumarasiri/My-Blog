const {Router}=require('express');
const {registerUser,loginUser,getUser,changeAvatar,editUser,getAuthor}=require("../controllers/userControllers")

const router=Router()

// router.get('/',(req,res,next)=>{
//     res.json("This is the user router")
// })

router.post("/register",registerUser)
router.post("/login",loginUser)
router.post("/:id",getUser)
router.post("/",getAuthor)
router.post("/change-avatar",changeAvatar)
router.post("/edit-user",editUser)


module.exports=router