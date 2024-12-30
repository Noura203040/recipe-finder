const Item = require("../model/ItemModel");

// Get all items, sorted by creation date
const getAllItems = async (req, res) => {
    try {
        const result = await Item.find().sort({ createdAt: -1 }); // Ensure 'createdAt' is a valid field
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve items." });
    }
};

// Get searched items based on query
const getSearchedItems = async (req, res) => {
    const { q } = req.query;
    console.log(q);
    try {
        let items = [];
        if (q) {
            items = await Item.find({ name: { $regex: q, $options: "i" } }); // Case-insensitive search by item name
        }
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: "Failed to search items." });
    }
};

// Get a single item by ID
const getSingleItems = async (req, res) => {
    const { id } = req.params;
    try {
        const item = await Item.findById(id);
        if (!item) {
            return res.status(404).json({ message: "Item not found." });
        }
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve item." });
    }
};

module.exports = {
    getAllItems,
    getSearchedItems,
    getSingleItems,
};
