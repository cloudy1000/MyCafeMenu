import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { OrderContext } from './OrderContext';
import React, { useContext } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: 250, sm: 350, md: 400 },
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ItemModal({ modalSelections }) {
  const { selectedItems, setSelectedItems, addItemsToList, open, setOpen, currentItem, selectedFromModal, setSelectedFromModal } = useContext(OrderContext);
 
  const handleClose = () => setOpen(false);

  const handleAddToList = (e) => {
    e.preventDefault(); // prevent form submission
    
    let item = selectedItems.find((item) => item.title === currentItem.title && JSON.stringify(item.selectedFromModal) === JSON.stringify(selectedFromModal));
    if (item) {
      item.count++;
      updateItem(item);
    }
    else {
      addItemsToList(currentItem.title, selectedFromModal, 1, currentItem.cost);
    }
    setOpen(false);
  };
  
  const updateItem = (updatedItem) => {
    setSelectedItems((prevItems) =>
      prevItems.map((item) => item.title === updatedItem.title && JSON.stringify(item.selectedFromModal) === JSON.stringify(selectedFromModal) ? { ...item, ...updatedItem } : item)
    );
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const parsedSelection = JSON.parse(value); // turn back to obj
    
    setSelectedFromModal((prevSelectedFromModal) => {
      if (checked) {
        return [...prevSelectedFromModal, parsedSelection].sort((a, b) => a.title.localeCompare(b.title));
      } else {
        return prevSelectedFromModal
          .filter((selection) => selection.title !== parsedSelection.title)
          .sort((a, b) => a.title.localeCompare(b.title));
      }
    });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h2>Toppings for {currentItem.title}</h2>
        <form onSubmit={handleAddToList}>
          <div className="container">
            {modalSelections.map((selection) => (
              <div key={selection}>
                <label>
                  <input
                    type="checkbox"
                    value={JSON.stringify(selection)}
                    checked={selectedFromModal.some(item => item.title === selection.title)}
                    onChange={handleCheckboxChange}
                  />
                  {selection.title}{` $${selection.cost.toFixed(2)}`}
                </label>
              </div>
            ))}
          </div>
          <Button type="submit">Add</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </form>
      </Box>
    </Modal>
  );
}
