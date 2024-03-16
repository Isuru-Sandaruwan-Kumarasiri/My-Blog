const {Router}=require('express');
const {registerUser,loginUser,getUser,changeAvatar,editUser,getAuthor}=require("../controllers/userControllers")
const authMiddleware=require("../middleware/authMiddleware")

const router=Router()

// router.get('/',(req,res,next)=>{
//     res.json("This is the user router")
// })

router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/:id",getUser)
router.get("/",getAuthor)
router.post("/change-avatar",authMiddleware,changeAvatar)
router.patch("/edit-user",authMiddleware,editUser)


module.exports=router