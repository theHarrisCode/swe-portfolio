import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import { Button } from "@radix-ui/themes";
import Modal from '@mui/material/Modal';
import { PlusIcon } from "@radix-ui/react-icons"
import './AddModal.styles.less'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddModal({ sendToParentData }) {

  const [isVisible, setIsVisible] = useState(true);


  /* Handling input file in project addition */
  const [file, setFile] = useState()
  const handleInputFile = (e) => {
    console.log(e.target.files)
    setFile(URL.createObjectURL(e.target.files[0]))
  }

  /* Handling open and close function of modal */
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {isVisible && (<div>
        <Button color="gray" id="add-btn" variant="outline" onClick={ handleOpen }>
          <PlusIcon /> Add
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form>
              <div className='input-container'>
                <label className='add-modal-label'>Project Name</label>
                <input name='editPassword' placeholder='Project Name' type='text' className='pswrd-input' />
              </div>
              <div className='input-container'>
                <label className='add-modal-label'>Photo</label>
                <input type="file" onChange={ handleInputFile }/>
              </div>
              <div className='input-container'>
                <label className='add-modal-label'>Project Description</label>
                <textarea name="prj-area" id="prj-area" rows="15" cols="32"></textarea>
              </div>
              <Button variant='outline' color='gray' id='sbmt-btn' type='submit'>Submit</Button>
            </form>
          </Box>
        </Modal>
      </div>
      )}
    </div>
  );
}
