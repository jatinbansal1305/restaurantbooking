import React from 'react';
import AddSlots from './AddSlots';
import RegisterRestaurant from './RegisterRestaurant';

const OwnerTab = () => {
    return (
        <div>
            <h2>Restaurant Owner</h2>
            <div style={{display: 'flex'}}>
                <RegisterRestaurant />
                <AddSlots />
            </div>

        </div>
    );
};

export default OwnerTab;
