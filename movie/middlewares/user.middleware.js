const { user } = require("../Models/user.schema");

const checksignup = (req,res,next)=>{
    const {email,username, password} = req.body;
    console.log(email,username, password)
    if(email && password && username){
        next()
    }
    else{
        res.status(400).send({error: "all fields are required"});
    }
}
const checklogin = (req,res,next)=>{
    const {username, password} = req.body;
    console.log(username, password)
    if(password && username){
        next()
    }
    else{
        res.status(400).send({error: "all fields are required"});
    }
}
const checkFiledmovie = (req,res,next)=>{
    const { title,description,actors,releaseDate,category,image,addedBy} = req.body;
    
    if(title && description && actors && releaseDate && category && image && addedBy  ){
        next()
    }
    else{
        res.status(400).send({error: "all fields are required"});
    }
}


module.exports={checksignup, checklogin, checkFiledmovie,}