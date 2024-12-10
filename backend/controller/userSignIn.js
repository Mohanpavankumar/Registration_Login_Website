const userModel = require("../models/userModel")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');

async function userSignInController(req,res){
    try{
        const {email, password} = req.body;

        //Checking the credentials
        if(!email){
            throw new Error("Please provide email");
        }
        if(!password){
            throw new Error("Please provide password");
        }

        const user = await userModel.findOne({email});
        
        if(!user){
            throw new Error("User not found!");
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if(checkPassword){
            const tokenData = {
                _id : user._id,
                email : user.email,
            }
            const token = await jwt.sign(tokenData, process.env.JSONWEBTOKEN, { expiresIn: 60 * 60 * 10 });

            const tokenOption = {
                httpOnly : true,
                secure : true
            }

            res.cookie("token",token,tokenOption).status(200).json({
                message : "Login Successfully!",
                data : token,
                success : true,
                error : false
            })

        }else{
            throw new Error("Plesae check your password");
        }

        console.log("checkPassword",checkPassword);

    }catch(error){
        res.json({
            message : error.message || error,
            error : true,
            success : false,
        })
    }
}

module.exports = userSignInController;
