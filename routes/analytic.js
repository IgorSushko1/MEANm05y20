const express = require('express');
const controller = require('../controllers/analytic')
const router = express.Router();

// localhost:5000/api/auth/login
router.get('/overview', controller.overview)

// localhost:5000/api/auth/register
router.get('/analytic', controller.analytic)
module.exports = router;