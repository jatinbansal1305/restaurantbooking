# Restaurant Booking System

## Overview
The Restaurant Booking System is a web application that enables users to search for restaurants, make reservations, and allows restaurant owners to register their establishments and manage bookings. The application is divided into two main sections: **Customer** and **Restaurant Owner**.

## Features

### Customer Section
- **Search Restaurants:** 
  - Users can search for restaurants based on various criteria:
    - Restaurant name
    - City
    - Cuisine type (Veg/Non-Veg)
    - Minimum rating
  - A default search will return all available restaurants.

- **Book a Table:**
  - Upon selecting a restaurant, users can input:
    - Number of people
    - Date for the reservation
  - Available slots will be displayed for selection.
  - The system handles concurrent bookings, and if a slot is taken, an exception is thrown.

### Restaurant Owner Section
- **Register Restaurant:**
  - Owners can register their restaurant with the following details:
    - **Name:** `string`
    - **Address:** 
      - Street: `string`
      - City: `string`
      - State: `string`
      - Pin Code: `string`
    - **Type:** `string` (e.g., Veg, Non-Veg)
    - **Cost for Two:** `string`
    - **Cuisines:** `array of strings`
    - **Tables:** `array of objects`
  
- **Manage Slots:**
  - After registering a restaurant, owners can add time slots for table bookings.
  - Currently, there is no logic to check for duplicate restaurant names, but this will be implemented in future updates.
  - Existing slots are not shown; the current implementation overrides any previous slots.

## Future Enhancements
- Implement logic to prevent the creation of restaurants with the same name.
- Enhance the slots management system to display existing slots before adding new ones.
- General checks and validations for restaurant registration and booking processes.

