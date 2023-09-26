const router = require('express').Router();
const Tip = require('../../models/tips');
const Job = require('../../models/job');
const wageCalc = require('../../utils/calcTotals');
const withAuth = require('../../utils/auth');



// GET route to see all tips
router.get('/all', async (req, res) => {
    try {
        const tipsData = await Tip.findAll();

        res.status(200).json(tipsData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET route to help generate chart
router.get('/chart/:id', withAuth, async (req, res) => {
  try {
    const tipsData = await Tip.findAll({
      where: { job_id: req.params.id },
      include: [{ model: Job }]
    });

    const dataForChart = tipsData.map(tip => ({
      date: tip.date,
      totalIncome: Number(tip.tips) + (Number(tip.hours) * Number(tip.job.hourly_wage))
    }));

    res.status(200).json(dataForChart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST route to create tips
router.post('/', withAuth, async (req, res) => {
    try {
        const newTips = await Tip.create({
            ...req.body,
            job_id: req.session.job_id,
        });

        res.status(200).json(newTips);
    } catch (err) {
        res.status(500).json(err);
    }
});
 
// PUT route to update tips
router.put('/:id', withAuth, async (req, res) => {
    try {
        const updatedTips = await Tip.update(
            {
                hours: req.body.hours,
                tips: req.body.tips,
            },
            {
                where: {
                    id: req.params.id,
                    // user_id: req.session.user_id, -- include this when we add user_id to Tips model?
                },
            },
        );

        if (!updatedTips) {
            res.status(404).json({ message: 'No tips found with this id!' });
            return;
        }

        res.status(200).json(updatedTips);
    } catch (err) {
        res.status(500).json(err);
    }
});

// PUT route to delete tips
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const tipsData = await Tip.destroy({
            where: {
                id: req.params.id,
                // user_id: req.session.user_id, -- include this when we add user_id to Tips model?
            },
        });

        if (!tipsData) {
            res.status(404).json({ message: 'No tips found with this id!' });
        }

        res.status(200).json(tipsData);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;