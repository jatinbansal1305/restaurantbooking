import React, { useState } from 'react';
import SearchRestaurants from './SearchRestaurants';
import BookTable from './BookTable';
import RestaurantList from './RestaurantList';
import { useRestaurant } from '../hooks/useRestaurant';

const CustomerTabs = () => {
    const {
        restaurants,
        selectedRestaurant,
        handleSearchRestaurants,
        handleSelectRestaurant,
        handleBookTable
    } = useRestaurant();

    const [numberOfPeople, setNumberOfPeople] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedSlot, setSelectedSlot] = useState('');
    const [searchCriteria, setSearchCriteria] = useState({
        name: '',
        city: '',
        type: '',
        rating: '',
    });

    const handleBooking = async (bookingDetails) => {
        try {
            const result = await handleBookTable(bookingDetails);
            alert(`Booking successful! Your booking details: ${JSON.stringify(result)}`);
            setNumberOfPeople(null);
            setSelectedDate('');
            setSelectedSlot('');
        } catch (error) {
            alert(`Booking failed: ${error.response?.data?.message || 'An error occurred'}`);
        }
    };

    const handleSearchChange = (e) => {
        const { name, value } = e.target;
        setSearchCriteria((prev) => ({ ...prev, [name]: value }));
    };

    const handleSearch = () => {
        handleSearchRestaurants(searchCriteria);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Customer Section</h2>
            <SearchRestaurants 
                criteria={searchCriteria} 
                onChange={handleSearchChange} 
                onSearch={handleSearch} 
            />
            {restaurants.length > 0 && (
                <RestaurantList restaurants={restaurants} onSelectRestaurant={handleSelectRestaurant} selectedRestaurantId={selectedRestaurant?.id} />
            )}
            {selectedRestaurant && (
                <BookTable 
                    restaurant={selectedRestaurant}
                    numberOfPeople={numberOfPeople}
                    setNumberOfPeople={setNumberOfPeople}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    selectedSlot={selectedSlot}
                    setSelectedSlot={setSelectedSlot}
                    handleBooking={handleBooking} 
                />
            )}
        </div>
    );
};

const styles = {
    container: { padding: '20px' },
    header: { color: 'blue' }
};

export default CustomerTabs;
