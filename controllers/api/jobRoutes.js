const router = require('express').Router();
const Job = require('../../models/job');
// const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const jobData = await Job.findAll();
    res.status(200).json(jobData);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const newJob = await Job.create({
      ...req.body,
      // user_id: req.session.user_id
    });

    res.status(200).json(newJob);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;