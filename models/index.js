const User = require('./User');
const Job = require('./job');
const Tip = require('./tips'); 

User.hasMany(Job, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Job.belongsTo(User, {
    foreignKey: 'user_id'
});

Job.hasMany(Tip, {
    foreignKey: 'job_id', 
    onDelete: 'CASCADE'
});

Tip.belongsTo(Job, {
    foreignKey: 'job_id',
});


module.exports = { User, Job, Tip };
