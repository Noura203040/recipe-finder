import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Recipes = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getLatestItems = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/all-items");
                setItems(response.data);
            } catch (err) {
                setError('Failed to fetch recipes');
            } finally {
                setLoading(false);
            }
        };
        getLatestItems();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Recipes</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name}</li> // Replace "name" with the correct property from your data
                ))}
            </ul>
        </div>
    );
};

export default Recipes;
