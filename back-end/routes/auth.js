const express = require('express');
const router = express.Router();
const { signup, signin, requireSignin } = require('../controllers/auth');

// validators
const { runValidation } = require('../validators');
const {
  userSignupValidator,
  userSigninValidator
} = require('../validators/auth');

router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/signin', userSigninValidator, runValidation, signin);
router.get('/secret', requireSignin, (req, res) => {
  res.json({
    message: 'you have access to secret page'
  });
});

module.exports = router;
