const PERFUMERY = require ('../model/PerfumeryModel');

const create_post = async (req,res)=>{
  const {title,description,image,category,price} = req.body 
  const perfumery = new PERFUMERY({
    title,description,image,category,price
  })
  try{
    const savedperfumery = await perfumery.save()
    res.status(200).json(savedperfumery)

  }catch (err){
    res.status(404).json({message:err})

  }
};

const all_post = async (req,res)=>{
  try{
    const allPost = await PERFUMERY.find()
    res.json(allPost)
  }catch(err){
    res.status(404).json ({message:err})

  }
};

const specific_post = async (req,res)=>{
  try{
    const specificPost = await PERFUMERY.findById(req.params.postId)
    res.json (specificPost)
  }catch(err){
    res.status(404).json ({message:err})
  }
};

const delete_post = async (req,res)=>{
  try{
    const deletePost = await PERFUMERY.findByIdAndDelete({_id:req.params.postId})
    res.json(deletePost)
  }catch(err){
    res.status(404).json ({message:err})
  }
};

const update_post = async (req,res)=>{
  try{
    const updatePost = await PERFUMERY.updateOne({_id:req.params.postId},{$set: req.body})
    res.json(updatePost)
  }catch(err){
    res.status (404).json ({message:err})
  }
};

module.exports ={
  create_post,
  all_post,
  specific_post,
  delete_post,
  update_post,
}