import './ViewModal.styles.less'
import React from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Button } from "@radix-ui/themes";

/* Modal styling <----- Create a .less file and import */
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


export default function ViewModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
        <div>
            <Button color="gray" variant="outline" onClick={handleOpen}View></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                        <input name='editPassword' placeholder='Password' type='password' className='pswrd-input' />
                        <Button variant='outline' color='gray' className='close-btn' onClick={handleClose}>Close</Button>
                </Box>
            </Modal>
        </div>

    )
}