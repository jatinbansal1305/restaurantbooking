import React, { useEffect, useState } from 'react';
import { useRestaurant } from '../hooks/useRestaurant'; 

const BookTable = ({ restaurant }) => {
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedSlot, setSelectedSlot] = useState('');
    
    const { availableSlots, handleFetchAvailableSlots, handleBookTable } = useRestaurant();

    useEffect(() => {
        if (selectedDate) {
            handleFetchAvailableSlots(restaurant.id, selectedDate);
        }
    }, [selectedDate, restaurant.id, handleFetchAvailableSlots]);

    const handleBooking = async () => {
        const bookingDetails = {
            restaurantId: restaurant.id,
            numberOfPeople,
            timeSlot: selectedSlot,
            date: selectedDate,
        };

        try {
            const result = await handleBookTable(bookingDetails); 
            alert(`Booking successful! Your booking details: ${JSON.stringify(result)}`);
        } catch (error) {
            alert(`Booking failed: ${error.response?.data?.message || 'An error occurred'}`);
        }
    };

    return (
        <div>
            <h4>Book a Table at {restaurant.name}</h4>
            <input
                type="number"
                value={numberOfPeople}
                onChange={(e) => setNumberOfPeople(e.target.value)}
                min="1"
                placeholder="Number of People"
            />
            <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
            />
            <select value={selectedSlot} onChange={(e) => setSelectedSlot(e.target.value)}>
                <option value="">Select a Slot</option>
                {availableSlots.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                ))}
            </select>
            <button onClick={handleBooking} disabled={!selectedSlot || !selectedDate}>Confirm Booking</button>
        </div>
    );
};

export default BookTable;
