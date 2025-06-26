const router = require('express').Router();
const courseModel = require('../../models/course');

router.get('/', async (req,res)=>{
    const resultado = await courseModel.find();
    res.json(resultado);
})

module.exports= router;