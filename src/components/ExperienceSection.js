import React, { Component } from "react";
import { render } from "react-dom";

class ExperienceForm extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        const { testFunction, addExperience, deleteExperience, editExperience, experienceList } = this.props
        return (
        <div className="inputSectionContainer">
            <p className="CVSectionMarker ">
                    Work experience:
                    </p>
            {
                experienceList.map(experience => {
                    return (
                        
                    <form key={experience.id} id={experience.id}>
                        <input type="text" defaultValue={experience.organization} className='organizationInput' name="organizationName " id=""  placeholder='Organization' />
                        <input type="date" defaultValue={experience.startDate} className='startDateInput' name="newStartDate" id="" />
                        <input type="date" defaultValue={experience.endDate} className='endDateInput' name="newEndDate" id="" />
                        <textarea defaultValue={experience.description} className='descriptionInput' name="description" id="" cols="30" rows="10"></textarea>
                        <button type="button" className="addExperienceBtn" onClick={() => editExperience(experience.id)}>Apply</button>
                        <button type="button" className="deleteExperienceBtn" onClick={() => deleteExperience(experience.id)}>Delete</button>
                        <span className="errorTextField"></span>
                        <div className="dynamicSectionMarker"></div>
                    </form>
                        
                    )
                })
            }
            <form action="" className="inputForm" id="experienceForm">
                    <input type="text" name="organizationName " id="newOrganization"  placeholder='Organization' />
                    <input type="date" name="newStartDate" id="newStartDate" />
                    <input type="date" name="newEndDate" id="newEndDate" />
                    <textarea name="description" id="newJobDescription" cols="30" rows="10"></textarea>
                    <button type="button" className="addExperienceBtn" onClick={() => addExperience()}>Add</button>
                    <span id="experienceErrorText"></span>
            </form>
        </div>
    )
}
}

export default ExperienceForm;