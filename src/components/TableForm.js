import React, { useState } from 'react';

const TableForm = ({ addTable, removeTable, tables }) => {
    const [table, setTable] = useState({ tableId: '', capacity: '' });

    const handleTableChange = (e) => {
        setTable({ ...table, [e.target.name]: e.target.value });
    };

    const handleAddTable = () => {
        addTable(table);
        setTable({ tableId: '', capacity: '' });
    };

    return (
        <div>
            <h4>Add Tables</h4>
            <input
                type="text"
                name="tableId"
                placeholder="Table Number"
                value={table.tableId}
                onChange={handleTableChange}
                style={styles.input}
            />
            <input
                type="number"
                name="capacity"
                placeholder="Table Capacity"
                value={table.capacity}
                onChange={handleTableChange}
                style={styles.input}
            />
            <button type="button" onClick={handleAddTable} style={styles.button}>Add Table</button>

            <ul>
                {tables.map((t) => (
                    <li key={t.id}>
                        Table Number: {t.tableId} - Capacity: {t.capacity}
                        <button type="button" onClick={() => removeTable(t.id)} style={styles.removeButton}>✖</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const styles = {
    input: {
        marginBottom: '10px',
        padding: '8px',
        border: '1px solid lightgray',
        borderRadius: '4px',
    },
    button: {
        marginBottom: '10px',
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        color: 'white',
        backgroundColor: 'red',
        cursor: 'pointer',
    },
    removeButton: {
        marginLeft: '10px',
        backgroundColor: 'transparent',
        border: 'none',
        color: 'red',
        cursor: 'pointer',
    },
};

export default TableForm;
