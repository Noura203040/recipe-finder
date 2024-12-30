# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Authors
- Roaa Mostafa Ramadan_120220223 (Backend Developer)
- Noura Eslam Abdelsalam_120210072 (Frontend Developer)

# Recipe Finder App
## Description
The Recipe Finder App allows users to search, filter, and view recipes. Users can explore recipe details such as ingredients, instructions, and an image. The app also enables administrators to add, update, or delete recipes. This project demonstrates the implementation of a full-stack application with a React.js frontend and a Node.js/Express.js backend connected to a MongoDB database.
## Features
### Core Features
1. **Search Recipes**: Search recipes by name or ingredients.
2. **Filter Recipes**: Filter recipes by categories like Breakfast, Dinner, etc.
3. **View Recipe Details**: Display recipe information, including ingredients, instructions, and an image.
4. **registeration**:sign in signup.
5. **Subscribe**:sbscribe to the cooker i love.
6. **callories**:calculate the callories.
7. **Favorites**: Save recipes as favorites for easy access.
8. **Nutrition Information**: Display calories, protein, and other nutritional data for recipes.
9. **Timing**: Users can see the time of preparation.
10. **Shopping List Generator**: Generate a list of ingredients for selected recipes.

## Project Structure
### Backend Files
1. **`server.js`**: The entry point for the backend server. Sets up the Express server and connects to the MongoDB database.
2. **`models/Recipe.js`**: Defines the MongoDB schema for recipes using Mongoose.
3. **`routes/recipes.js`**: Contains all API routes for CRUD operations.
4. **`package.json`**: Defines project dependencies and metadata.
5. **`.env`**: Stores sensitive environment variables like the MongoDB connection string.

 
### Frontend Files
1. **`App.js`**: The root React component that manages routing.
2. **`components/SearchBar.js`**: A reusable search bar component.
3. **`components/RecipeCard.js`**: Displays a single recipe card.
4. **`pages/RecipeList.js`**: Displays a list of recipes.
5. **`pages/RecipeDetails.js`**: Displays the details of a single recipe.
6. **`services/api.js`**: Contains Axios functions to interact with the backend API.

## Technologies Used
### Backend
- **Node.js**: JavaScript runtime for server-side programming.
- **Express.js**: Web framework for creating the API.
- **MongoDB**: NoSQL database to store recipe data.
- **Mongoose**: MongoDB object modeling for Node.js.

### Frontend
- **React.js**: JavaScript library for building the user interface.
- **Axios**: HTTP client for making API requests.
- **CSS/Bootstrap/Material-UI**: For styling the app.

## Installation and Setup
### Prerequisites
1. Node.js installed on your machine.
2. MongoDB set up locally or a cloud MongoDB instance (e.g., MongoDB Atlas).

 
### Steps
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-repo-url/recipe-finder-app.git
   cd recipe-finder-app
   ```

2. **Set Up the Backend:**
   - Navigate to the `backend` folder.
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file and add your MongoDB connection string:
     ```
     MONGO_URI=your_mongodb_connection_string
     PORT=5000
     ```
   - Start the backend server:
     ```bash
     npm start
     ```
3. **Set Up the Frontend:**
   - Navigate to the `frontend` folder.
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the frontend server:
     ```bash
     npm start
     ```

### API Endpoints
1. **`GET /recipes`**: Fetch all recipes.
2. **`GET /recipes/:id`**: Fetch a specific recipe.
3. **`POST /recipes`**: Add a new recipe.
4. **`PUT /recipes/:id`**: Update a recipe.
5. **`DELETE /recipes/:id`**: Delete a recipe.

## Example Schema
```javascript
const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail_image: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  rating: { type: Number, default: 0 },
  createdBy: { type: String, default: 'Admin' },
  dateAdded: { type: Date, default: Date.now },
});
```

## Future Improvements
1. Add user authentication.
2. Implement a recommendation system based on user preferences.
3. Allow users to upload recipe images.
4. Add localization and multilingual support.


