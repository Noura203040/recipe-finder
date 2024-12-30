// Corrected server code
const express = require('express');
const mongoose = require('mongoose');
const ItemRoutes = require("./src/routes/itemRoute");
const cors = require("cors");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

//nourasalm 
//PdXBV7Rap08qmlOL

async function main() {
  try {
    await mongoose.connect('mongodb+srv://nourasalm:PdXBV7Rap08qmlOL@recipe-finder.e156s.mongodb.net/recipe-finder?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");

    app.get('/', (req, res) => {
      res.send('Veggify Recipe App Server is running!');
    });

    // Routes

    const ItemRoutes = require("./src/routes/itemRoute");
    const CategoryRoute = require('./src/routes/CategoryRoute');


    app.use('/api', CategoryRoute);
    app.use('/api', ItemRoutes);

    app.listen(port, () => {
      console.log('Server is running on http://localhost:${port}');
    });
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

main();