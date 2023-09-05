const {check} = require('express-validator') 
module.exports = [  
    check('name')
        .notEmpty().withMessage('The name field is required'),
    check('email')
        .notEmpty().withMessage('The email field is required').isEmail().withMessage('It has to be an email'),
    check('age')
        .notEmpty().withMessage('The age field is required').isInt().withMessage('They have to be just numbers'),
    check('color')
        .notEmpty().withMessage('The color field is required')
    ]

