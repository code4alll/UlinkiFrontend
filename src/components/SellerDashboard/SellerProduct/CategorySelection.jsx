import React, { useState } from 'react';
import { supOptions, subOptions, miniSubOptions, microSubOptions } from '../../Schemas/cate';
import { Modal, Box, Button, Typography } from '@mui/material';

export default function CategorySelectorModal({ modal, setCategory,setParent,closeModal }) {
  const [selectedSupOption, setSelectedSupOption] = useState('');
  const [selectedSubOption, setSelectedSubOption] = useState('');
  const [selectedMiniSubOption, setSelectedMiniSubOption] = useState('');
  const [selectedMicroOptions, setSelectedMicroOptions] = useState([]);
  const [open, setOpen] = useState(true&&modal);

  const handleClose = () => {
    closeModal();
    setSelectedSupOption('');
    setSelectedSubOption('');
    setSelectedMiniSubOption('');
    setSelectedMicroOptions([]);
  };

  const handleSubmit=()=>{
    setCategory(selectedMicroOptions);
    const parentCategory = `${selectedSupOption ? selectedSupOption : ''}${selectedSubOption ? `/${selectedSubOption}` : ''}${selectedMiniSubOption ? `/${selectedMiniSubOption}` : ''}/`.trim();
    setParent(parentCategory);
    handleClose();

  }
  const handleOpen = () => setOpen(true);


  const handleSupOptionChange = (option) => {
    setSelectedSupOption(option);
    setSelectedSubOption('');
    setSelectedMiniSubOption('');
    setSelectedMicroOptions([]);
  };

  const handleSubOptionChange = (option) => {
    setSelectedSubOption(option);
    setSelectedMiniSubOption('');
    setSelectedMicroOptions([]);
  };

  const handleMiniSubOptionChange = (option) => {
    setSelectedMiniSubOption(option);
    setSelectedMicroOptions([]);
  };

  const handleMicroSubOptionChange = (option) => {
    setSelectedMicroOptions((prev) =>
      prev.includes(option)
        ? prev.filter((micro) => micro !== option)
        : [...prev, option]
    );
  };

  return (
    <Modal open={modal} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxHeight: '80%',
          overflow: 'hidden',
          bgcolor: 'background.paper',
          boxShadow: 24,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" sx={{ textAlign: 'center', paddingTop: '20px' }}>
          Select a Category
        </Typography>

        {/* Category Selection Area (Scrollable) */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            padding: '20px',
            borderBottom: '1px solid #ccc',
            overflowY: 'auto',
            maxHeight: 'calc(100vh - 250px)', // Keeps the category selection scrollable
          }}
        >
          {/* Sup Options */}
          <div style={{ width: '20%', textAlign: 'center' }}>
            <Typography variant="h6">Sup Options</Typography>
            {supOptions.map((option) => (
              <div
                key={option}
                style={{
                  padding: '10px',
                  margin: '5px 0',
                  border: '1px solid #ccc',
                  cursor: 'pointer',
                  backgroundColor: option === selectedSupOption ? '#cce5ff' : '#f9f9f9',
                  borderRadius: '5px',
                  transition: 'background-color 0.3s',
                }}
                onClick={() => handleSupOptionChange(option)}
              >
                {option}
              </div>
            ))}
          </div>

          {/* Sub Options */}
          <div style={{ width: '20%', textAlign: 'center' }}>
            <Typography variant="h6">Sub Options</Typography>
            {selectedSupOption &&
              subOptions[selectedSupOption]?.map((option) => (
                <div
                  key={option}
                  style={{
                    padding: '10px',
                    margin: '5px 0',
                    border: '1px solid #ccc',
                    cursor: 'pointer',
                    backgroundColor: option === selectedSubOption ? '#cce5ff' : '#f9f9f9',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s',
                  }}
                  onClick={() => handleSubOptionChange(option)}
                >
                  {option}
                </div>
              ))}
          </div>

          {/* Mini Options */}
          <div style={{ width: '20%', textAlign: 'center' }}>
            <Typography variant="h6">Mini Options</Typography>
            {selectedSubOption &&
              miniSubOptions[selectedSubOption]?.map((option) => (
                <div
                  key={option}
                  style={{
                    padding: '10px',
                    margin: '5px 0',
                    border: '1px solid #ccc',
                    cursor: 'pointer',
                    backgroundColor: option === selectedMiniSubOption ? '#cce5ff' : '#f9f9f9',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s',
                  }}
                  onClick={() => handleMiniSubOptionChange(option)}
                >
                  {option}
                </div>
              ))}
          </div>

          {/* Micro Options */}
          <div style={{ width: '20%', textAlign: 'center' }}>
            <Typography variant="h6">Micro Options</Typography>
            {selectedMiniSubOption &&
              microSubOptions[selectedMiniSubOption]?.map((option) => (
                <div
                  key={option}
                  style={{
                    padding: '10px',
                    margin: '5px 0',
                    border: '1px solid #ccc',
                    cursor: 'pointer',
                    backgroundColor: selectedMicroOptions.includes(option) ? '#cce5ff' : '#f9f9f9',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s',
                  }}
                  onClick={() => handleMicroSubOptionChange(option)}
                >
                  {option}
                </div>
              ))}
          </div>
        </div>

        {/* Footer Section (Fixed) */}
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: '#fff',
            padding: '15px',
            boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Preview Section */}
          <div style={{ marginBottom: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Selected Category:</Typography>
            <p>
              {selectedSupOption
                ? `${selectedSupOption} > ${selectedSubOption} > ${selectedMiniSubOption} > {${selectedMicroOptions.join(
                    ' | '
                  )}}`
                : 'No category selected'}
            </p>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Save
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
               
                handleClose();
              }}
              style={{ marginLeft: '10px' }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
}
