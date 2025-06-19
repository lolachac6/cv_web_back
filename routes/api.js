const router = require('express').Router();
const apiRouterSkills = require('./api/skills')

router.use('/skills',apiRouterSkills);

module.exports = router; 