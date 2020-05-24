const express = require('express');
const passport = require('passport');
const controller = require('../controllers/analytic')
const router = express.Router();

// localhost:5000/api/auth/login
router.get('/overview', passport.authenticate('jwt', {
  session: false
}), controller.overview)

// localhost:5000/api/auth/register
router.get('/analytic', passport.authenticate('jwt', {
  session: false
}), controller.analytic)
module.exports = router;