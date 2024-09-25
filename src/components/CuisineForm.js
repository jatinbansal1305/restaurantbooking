import React, { useState } from 'react';

const CuisineForm = ({ addCuisine, removeCuisine, cuisines }) => {
    const [cuisine, setCuisine] = useState({ name: '', ingredients: '', price: '', type: '' });

    const handleCuisineChange = (e) => {
        setCuisine({ ...cuisine, [e.target.name]: e.target.value });
    };

    const handleAddCuisine = () => {
        if (!cuisine.name || !cuisine.ingredients || !cuisine.price || !cuisine.type) {
            alert('Please fill in all the fields.');
            return;
        }

        const updatedCuisine = {
            ...cuisine,
            id: Date.now(), 
            ingredients: cuisine.ingredients.split(',').map(ingredient => ingredient.trim()), 
        };

        addCuisine(updatedCuisine);
        setCuisine({ name: '', ingredients: '', price: '', type: '' });
    };

    return (
        <div>
            <h4>Add Cuisines</h4>
            <input
                type="text"
                name="name"
                placeholder="Cuisine Name"
                value={cuisine.name}
                onChange={handleCuisineChange}
                style={styles.input}
            />
            <input
                type="text"
                name="ingredients"
                placeholder="Ingredients (comma separated)"
                value={cuisine.ingredients}
                onChange={handleCuisineChange}
                style={styles.input}
            />
            <input
                type="number"
                name="price"
                placeholder="Price"
                value={cuisine.price}
                onChange={handleCuisineChange}
                style={styles.input}
            />
            <select name="type" value={cuisine.type} onChange={handleCuisineChange} style={styles.select}>
                <option value="">Select Type</option>
                <option value="VEG">Veg</option>
                <option value="NON_VEG">Non-Veg</option>
                <option value="EGG">Egg</option>
            </select>
            <button type="button" onClick={handleAddCuisine} style={styles.button}>Add Cuisine</button>

            <ul>
                {cuisines.map((c) => (
                    <li key={c.id}>
                        {c.name} - {c.type} - ₹{c.price} - {c.rating}/5
                        <br />
                        Ingredients: {c.ingredients.join(',')} {/* Display ingredients */}
                        <button type="button" onClick={() => removeCuisine(c.id)} style={styles.removeButton}>✖</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    input: {
        marginBottom: '10px',
        padding: '8px',
        border: '1px solid lightgray',
        borderRadius: '4px',
    },
    select: {
        marginBottom: '10px',
        padding: '8px',
        border: '1px solid lightgray',
        borderRadius: '4px',
    },
    button: {
        marginBottom: '10px',
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        color: 'white',
        backgroundColor: 'red',
        cursor: 'pointer',
    },
    removeButton: {
        marginLeft: '10px',
        backgroundColor: 'transparent',
        border: 'none',
        color: 'red',
        cursor: 'pointer',
    },
};

export default CuisineForm;
