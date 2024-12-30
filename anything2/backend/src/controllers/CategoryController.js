const Category = require('../model/CategoryModels');
const Item = require('../model/ItemModel');

const getCategory = async (req, res) => {
    const { category } = req.params;

    try {
        // Find category (case-insensitive match)
        const categoryData = await Category.findOne({ name: new RegExp(`^${category}$`, 'i') });
        if (!categoryData) {
            return res.status(404).json({ message: 'Category not found!' });
        }

        // Fetch items based on menuId
        const items = await Item.find({ menuId: categoryData.menuId });

        if (items.length === 0) {
            return res.status(200).json({ message: 'No items found for this category.' });
        }

        // Send the items as response
        res.status(200).json(items);
    } catch (error) {
        console.error(`Error fetching category ${category}:`, error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { getCategory };
