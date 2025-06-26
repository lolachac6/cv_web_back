const router = require('express').Router();
const apiRouterSkills = require('./api/skills')
const apiRouterPersonalSkills = require('./api/personalSkills');
const apiRouterCvVitae = require('./api/cvVitae');
const course = require('./api/courseWeb');

router.use('/skills', apiRouterSkills);
router.use('/personalSkills', apiRouterPersonalSkills);
router.use('/cv-vitae', apiRouterCvVitae );
router.use('/courseWeb', course);

module.exports = router; 