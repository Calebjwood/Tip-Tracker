const router = require('express').Router();
const Job = require('../../models/job');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const jobData = await Job.findAll();
    
    res.status(200).json(jobData);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newJob = await Job.create({
      ...req.body,
      user_id: req.session.user_id
    });

    res.status(200).json(newJob);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
      const jobData =  await Job.update(
        {
          name: req.body.name,
          hourly_wage: req.body.hourly_wage
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
      res.status(201).json(jobData)
    } catch (err) {
      res.status(500).json(err);
    }
})


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const jobData = await Job.destroy({
      where: {
        id: req.params.id,
      }
    });


    if(!jobData){
      res.status(400).json('No job found with this id!')
      return
    }

    res.status(201).json(jobData)
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;