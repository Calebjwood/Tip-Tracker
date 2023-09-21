const router = require('express').Router();
const userRoutes = require('./userRoutes');
const tipsRoutes = require('./tipsRoutes');


router.use('/users', userRoutes);
router.use('/tips', tipsRoutes);


module.exports = router;
