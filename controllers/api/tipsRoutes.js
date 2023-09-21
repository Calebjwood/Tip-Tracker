const router = require('express').Router();
const wageCalc = require('../../utils/calcTotals');



// GET route to render login page
router.get('/', (req, res) => {
    // query database for tips, hours, and hourly wage then pass to totalMoney
    res.json(wageCalc.totalMoney(2, 10, [1, 1]));
});



module.exports = router;