const express = require('express');
const Task = require('../models/tasks');
const ULID = require('ulid');
const { route } = require('express/lib/application');


const router = express.Router();

// cadastrar task
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

//get all tasks
router.get('/getAll', async(req,res)=>{
  try {
    const task = await Task.findAll({
      attributes:{
        exclude:
          ['createdAt',
          'updatedAt',
          'deletedAt',
        ]
        
      }
    });
    return res.status(200).json({tasks:task})
  } catch (error) {
    console.log(error)
    return res.status(500).json({error})
  }
})

//pegar task por id
router.get('/get/:id', async(req,res)=>{
  const id = req.body.id;
  try {
    const tas = await Task.findByPk(id);
    console.log('task',tas)
    return res.status(200).json(tas)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
})

//deletar task
router.delete('/delete',async (req,res)=>{
  try {
  const id = req.body;
  const taskDeleted = await Task.delete(id);
  return res.status(200).json({message:'task deleted'})
  } catch (error) {
    return res.status(500).json(error)
  }
})



module.exports = router;