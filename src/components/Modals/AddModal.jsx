import * as React from 'react';
import { useState, useRef } from 'react'
import Box from '@mui/material/Box';
import { Button } from "@radix-ui/themes";
import Modal from '@mui/material/Modal';
import { PlusIcon } from "@radix-ui/react-icons"
import './AddModal.styles.less'
import { firestore } from "../../Firebase"
import { addDoc, collection } from "@firebase/firestore"

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

export default function AddModal({ sendToParentData }) {
  const [isVisible, setIsVisible] = useState(true);
  const [file, setFile] = useState()

  /* Handling input file in project addition */
  const handleInputFile = (e) => {
    console.log(e.target.files)
    setFile(URL.createObjectURL(e.target.files[0]))
  }

  /* Handling open and close function of modal */
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  /* Handling saving project data */
  const handleSave = async (e) => {
    e.preventDefault();

    let projectData = {
      name: nameRef.current.value,
      photo: photoRef.current.value,
      description: desRef.current.value,
      link: linkRef.current.value
    }

    try{
      addDoc(dbRef, projectData)
    }
    catch(err){
      console.error(err);
    }
  }

  /* Database Reference */
  const dbRef = collection(firestore, 'Projects');

  /* Reference for each input value */
  const nameRef = useRef();
  const photoRef = useRef()
  const desRef = useRef();
  const linkRef = useRef();

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
            <form onSubmit={ handleSave }> 
              <div className='input-container'>
                <label className='add-modal-label'>Project Name</label>
                <input name='project-name' placeholder='Project Name' type='text' className='pswrd-input' ref={nameRef}/>
              </div>
              <div className='input-container'>
                <label className='add-modal-label'>Photo</label>
                <input name='project-password' type="file" onChange={ handleInputFile } ref={photoRef}/>
              </div>
              <div className='input-container'>
                <label className='add-modal-label'>Project Description</label>
                <textarea name="prj-area" id="prj-area" rows="15" cols="32" ref={desRef}></textarea>
              </div>
              <div className="input-container">
                <label className="add-modal-label">Project Link</label>
                <input name="project-link" type="text" className='pswrd-input' ref={linkRef}/>
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
