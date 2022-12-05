const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');

require('../MongodbCloud/cloud')

app.use(cors());

const StudModel = require('./Collections');



//GET method
app.get('/', async (req,res) => {
    let data = await StudModel.find({});
    res.send(data);
})


//POST method
app.post('/',async(req,res)=>{
    let data = new StudModel(req.body);
    const result = await data.save();
    res.status(201).json(result);
})



//Update
app.get('/:id', async (req,res) => {
    let data = await StudModel.findById({_id:req.params.id});
    res.status(201).json(data);
})


//PUT method

app.put('/:id',async(req,res)=>{

    let data = await StudModel.updateOne(
           {_id:req.params.id},
           {$set:req.body}
        );
    res.status(201).json(data);
})


//DELETE method

app.delete('/:id',async (req,res)=>{
    let data = await StudModel.deleteOne(
        {_id:req.params.id}
    )
    res.send(data);
})


app.listen(4000);