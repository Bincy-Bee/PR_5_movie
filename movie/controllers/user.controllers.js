const { user } = require("../Models/user.schema")
const { movie } = require("../Models/movie.schema");

const home = (req,res)=>{
    res.send("Welcome to the movie API")
}
const signup = async(req,res)=>{
    try {
        let data =await user.findOne({email : req.body.email});
        if(data){
            return res.send("user already exist")
        }
        else{
            data = await user.create(req.body);
            return res.status(201).send(data);
        }
    } catch (error) {
        return res.send(error.message)
    }
}
const login = async (req,res)=>{
    try {
        let data = await user.findOne({username : req.body.username});
        if (!data){
            return  res.status(401).json({error:"Invalid username or password"})
        }
        if(data.password != req.body.password){
            return res.status(401).json({error:"Invalid username or password"})
        }
        return res.send({message : 'Logged in successfully'})
    } catch (error) {
        return res.send(error.message)
    }
}

const userDelete = async(req,res)=>{
    let {id} = req.params;
    console.log(id);

    let data = await user.findOneAndDelete(id)

    res.send({message: 'User deleted successfully'})
}

//movie

const movieCreate = async(req,res)=>{
    let data = await movie.create(req.body);
    console.log(data)
    res.status(201).send(data);
}
const movieUpdate = async(req,res)=>{
    let {id} = req.params;
    let updateMovie =await movie.findByIdAndUpdate(id, req.body);
    updateMovie = await movie.findById(id);
    res.status(200).send(updateMovie);
}

const movieDelete = async(req,res)=>{
    let {id} = req.params;
    console.log(id);
    let data =await movie.findByIdAndDelete(id);
    res.send({"message": "Movie deleted"});
}
const ratingUpdate = async(req,res)=>{
    let {id}= req.params;
    // let {value} = req.body.ratings[0];
    console.log(id)
    // console.log(value)
    if (id){
        let data = await movie.findById(id)
        data.ratings.push({value:req.body.rating});
        await data.save();
        console.log(data)
        res.send(data)
    }
    else{
        res.send({error: "movie not found"})
    }
}
const commentUpdate = async(req,res)=>{
    let {id}= req.params;
    if (id){
        let data = await movie.findById(id);
        data.comments.push(req.body)
        await data.save();
        res.send(data)
    }
    else{
        res.send({error: "movie not found"})
    }
}

const movieFilter = async(req,res)=>{
    let data=await movie.find(req.query)
    res.send(data)
}
module.exports = {home, signup,login, userDelete, movieCreate, movieDelete, movieUpdate, ratingUpdate, commentUpdate, movieFilter}