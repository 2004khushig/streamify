import express from "express";
import {protectRoute} from "../middleware/auth.middleware.js";
import {onboard} from "../controller/auth.controller.js";
import {signup,login,logout} from "../controller/auth.controller.js";

const router=express.Router();

router.post("/signup",signup);
router.post("/login",login); 
router.post("/logout",logout);

router.post("/onboarding",protectRoute,onboard)

router.get("/me",protectRoute,(req,res)=>{
    res.status(200).json({success:true,userx:req.user});
});

export default router;