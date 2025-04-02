import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedFromModal, setSelectedFromModal] = useState([]);
    const [currentItem, setCurrentItem] = useState(null); // drink clicked on
    const [totalCost, setTotalCost] = useState(0);
    
    const addItemsToList = (title, selectedFromModal, count, cost) => {
        const newItem = { id: uuidv4(), title, selectedFromModal, count, cost };
        setSelectedItems((prevItems) => [...prevItems, newItem]);
    };

    const addCakeToList = (title, count, cost) => {
        const newItem = { id: uuidv4(), title, count, cost };
        setSelectedItems((prevItems) => [...prevItems, newItem]);
    };

    const handleOpen = (item) => { // open modal for drink upon user click
        setOpen(true); // open modal
        setSelectedFromModal([]);
        setCurrentItem(item);
    };
    
    const calculateOrderTotal = () => {
        const cost = selectedItems.reduce((acc, item) => {
            let itemTotal = item.cost;
            if (item.selectedFromModal) {
                itemTotal += item.selectedFromModal.reduce((sum, selection) => sum + selection.cost, 0);
            }
            if (item.count > 1) {
                itemTotal *= item.count;
            }
            return acc + itemTotal;
        }, 0);
        setTotalCost(cost);
    };

    const clearItems = () => setSelectedItems([]);

    return (
        <OrderContext.Provider value={{ totalCost, selectedItems, open, currentItem, selectedFromModal, setSelectedItems, setSelectedFromModal, setOpen, addItemsToList, addCakeToList, handleOpen, clearItems, setTotalCost, calculateOrderTotal }}>
            {children}
        </OrderContext.Provider>
    );
};