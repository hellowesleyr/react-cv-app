import React, { Component } from "react";
import { render } from "react-dom";

class EducationForm extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { addEducation ,educationList, editEducation, deleteEducation } = this.props
       return (
        <div className="inputSectionContainer">
        <p className="CVSectionMarker ">
                Education:
                </p>
        {
            educationList.map(education => {
                return (
                    
                <form key={education.id} id={education.id}>
                    <input type="text" defaultValue={education.organization} className='organizationInput' name="organizationName " id=""  placeholder='Organization' />
                    <input type="date" defaultValue={education.startDate} className='startDateInput' name="newStartDate" id="" />
                    <input type="date" defaultValue={education.endDate} className='endDateInput' name="newEndDate" id="" />
                    <input defaultValue={education.description} className='descriptionInput' name="description" id="" cols="30" rows="10"></input>
                    <input defaultValue={education.qualification} className='qualificationInput' name="qualification" id="" cols="30" rows="10"></input>
                    <button type="button" className="addExperienceBtn" onClick={() => editEducation(education.id)}>Apply</button>
                    <button type="button" className="deleteExperienceBtn" onClick={() => deleteEducation(education.id)}>Delete</button>
                    <span className="errorTextField"></span>
                    <div className="dynamicSectionMarker"></div>
                </form>
                    
                )
            })
        }
        <form action="" className="inputForm" id="experienceForm">
                <input type="text" name="organizationName " id="newEducationOrganization"  placeholder='Organization' />
                <input type="date" name="newStartDate" id="newEducationStartDate" />
                <input type="date" name="newEndDate" id="newEducationEndDate" />
                <input name="description" id="newEducationDescription" cols="30" rows="10"></input>
                
                <span className="errorTextField"></span>


                <button type="button" className="addExperienceBtn" onClick={() => addEducation()}>Add</button>
                <span id="experienceErrorText"></span>
        </form>
    </div>
        )
    
}
}

export default EducationForm;