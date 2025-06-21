const  router = require('express').Router();

const cvVitae = require('../../models/cv-vitae');

router.get('/', async (req,res)=>{
    try{
       const x = await cvVitae.find();
       res.json(x);

    }catch(err){
        json.status(503).json({'error':err});
    }
})

module.exports= router;