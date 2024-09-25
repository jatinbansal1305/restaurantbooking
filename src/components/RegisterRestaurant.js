
import React, { useState } from 'react';
import CuisineForm from './CuisineForm';
import TableForm from './TableForm';
import { registerRestaurant } from '../services/api'; 

const RegisterRestaurant = () => {
    const [restaurant, setRestaurant] = useState({
        name: '',
        address: {
            street: '',
            city: '',
            state: '',
            pinCode: ''
        },
        type: '',
        costForTwo: '',
        cuisines: [],
        tables: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (['street', 'city', 'state', 'pinCode'].includes(name)) {
            setRestaurant({
                ...restaurant,
                address: {
                    ...restaurant.address,
                    [name]: value
                }
            });
        } else {
            setRestaurant({ ...restaurant, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(restaurant);
        await registerRestaurant(restaurant); 
        alert('Restaurant registered successfully!');
    };

    const addCuisine = (cuisine) => {
        setRestaurant({
            ...restaurant,
            cuisines: [...restaurant.cuisines, { ...cuisine, id: Date.now().toString(), rating: Math.floor(Math.random() * 5) + 1 }]
        });
    };

    const addTable = (table) => {
        setRestaurant({
            ...restaurant,
            tables: [...restaurant.tables, { ...table, id: Date.now().toString() }]
        });
    };

    const removeCuisine = (id) => {
        setRestaurant({
            ...restaurant,
            cuisines: restaurant.cuisines.filter(c => c.id !== id)
        });
    };

    const removeTable = (id) => {
        setRestaurant({
            ...restaurant,
            tables: restaurant.tables.filter(t => t.id !== id)
        });
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <h3>Register Restaurant</h3>
            <input
                type="text"
                name="name"
                placeholder="Restaurant Name"
                value={restaurant.name}
                onChange={handleChange}
                style={styles.input}
                required
            />
            
            <input
                type="text"
                name="street"
                placeholder="Street"
                value={restaurant.address.street}
                onChange={handleChange}
                style={styles.input}
                required
            />
            <input
                type="text"
                name="city"
                placeholder="City"
                value={restaurant.address.city}
                onChange={handleChange}
                style={styles.input}
                required
            />
            <input
                type="text"
                name="state"
                placeholder="State"
                value={restaurant.address.state}
                onChange={handleChange}
                style={styles.input}
                required
            />
            <input
                type="text"
                name="pinCode"
                placeholder="Pin Code"
                value={restaurant.address.pinCode}
                onChange={handleChange}
                style={styles.input}
                required
            />

            <select name="type" value={restaurant.type} onChange={handleChange} style={styles.select} required>
                <option value="">Select Type</option>
                <option value="VEG">Veg</option>
                <option value="NON_VEG">Non-Veg</option>
            </select>
            <input
                type="number"
                name="costForTwo"
                placeholder="Cost for Two"
                value={restaurant.costForTwo}
                onChange={handleChange}
                style={styles.input}
                required
            />

            <CuisineForm addCuisine={addCuisine} removeCuisine={removeCuisine} cuisines={restaurant.cuisines} />

            <TableForm addTable={addTable} removeTable={removeTable} tables={restaurant.tables} />

            <button type="submit" style={styles.submitButton}>Register Restaurant</button>
        </form>
    );
};

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid lightgray',
        borderRadius: '5px',
        backgroundColor: 'white',
    },
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
    submitButton: {
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        color: 'white',
        backgroundColor: 'red',
        cursor: 'pointer',
    },
};

export default RegisterRestaurant;
