const { check, validationResult } = require('express-validator');

const exceptedCategory = ['political', 'entertainment', 'tech'];
const validator = [
    //check filed name name='title'
    check('title').trim().not().isEmpty().withMessage('Title is required!'),
    check('content').trim().not().isEmpty().withMessage('Must have some content!'),
    check('category').isIn(exceptedCategory).withMessage('Select at least one category!')
]
const result = (req, res, next) => {
    const result = validationResult(req);
    const hasError = !result.isEmpty();
    if (hasError) {
        const error = result.array()[0].msg
        res.json({ success: false, message: error });
    }
    next();
}

const validateFile = (req, res, next) => {
    const exceptedImageFiles = ['jpg', 'jpeg', 'png'];
    if (!req.file) {
        return res.json({ success: false, message: 'Image is required!' })
    }

    const fileExtension = req.file.mimetype.split('/').pop();
    if (!exceptedImageFiles.includes(fileExtension)) {
        return res.json({ success: false, message: 'Image file is not valide!' })
    }
    next();
}


module.exports = {
    validator,
    result,
    validateFile
}