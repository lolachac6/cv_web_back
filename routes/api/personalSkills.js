const  router = require('express').Router();

const PersonalSkill = require('../../models/personalSkills');

router.get('/',async(req,res)=>{
    try{
         const personalSkills = await PersonalSkill.find();
        res.json(personalSkills);
    }catch(err){
        res.status(503).json({'error':err});
    }
})

module.exports = router;