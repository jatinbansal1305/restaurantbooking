import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangeSelector = ({ startDate, endDate, onDateRangeChange }) => {
    return (
        <div style={styles.dateRangeContainer}>
            <DatePicker
                selected={startDate}
                onChange={(date) => onDateRangeChange(date, endDate)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                dateFormat="yyyy/MM/dd"
                placeholderText="Start Date"
                required
                style={styles.input}
                minDate={new Date()}
            />
            <DatePicker
                selected={endDate}
                onChange={(date) => onDateRangeChange(startDate, date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                dateFormat="yyyy/MM/dd"
                placeholderText="End Date"
                required
                style={styles.input}
                minDate={startDate || new Date()}
            />
        </div>
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
    dateRangeContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
    },
};

export default DateRangeSelector;
