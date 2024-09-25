import React from 'react';

const SearchRestaurants = ({ criteria, onChange, onSearch }) => {
    return (
        <div style={styles.container}>
            <h4 style={styles.header}>Search Restaurants</h4>
            <input
                type="text"
                name="name"
                placeholder="Restaurant Name"
                value={criteria.name}
                onChange={onChange}
                style={styles.input}
            />
            <input
                type="text"
                name="city"
                placeholder="City"
                value={criteria.city}
                onChange={onChange}
                style={styles.input}
            />
            <select
                name="type"
                value={criteria.type}
                onChange={onChange}
                style={styles.input}
            >
                <option value="">Type</option>
                <option value="VEG">Veg</option>
                <option value="NON_VEG">Non-Veg</option>
            </select>
            <input
                type="number"
                name="rating"
                placeholder="Minimum Rating"
                value={criteria.rating}
                onChange={onChange}
                style={styles.input}
            />
            <button onClick={onSearch} style={styles.button}>
                Search
            </button>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#f2f2f2',
        borderRadius: '8px',
    },
    header: { color: 'blue' },
    input: { display: 'block', margin: '10px 0', padding: '8px', width: '100%' },
    button: {
        padding: '10px',
        backgroundColor: 'green',
        color: 'white',
        cursor: 'pointer',
    },
};

export default SearchRestaurants;
