const router = require('express').Router();


const wageCalc = require('../utils/calcTotals');

const { User, Job, Tip } = require('../models');
const withAuth = require('../utils/auth');


// GET route to render the homepage
router.get('/', (req, res) => {
  
  res.render('homepage', {
    logged_in: req.session.logged_in
  })
})

// GET route to render profile page
router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Job }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET route to render job page
router.get('/job/:id', withAuth, async (req, res) => {
  try {
    const jobData = await Job.findByPk(req.params.id, {
      include: [{ model: Tip }],
    });

    const job = jobData.get({ plain: true });
    req.session.save(() => {
      req.session.job_id = req.params.id
    })

    res.render('job', {
      ...job,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET to render addTip page 
router.get('/addTip', withAuth, async (req, res) => {
   try {
    res.render('addTip', {
      job_id: req.session.job_id
    })
   } catch (err) {
    res.status(500).json(err);
   }
})

//GET to render the updateTip page
router.get('/updateTip/:id', withAuth , async (req, res) => {
  try {
    res.render('updateTip', {
      job_id: req.session.job_id,
      logged_in: true
    })
  } catch (err) {
    res.status(500).json(err);
  }
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
          acc += wageCalc.calcTotal(hours, hourly_wage, tips);
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