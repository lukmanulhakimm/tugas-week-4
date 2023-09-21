const authRouter = require("express").Router();
const argon = require("argon2");

authRouter.post("/",async(req,res)=>{
    try {
        const {body}=req
        const hashedPassword= await argon.hash(body.password)
        res.status(200).json({
            msg: "ok",
            data:
        });
    } catch (error) {
        
    }
})