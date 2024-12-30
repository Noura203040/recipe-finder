const express = require("express");
const router = express.Router();

// Importing the ItemController
const ItemController = require("../controllers/itemController");

// Define routes
router.get("/all-items", ItemController.getAllItems);  // Fetch all items
router.get("/items", ItemController.getSearchedItems);  // Search items based on query
router.get("/items/:id", ItemController.getSingleItems);  // Fetch item by ID

module.exports = router;
