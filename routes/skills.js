var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')

// GET /skills
router.get('/', skillsCtrl.index)

router.get('/new', skillsCtrl.new)

// GET /skills/:id
router.get('/:id', skillsCtrl.show)

router.post('/', skillsCtrl.create)

router.delete('/:tuna', skillsCtrl.delete)

module.exports = router;
