import "./Projects.styles.less"
import { useState } from "react"
import { Button } from "@radix-ui/themes";
import { PlusIcon, TrashIcon } from "@radix-ui/react-icons"
import itinerary_photo from "../../assets/images/project-photos/itinerary-snapshot.png"
import EditModal from "../Modals/EditModal.jsx"

function Projects({ headerStyles }) {

    const [isVisible, setIsVisible] = useState(false);

    const handleProjectVisibility = (data) => {
        setIsVisible(data);
    }

    return (
        <>
            <div className="min-w-full">
                <div className={headerStyles.divClass}>
                    <h1 className={headerStyles.h1Class}>Projects</h1>
                </div>
                <div className="prj-btn-container">
                        <EditModal sendToParentData = { handleProjectVisibility }/>
                    {isVisible && (<div>
                        <Button color="gray" id="add-btn" variant="outline">
                            <PlusIcon /> Add
                        </Button>
                        <Button color="red" id="rmv-btn" variant="outline">
                            <TrashIcon /> Remove
                        </Button>
                    </div>
                )}
                </div>
                <div className="flex p-16 justify-between prj-outer-container">
                    <div id="first-prj" className="prj-container">
                        <div className="prj-title">Birthday Itinerary</div>
                        <div className="img-container">
                            <img src={ itinerary_photo } alt="b-day-project" />
                        </div>
                    </div>
                    <div id="second-prj" className="prj-container">
                        <div className="prj-title">Patient Tracking Web App</div>
                    </div>
                    <div id="third-prj" className="prj-container">
                        <div className="prj-title">StatPad</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;