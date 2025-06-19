const  router = require('express').Router();

const Skill = require('../../models/skills');

router.get('/',async(req,res)=>{
    try{
        const skills= await Skill.find();
        res.json(skills);
    }catch(err){
        res.status(503).json({'error':err});
    }

})

module.exports = router;