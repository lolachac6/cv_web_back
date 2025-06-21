const router = require('express').Router();
const apiRouterSkills = require('./api/skills')
const apiRouterPersonalSkills = require('./api/personalSkills');
const apiRouterCvVitae = require('./api/cvVitae');

router.use('/skills', apiRouterSkills);
router.use('/personalSkills', apiRouterPersonalSkills);
router.use('/cv-vitae', apiRouterCvVitae );

module.exports = router; 