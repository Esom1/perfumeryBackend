const express = require ('express');
const app = express ();
const mongoose = require ('mongoose');
const PerfumeryRouter = require ('./router/perfumeryRouter.js')
const port = process.env.port || 2020

require ('dotenv').config();

app.use (express.json());

const mongoDB_url = process.env.DBURL;

const connect = ()=>{
mongoose.connect (mongoDB_url)
try{
  console.log('DB connected successfully');

}catch(err){
  console.log(err);
}
}

app.use ('/perfumery' , PerfumeryRouter)



app.listen(port, ()=>{
  connect()
  console.log(`app running on port ${port}`);

})
