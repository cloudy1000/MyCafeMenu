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

export default function CakeModal({ modalSelections }) {
  const { selectedItems, setSelectedItems, addCakeToList, open, setOpen, currentItem, selectedFromModal, setSelectedFromModal } = useContext(OrderContext);
  
  const wholeChecked = selectedFromModal.includes("Whole Cake");
  const sliceChecked = selectedFromModal.includes("Slice Cake");
  let whole = null;
  let slice = null;
  
  const handleClose = () => setOpen(false);

  const handleAddToList = (e) => {
    e.preventDefault(); // prevent form submission
    
    if (wholeChecked)
        whole = selectedItems.find((whole) => whole.title === currentItem.title);
    if (sliceChecked)
        slice = selectedItems.find((slice) => slice.title === currentItem.title + " (Slice)");
    
    if (whole) {
        whole.count++;
        updateItem(whole);
    }
    else if (wholeChecked) {
        addCakeToList(currentItem.title, 1, currentItem.cost.whole);
    }
    if (slice) {
        slice.count++;
        updateItem(slice);
    }
    else if (sliceChecked) {
        addCakeToList(currentItem.title + " (Slice)", 1, currentItem.cost.slice);
    }
    setOpen(false);
  };
  
  const updateItem = (updatedItem) => {
    setSelectedItems((prevItems) =>
        prevItems.map((item) => item.title === updatedItem.title ? { ...item, ...updatedItem } : item)
    );
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    
    setSelectedFromModal((prevSelectedFromModal) => {
      if (checked)
        return [...prevSelectedFromModal, value].sort(); // add to list if checked
      else
        return prevSelectedFromModal.filter((choice) => choice !== value).sort(); // remove from list if unchecked
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
        <h2>{currentItem.title}</h2>
        <form onSubmit={handleAddToList}>
          <div className="container">
            {modalSelections.map((choice) => (
              <div key={choice}>
                <label>
                  <input
                    type="checkbox"
                    value={choice}
                    checked={selectedFromModal.includes(choice)}
                    onChange={handleCheckboxChange}
                  />
                  {choice}{choice === "Whole Cake" && currentItem ? ` $${currentItem.cost.whole?.toFixed(2)}` : currentItem ? ` $${currentItem.cost.slice?.toFixed(2)}` : null}
                </label>
              </div>
            ))}
          </div>
          {/* only add if user has selected whole and/or slice */}
          {selectedFromModal.length === 0 ? null : <Button type="submit">Add</Button>}
          <Button onClick={handleClose}>Cancel</Button>
        </form>
      </Box>
    </Modal>
  );
}
