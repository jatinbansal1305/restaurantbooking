import React, { useState } from 'react';
import { useRestaurant } from '../hooks/useRestaurant'; 
import SlotButton from './SlotButton';
import RestaurantInput from './RestaurantInput';
import DateRangeSelector from './DateRangeSelector'; 

const AddSlots = () => {
    const { handleAddSlots } = useRestaurant();
    const [slots, setSlots] = useState({
        restaurantId: '',
        start : new Date(),
        end : new Date(),
        selectedSlotsPerDate: {}, 
    });

    const handleChange = (e) => {
        setSlots({ ...slots, [e.target.name]: e.target.value });
    };

    const handleDateRangeChange = (start, end) => {
        setSlots({
            ...slots,
            start: start,
            end: end,
            selectedSlotsPerDate: {}, 
        });
    };

    const toggleSlotSelection = (date, index) => {
        const selectedSlots = slots.selectedSlotsPerDate[date] || Array(14).fill(false);
        selectedSlots[index] = !selectedSlots[index];
        setSlots({
            ...slots,
            selectedSlotsPerDate: {
                ...slots.selectedSlotsPerDate,
                [date]: selectedSlots,
            },
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dateRangeArray = generateDateRangeArray(slots.start, slots.end);
        const payload = dateRangeArray.map((date) => {
            const selectedTimes = (slots.selectedSlotsPerDate[date] || [])
                .map((selected, index) => selected ? new Date(date + `T${10 + index}:00:00`) : null) 
                .filter(Boolean);

            return { date, timeSlots: selectedTimes };
        });

        console.log(slots);
        console.log(payload);

        try {
            await handleAddSlots(slots.restaurantId, payload); 
            alert('Slots added successfully!');
        } catch (error) {
            console.error("Error adding slots:", error);
            alert('Failed to add slots. Please try again.');
        }
    };

    const generateDateRangeArray = (startDate, endDate) => {
        const dateArray = [];
        let currentDate = new Date(startDate);

        while (currentDate <= new Date(endDate)) {
            dateArray.push(currentDate.toISOString().split('T')[0]);
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return dateArray;
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <h3 style={styles.heading}>Add Slots</h3>
            <RestaurantInput 
                value={slots.restaurantId} 
                onChange={handleChange} 
            />
            <DateRangeSelector 
                startDate={slots.start}
                endDate={slots.end}
                onDateRangeChange={handleDateRangeChange}
            />
            <div style={styles.slotContainer}>
                {generateDateRangeArray(slots.start, slots.end).map((date) => (
                    <div key={date} style={styles.dateSlotGroup}>
                        {date}
                        <div style={{display : 'flex', flexWrap :'wrap'}}>
                        {Array.from({ length: 14 }, (_, index) => {
                            const time = `${10 + index}:00`;  
                            return (
                                <SlotButton
                                    key={index}
                                    time={time}
                                    isSelected={slots.selectedSlotsPerDate[date]?.[index] || false}
                                    onToggle={() => toggleSlotSelection(date, index)}
                                />
                            );
                        })}
                        </div>
                    </div>
                ))}
            </div>
            <button type="submit" style={styles.submitButton}>Add Slots</button>
        </form>
    );
};

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '25rem',
        margin: '2rem auto',
        padding: '2rem',
        border: '1px solid grey',
        borderRadius: '0.5rem',
        boxShadow: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
    },
    heading: {
        marginBottom: '1.5rem',
        textAlign: 'center',
    },
    slotContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxHeight: '25rem',
        overflow: 'auto',
        marginTop : '0.5rem',
        
    },
    dateSlotGroup: {
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '1px solid #ddd',
        paddingBottom: '1rem',
    },
    submitButton: {
        marginTop: '1rem',
        padding: '0.75rem',
        fontSize: '1rem',
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        borderRadius: '0.25rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s, transform 0.2s',
        outline: 'none',
    },
};

export default AddSlots;
