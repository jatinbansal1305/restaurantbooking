import { useState } from 'react';
import './App.css';
import OwnerTab from './components/OwnerTab';
import CustomerTabs from './components/CustomerTabs';

function App() {
    const [tab, setTab] = useState('customer');

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Restaurant Booking System</h1>
            <div style={styles.tabContainer}>
                <button 
                    onClick={() => setTab('customer')} 
                    style={{ ...styles.tabButton, ...(tab === 'customer' ? styles.activeTab : {}) }}>
                    Customer
                </button>
                <button 
                    onClick={() => setTab('owner')} 
                    style={{ ...styles.tabButton, ...(tab === 'owner' ? styles.activeTab : {}) }}>
                    Restaurant Owner
                </button>
            </div>
            {tab === 'customer' && <CustomerTabs />}
            {tab === 'owner' && <OwnerTab />}
        </div>
    );
}

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        margin: '20px auto',
    },
    header: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
    },
    tabContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '20px',
    },
    tabButton: {
        padding: '10px 20px',
        border: 'none',
        backgroundColor: '#007bff',
        color: 'white',
        cursor: 'pointer',
        borderRadius: '5px',
        transition: 'background-color 0.3s, transform 0.2s',
        fontWeight: 'bold',
    },
    activeTab: {
        backgroundColor: '#0056b3',
        transform: 'scale(1.05)',
    },
};

export default App;
