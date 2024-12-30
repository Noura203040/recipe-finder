const express = require('express');
const router = express.Router();
const { getCategory } = require('../controllers/CategoryController');

// Define the route
router.get('/categories/:category', getCategory);

module.exports = router;
