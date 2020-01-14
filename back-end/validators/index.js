const { validationResult } = require('express-validator');

exports.runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg
    }); /*  there are may be many error but
    we take first one to display, by this we will always have one 
    error and if user handle it we will show next one, in the feature we 
    can display all as a string by joining with comma */
  }
  next();
};
