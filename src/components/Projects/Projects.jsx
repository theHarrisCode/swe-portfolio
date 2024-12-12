import "./Projects.styles.less"
import { useState, useEffect } from "react"
import { Button } from "@radix-ui/themes";
import { TrashIcon } from "@radix-ui/react-icons"
import EditModal from "../Modals/EditModal.jsx"
import AddModal from "../Modals/AddModal.jsx"
import { collection, onSnapshot } from "firebase/firestore"
import { firestore } from "../../Firebase.js";

function Projects({ headerStyles }) {

    /* State Variables */
    const [isVisible, setIsVisible] = useState(false);
    const [colSize, setColSize] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [data, setData] = useState([])
    const [singleRemoveVisibility, setSingleRemoveVisibility] = useState(false);

    const handleProjectVisibility = (data) => {
        setIsVisible(data);
    }

    const handleSingleRemoveVisibility = () => {
        setSingleRemoveVisibility(true);
    }

    const handleCancel = () => {}
    
    /* Fetching Project snapshot from firestore database */
    useEffect(() => {
        const fetchData = async () => {
            const colRef = collection(firestore, "Projects");
            onSnapshot(colRef, (snapshot) => {
                setColSize(snapshot.size)
                const data = snapshot.docs.map((doc) => doc.data())
                setData(data)
            } )
        }

        fetchData();
    }, [])

    return (
        <>
            <div className="min-w-full">
                <div className={headerStyles.divClass}>
                    <h1 className={headerStyles.h1Class}>Projects</h1>
                </div>
                <div className="prj-btn-container">
                        <EditModal sendToParentData = { handleProjectVisibility }/>
                    { isVisible && (<div className="flex">
                        <AddModal colLength={colSize} changeSubmitBool={setIsSubmitted}/>
                        <Button color="red" id="rmv-btn" variant="outline" onClick={ handleSingleRemoveVisibility }>
                            <TrashIcon /> Remove
                        </Button>
                        { singleRemoveVisibility && (
                            <Button color="red" variant="outline" onClick={ handleCancel }> Cancel </Button>
                        )}
                    </div>
                )}
                </div>
                <div className="flex flex-1 p-16 justify-evenly prj-outer-container">
                { data.map( (prj) => {
                    return (
                        <div id="first-prj" className="prj-container">
                            <div className="prj-title" key={prj.name}>{ prj.name }</div>
                            <div className="img-container">
                                <img src={ prj.photo} alt="b-day-project" key={prj.photo}/>
                            </div>
                        </div>
                    )
                }) 
                }
                </div> 
            </div>
        </>
    )
}

export default Projects;