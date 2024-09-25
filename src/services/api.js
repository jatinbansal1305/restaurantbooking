import axios from 'axios';

const BASE_URL = 'https://16.171.170.157:80/api';

const api = axios.create({
    baseURL: BASE_URL,
});

export const registerRestaurant = async (restaurant) => {
    const response = await api.post('/restaurants/register', restaurant);
    return response.data;
};

export const searchRestaurants = async (criteria) => {
    const query = new URLSearchParams(criteria).toString();
    const response = await api.get(`/restaurants/search?${query}`);
    return response.data;
};

export const fetchAvailableSlots = async (restaurantId, date) => {
    const response = await api.get(`/restaurants/${restaurantId}/slots?date=${date}`);
    return response.data;
};

export const bookTable = async (bookingDetails) => {
    const response = await api.post(`/restaurants/${bookingDetails.restaurantId}/book`, bookingDetails);
    return response.data;
};

export const addSlots = async (restaurantId, payload) => { 
    const response = await api.post(`/restaurants/${restaurantId}/slots`, payload);
    return response.data;
};
