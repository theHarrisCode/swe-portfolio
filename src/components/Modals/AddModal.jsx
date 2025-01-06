import * as React from 'react';
import { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import { Button } from "@radix-ui/themes";
import Modal from '@mui/material/Modal';
import { PlusIcon } from "@radix-ui/react-icons";
import './AddModal.styles.less';
import { firestore, imageStorage } from "../../Firebase";
import { addDoc, collection, updateDoc, doc } from "@firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"


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

export default function AddModal({ sendToParentData, colLength }) {
  const [file, setFile] = useState('');
 
  /* Database Reference */
  const dbRef = collection(firestore, 'Projects');

  /* Reference for each input value */
  const nameRef = useRef();
  const desRef = useRef();
  const linkRef = useRef();

  /* Handling input file in project addition */
  const handleInputPhoto = async (e) => {
    setFile(e.target.files[0]);
  }

  /* Handling open and close function of modal */
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /* Handling saving project data to database */
  const handleSave = async (e) => {
    e.preventDefault();

    let projectData = {
      name: "",
      photo: "",
      description: "",
      link: ""
    }
    /* Creating reference for cloud storage */
    const storageRef = ref(imageStorage, `images/${ nameRef.current.value }`);
      
    try { 
      /* Uploads picture to cloud storage */
      const snapshot = await uploadBytes(storageRef, file)
      if(!snapshot){
        throw new Error("Error with the snapshot")
      }

      /* Downloading pictures from storage and updating photo state variable */
      const photoURL = await getDownloadURL(ref(storageRef))
      if(!photoURL){
        throw new Error("Error with the photo URL")
      }

      /* Checking collection length, max is 6 */
      if (colLength <= 5) {
        projectData.name = nameRef.current.value;
        projectData.photo = photoURL;
        projectData.description = desRef.current.value;
        projectData.link = linkRef.current.value;

        /* Adding document to collection */
        const docRef = await addDoc(dbRef, projectData);

        /* Adding ID to project */
        await updateDoc(doc(dbRef, docRef.id), {id: docRef.id})
      }
      else {
        alert("You can only add 6 projects.");
      }
    } catch (err) {
      console.error(err);
    }
    setOpen(false)
  };

  return (
    <div>
      <Button color="gray" id="add-btn" variant="outline" onClick={handleOpen}>
        <PlusIcon /> Add
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSave}>
            <div className='input-container'>
              <label className='add-modal-label'>Project Name</label>
              <input name='project-name' placeholder='Project Name' type='text' className='pswrd-input' ref={nameRef} />
            </div>
            <div className='input-container'>
              <label className='add-modal-label'>Photo</label>
              <input name='project-picture' type="file" onChange={handleInputPhoto} />
            </div>
            <div className='input-container'>
              <label className='add-modal-label'>Project Description</label>
              <textarea name="prj-area" id="prj-area" rows="15" cols="32" ref={desRef}></textarea>
            </div>
            <div className="input-container">
              <label className="add-modal-label">Project Link</label>
              <input name="project-link" type="text" className='pswrd-input' ref={linkRef} />
            </div>
            <Button variant='outline' color='gray' id='sbmt-btn' type='submit'
            >Submit</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
