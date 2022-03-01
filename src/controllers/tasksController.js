const express = require('express');
const Task = require('../models/tasks');
const ULID = require('ulid')


const router = express.Router();

//cadastrar task
router.post('/register',async(req,res)=>{
    const {title,description}= req.body;
    const id = ULID.ulid();
    try {
        const registerTask = await Task.create({id,title,description});
        return res.status(200).json(registerTask)  
    } catch (error) {
      return res.status(200).json(error);  
    }
})



module.exports = router;