const router = require('express').Router();
const userRoutes = require('./userRoutes');
const jobRoutes = require('./jobRoutes');
const tipRoutes = require('./tipsRoutes'); 

router.use('/users', userRoutes);
router.use('/tips', tipRoutes); 
router.use('/jobs', jobRoutes);

module.exports = router;
