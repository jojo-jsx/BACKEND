import {User} from "../models/user.model.js";

const registerUser = async (req , res)=>{
    try{
        const {username , email , password} = req.body;

    //basic validation

    if(!username || !email || !password){
        return res.status(400).json({message:"all fields required"});
    }

    //check if user exists
    const existing= await User.findOne({email: email.toLowerCase()});
    if(existing){
        return res.status(400).json({message:"user already exists"});
    }

    //create User

    const user = await User.create({
        username,
        email: email.toLowerCase(),
        password,
        loggedIn: false
    });

    return res.status(201).json({message:"user created successfully" , user :{
        id : user._id,
        username : user.username,
        email : user.email
    }});
}catch(error){
    res.status(500).json({message:"internal server error" , error: error.message});
}
};

export {registerUser};
