import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import { Button } from "@radix-ui/themes";
import Modal from '@mui/material/Modal';
import { Pencil1Icon } from "@radix-ui/react-icons"
import './EditModal.styles.less'

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

export default function EditModal({ sendToParentData }) {

  const [isVisible, setIsVisible] = useState(true);

  const password = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const query = formData.get("editPassword");

    if(query === "hello") {
      setIsVisible(false);
      sendToParentData(true)
    }
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {isVisible && (<div><Button color="gray" id="add-btn" variant="outline" onClick={handleOpen}>
        <Pencil1Icon /> Edit
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={password}>
            <input name='editPassword' placeholder='Password' type='password' className='pswrd-input'/>
            <Button variant='outline' color='gray' id='sbmt-btn' type='submit'>Submit</Button>
          </form>
        </Box>
      </Modal> </div>)}
    </div>
  );
}
