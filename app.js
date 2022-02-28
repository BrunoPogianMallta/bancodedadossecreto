require('dotenv').config();
const express = require('express');
const Tasks = require('./src/models/tasks');
const tasksController = require('./src/controllers/tasksController');
const cors = require('cors');




const app = express();

app.use(express.json());

app.use(cors({origin:'*'}));
app.use('/tasks',tasksController)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});