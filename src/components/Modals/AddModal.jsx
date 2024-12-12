import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import { Button } from "@radix-ui/themes";
import Modal from '@mui/material/Modal';
import { PlusIcon } from "@radix-ui/react-icons";
import './AddModal.styles.less';
import { firestore } from "../../Firebase";
import { addDoc, collection } from "@firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage"
import { Cone } from 'lucide-react';


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

/* Firebase Storage for image */
const imageStorage = getStorage();

export default function AddModal({ sendToParentData, colLength, changeSubmitBool }) {
  const [photo, setPhoto] = useState([]);
  const [file, setFile] = useState('');

  const storageRef = ref(imageStorage, `images/${file.name}`);

  /* Handling input file in project addition */
  const handleInputPhoto = async (e) => {
    setFile(e.target.files[0]);
  }
  console.log("Photos: ", photo)

  /* Handling open and close function of modal */
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  /* Handling saving project data to database */
  const handleSave = async (e) => {
    e.preventDefault();

    /* Uploads picture to firebase storage */
    uploadBytes(storageRef, file)
      .then((snapshot) => {
        console.log("Image Uploaded", snapshot.name);
      },
        (err) => {
          console.log("Error: ", err)
        }
      );

    /* Downloading pictures from storage and updating photo state variable */
    listAll(ref(imageStorage, 'images/'))
      .then(imgs => {
        imgs.items.forEach(img => {
          getDownloadURL(img).then(url => {
            setPhoto([...photo, url]);
            console.log("Collection Length: ", colLength)
            console.log("Photos at first element: ", photo)    
            console.log("Photos at colLength element: ", photo[colLength])
          })
        })
      })

    /* Checking collection length, max is 5 */
    console.log("Collection Length: ", colLength)
    console.log("Photos at first element: ", photo[0])    
    console.log("Photos at colLength element: ", photo[colLength])
    if (colLength <= 5) {
      let projectData = {
        name: nameRef.current.value,
        photo: photo,
        description: desRef.current.value,
        link: linkRef.current.value
      };

      try {
        addDoc(dbRef, projectData);
      }
      catch (err) {
        console.error(err);
      }
      changeSubmitBool = true;
    }
    else {
      alert("You can only add 5 projects.");
    }
    setOpen(false)
  };

  /* Database Reference */
  const dbRef = collection(firestore, 'Projects');

  /* Reference for each input value */
  const nameRef = useRef();
  const photoRef = useRef();
  const desRef = useRef();
  const linkRef = useRef();

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
              <input name='project-picture' type="file" onChange={handleInputPhoto} ref={photoRef} />
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
