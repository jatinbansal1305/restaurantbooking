import React, { useState } from 'react';

const AddCuisine = ({ addCuisine }) => {
    const [cuisine, setCuisine] = useState({
        name: '',
        ingredients: '',
        price: 0,
        type: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCuisine({
            ...cuisine,
            [name]: value,
        });
    };

    const handleAddCuisine = (e) => {
        e.preventDefault();
        const newCuisine = { ...cuisine, ingredients: cuisine.ingredients.split(',') };
        addCuisine(newCuisine);
        setCuisine({ name: '', ingredients: '', price: 0, type: '' });
    };

    return (
        <form onSubmit={handleAddCuisine} style={styles.form}>
            <h4>Add Cuisine</h4>
            <input
                type="text"
                name="name"
                placeholder="Cuisine Name"
                onChange={handleInputChange}
                value={cuisine.name}
                required
                style={styles.input}
            />
            <input
                type="text"
                name="ingredients"
                placeholder="Ingredients (comma separated)"
                onChange={handleInputChange}
                value={cuisine.ingredients}
                required
                style={styles.input}
            />
            <input
                type="number"
                name="price"
                placeholder="Price"
                onChange={handleInputChange}
                value={cuisine.price}
                required
                style={styles.input}
            />
            <select name="type" onChange={handleInputChange} required style={styles.input}>
                <option value="">Select Type</option>
                <option value="VEG">Veg</option>
                <option value="NON_VEG">Non-Veg</option>
                <option value="EGG">Egg</option>
            </select>
            <button type="submit" style={styles.button}>Add Cuisine</button>
        </form>
    );
};

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    input: {
        padding: '10px',
        border: '1px solid darkgray',
        borderRadius: '5px',
        width: '100%',
    },
    button: {
        padding: '10px',
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default AddCuisine;
