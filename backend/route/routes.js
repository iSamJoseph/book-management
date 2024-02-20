const express = require('express');
const controller = require('../controller/controls')

const router = express.Router();

router.route('/login').post(controller.login);
router.route('/Addbook').post(controller.addbook);
router.route('/getBookdet').get(controller.getBooks);

router.route('/BookWith/:id').get(controller.getBookWithId);
router.route('/UpdateBook/:id').patch(controller.patchBook);
router.route('/DeleteBook/:id').delete(controller.deleteBook);


module.exports = router;