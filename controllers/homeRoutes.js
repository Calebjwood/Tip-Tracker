const router = require('express').Router();
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


module.exports = router;