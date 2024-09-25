import { useState } from 'react';
import { searchRestaurants, bookTable, fetchAvailableSlots, addSlots } from '../services/api';

export const useRestaurant = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [availableSlots, setAvailableSlots] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearchRestaurants = async (criteria) => {
        setLoading(true);
        setError(null);
        try {
            const data = await searchRestaurants(criteria);
            setRestaurants(data);
        } catch (err) {
            setError(err.message || 'Failed to search restaurants');
        } finally {
            setLoading(false);
        }
    };

    const handleSelectRestaurant = (restaurant) => {
        setSelectedRestaurant(restaurant);
    };

    const handleFetchAvailableSlots = async (restaurantId, date) => {
        setLoading(true);
        setError(null);
        try {
            const slots = await fetchAvailableSlots(restaurantId, date);
            setAvailableSlots(slots);
        } catch (err) {
            setError(err.message || 'Failed to fetch available slots');
        } finally {
            setLoading(false);
        }
    };

    const handleBookTable = async (bookingDetails) => {
        setLoading(true);
        setError(null); 
        try {
            const result = await bookTable(bookingDetails); 
            return result; 
        } catch (err) {
            console.log("error: ", err);
            setError(err.message || 'Failed to book the table');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const handleAddSlots = async (restaurantId, payload) => { 
        setLoading(true);
        setError(null);
        try {
            const result = await addSlots(restaurantId, payload);
            return result;
        } catch (err) {
            setError(err.message || 'Failed to add slots');
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return {
        restaurants,
        selectedRestaurant,
        availableSlots,
        loading,
        error,
        handleSearchRestaurants,
        handleSelectRestaurant,
        handleFetchAvailableSlots,
        handleBookTable,
        handleAddSlots, 
    };
};
