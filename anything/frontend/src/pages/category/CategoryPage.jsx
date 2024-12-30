import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoryWrapper from './CategoryWarpper';
import axios from 'axios';
import Card from '../../components/Card';

const CategoryPage = () => {
  const { category } = useParams(); // Get the category from the route parameters
  console.log(category); // Log the selected category for debugging
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/categories/${category}`);
        console.log("API Response:", response.data); // Log the full API response here
        setItems(response.data); // Set the items state
      } catch (error) {
        setError(error.message || 'Error loading category');
      } finally {
        setLoading(false);
      }
    };
  
    fetchCategoryData();
  }, [category]);
  
  return (
    <div className="px-6 lg:px-12 py-20">
      <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed capitalize">
        {category}
      </h1>
      <CategoryWrapper />

      {loading && <p>Loading...</p>} {/* Show loading indicator */}
      {error && <p className="text-red-500">{error}</p>} {/* Show error message if any */}

      <ul className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {items &&
          items.map((item) => (
            <Card key={item._id} item={item} />
          ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
