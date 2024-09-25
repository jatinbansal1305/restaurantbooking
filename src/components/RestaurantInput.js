import React from 'react';

const RestaurantInput = ({ value, onChange }) => {
    return (
        <input
            type="text"
            name="restaurantId"
            placeholder="Restaurant ID"
            value={value}
            onChange={onChange}
            required
            style={styles.input}
        />
    );
};

const styles = {
    input: {
        margin: '1rem 0',
        padding: '0.75rem',
        fontSize: '1rem',
        border: '1px solid blue',
        borderRadius: '0.25rem',
        boxSizing: 'border-box',
        width: '100%',
    },
};

export default RestaurantInput;
