const router = require('express').Router();
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

    res.render('job', {
      ...job,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET route to render login page
router.get('/login', (req, res) => {
  res.render('login');
});

// GET route to render signup page
router.get('/signup', (req, res) => {
  res.render('signup');
});


module.exports = router;