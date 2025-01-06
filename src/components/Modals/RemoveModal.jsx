import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from "@radix-ui/themes";
import Modal from '@mui/material/Modal';
import { TrashIcon } from "@radix-ui/react-icons";
import './RemoveModal.styles.less';
import { doc, deleteDoc, collection } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage"
import { firestore, imageStorage } from '../../Firebase';

/* Modal styling */
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

export default function RemoveModal({ projectName, projectId }) {

    const dbRef = collection(firestore, "Projects")

    /* Handling open and close function of modal */
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDelete = async (e) => {
        /* Deleting document */
        e.preventDefault();
        await deleteDoc(doc(dbRef, projectId));
        console.log("Deleted project document: ", projectId);

        /* Deleting image in cloud storage */
        const deleteRef = ref(imageStorage, `images/${ projectName }`)

        deleteObject(deleteRef).then(() => {
            console.log("Deleted project image")
        })
        .catch((err) => {
            console.error(err)
        })
    }

    return (
        <>
            <Button color="gray" id="rmv-btn" variant="outline" onClick={handleOpen}>
                <TrashIcon />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleDelete}>
                        <p>Are you sure you want to remove <strong>{projectName}</strong>?</p>
                        <div className='inline-flex mt-5'>
                            <Button variant='outline' color='red' id='add-btn' type='submit' onClick={handleDelete}
                            >Delete</Button>
                            <Button variant='outline' color='gray' id='add-btn' onClick={handleClose}
                            >Cancel</Button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </>
    )
}