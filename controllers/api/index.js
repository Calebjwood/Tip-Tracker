const router = require('express').Router();
const userRoutes = require('./userRoutes');
const tipsRoutes = require('./tipsRoutes');
const jobRoutes = require('./jobRoutes');

router.use('/users', userRoutes);
router.use('/tips', tipsRoutes);
router.use('/jobs', jobRoutes);

module.exports = router;
