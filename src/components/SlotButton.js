import React from 'react';

const SlotButton = ({ time, isSelected, onToggle }) => {
    return (
        <button 
            type="button" 
            onClick={onToggle} 
            style={{
                ...styles.button,
                backgroundColor: isSelected ? 'lightblue' : 'white',
                color: isSelected?'black' : 'black',
            }}
        >
            {time}
        </button>
    );
};

const styles = {
    button: {
        padding: '0.5rem',
        margin: '0.5rem',
        border: 'none',
        borderRadius: '0.25rem',
        border : '1px solid lightblue',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
};

export default SlotButton;
