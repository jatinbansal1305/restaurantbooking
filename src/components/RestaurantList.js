import React from "react";

const RestaurantList = ({ restaurants, onSelectRestaurant, selectedRestaurantId }) => {
  const handleSelectRestaurant = (restaurant) => {
    onSelectRestaurant(restaurant);
  };

  return (
    <div>
      <h4 style={styles.header}>Available Restaurants</h4>
      <ul style={styles.list}>
        {restaurants.map((restaurant) => (
          <li
            key={restaurant.id}
            onClick={() => handleSelectRestaurant(restaurant)}
            style={{
              ...styles.listItem,
              backgroundColor: selectedRestaurantId === restaurant.id ? '#e0ffe0' : '#f9f9f9',
              borderColor: selectedRestaurantId === restaurant.id ? 'green' : 'lightgray',
            }}
          >
            {restaurant.name} - {restaurant.address.city} - Rating: {restaurant.rating}/5
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  header: { color: "green", fontSize: "18px" },
  list: { listStyleType: "none", padding: 0 },
  listItem: {
    cursor: "pointer",
    margin: "10px 0",
    padding: "10px",
    border: "1px solid lightgray",
    borderRadius: "4px",
    transition: "background-color 0.3s, border-color 0.3s",
  },
};

export default RestaurantList;
