// Libraries
import express from 'express';

// Routes
const user = require('./routes/user');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('The server is working!');
});

// User related
router.use('/user', user);

module.exports = router;