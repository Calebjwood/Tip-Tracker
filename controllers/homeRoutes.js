const router = require('express').Router();
const { Job, Tip } = require('../models');
const wageCalc = require('../utils/calcTotals');
// GET route to render the homepage
router.get('/', (req, res) => {
  
  res.render('homepage', {
    logged_in: req.session.logged_in
  })
})

// GET route to render login page
router.get('/login', (req, res) => {
  res.render('login');
});

// GET route to render signup page
router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/tips', async (req, res) => {
  // query database for tips, hours, and hourly wage then pass to totalMoney
  try {
      const tipData = await Tip.findAll({
          include: [
              {
                  model: Job,
                  attributes: ['hourly_wage', 'name']
              },

          ],    
      });


      const tips = tipData.map((tip) => tip.get({ plain: true }));
      const total = tips.reduce((acc, tip) => {
          const { hours, tips, job: { hourly_wage } } = tip;
          acc = wageCalc.calcTotal(hours, hourly_wage, tips);
          return acc;
      }, 0)
      
    
      res.render('project', {
          tips,
          total,
          logged_in: req.session.logged_in
      });
      
  } catch (err) {
  res.status(500).json(err);
}
});

module.exports = router;