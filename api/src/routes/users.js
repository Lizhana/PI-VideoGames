require('dotenv').config();
const {Router} = require('express');
const router = Router();
const { User} = require('../db');

router.get('/', async (req, res)=>{
  
    try {
  let userData = await User.findAll()
 if(userData) res.status(200).json(userData)
    
    else {
        return res.status(404).send(false)
    }}
    catch(error){
        console.log(error);
    }
})

router.post("/", async (req, res) => {
    const {
     name,
     password,
     mail
    } = req.body;
  
    try {
      let createUser = await User.create({
        name,
        password,
        mail
      });
  
      return res
        .status(200)
        .send(`The  ${name} has been created successfully`);
    } catch (error) {
      console.log(error);
    }
  });
  
  module.exports = router;