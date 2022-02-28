const express = require('express');
const Task = require('../models/tasks');


const router = express.Router();

//cadastrar task
router.post('/register',async(req,res)=>{
    const task = req.body;
    try {
        const registerTask = await Task.create(task)
        return res.status(200).json(registerTask)  
    } catch (error) {
      return res.status(200).json(error);  
    }
})



module.exports = router;