const router = require('express').Router();
const bookController = require('../../controllers/bookControllers');

router.route('/search/:keyword').get(bookController.getBooks);

module.exports = router;
