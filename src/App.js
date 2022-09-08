import React, { Component } from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import CV from './components/CV';
import ExperienceForm from './components/ExperienceSection';
import EducationForm from './components/EducationForm';
import uniqid from 'uniqid';
// import MyComponent from './MyComponent';
import MyComponent from '../MyFunctionalComponent';
import { render } from 'react-dom';


class App extends Component {
    constructor(props) {
        super(props)
        // this.onClickBtn = this.onClickBtn.bind(this);
        this.applySampleData = this.applySampleData.bind(this);
        this.updateAbout = this.updateAbout.bind(this);
        this.addExperience = this.addExperience.bind(this);
        this.editExperience = this.editExperience.bind(this);
        this.deleteExperience = this.deleteExperience.bind(this);
        this.addEducation = this.addEducation.bind(this);
        this.deleteEducation = this.deleteEducation.bind(this);
        this.editEducation = this.editEducation.bind(this);
        this.testFunction = this.testFunction.bind(this);
        this.state = {
            count: 0,
            currentID: 0,
            exampleProfile: {
                about: {
                    firstName: "Bill",
                    secondName: "Murray",
                    title: "Mr",
                    phoneNumber: "123456789",
                    address: "69 Love Avenue",
                    postcode: "123 ABC",
                    email: "dongmaster9000@dongmail.com",
                },
                education: [
                    {
                        organization: "University of Bristol",
                        startDate: "2021-07-16",
                        endDate: "2024-04-24",
                        description: "BsC Physics with Scientific Computing",
                        qualification: "BsC Upper Second",
                        id: uniqid()

                    },
                    {
                        organization: "University of Bristol",
                        startDate: "2024-13-07",
                        endDate: "2025-24-05",
                        description: "MsC Computer Science",
                        qualification: "MsC First",
                        id: uniqid()
                    }
                ],
                experience: [
                    {
                    organization: "Met office",
                    startDate: "2025-05-07",
                    endDate: "2028-07-12",
                    description: "Created web applications with javascript and python, and did CRUD work with SQL",
                    id: uniqid(),
                },
                {
                    organization: "Meta",
                    startDate: "2028-08-13",
                    endDate: "N/A",
                    description: "Maintain firmware for neauralink application that cures blindness",
                    id: uniqid(),
                }
            ]
            },
            CVData: {
                about: {
                  
                },
                education: [],
                experience: [],
            }
        }
    }
    



    updateAbout(aboutData) {
        let tempCVData = JSON.parse(JSON.stringify(this.state.CVData));
        tempCVData.about = aboutData;
        this.setState({
            CVData: tempCVData
        })
    }

    applySampleData() {
        let tempData = this.state.exampleProfile
        this.setState({
            CVData: tempData
        })
        console.log(this.state.exampleProfile);

    }
    


    educationForm() {
        
    }

    addEducation() {
        let newEducationForm = document.querySelector('#experienceForm')
        let organizationField = document.querySelector('#newEducationOrganization')
        let startDateField = document.querySelector('#newEducationStartDate');
        let newEndDateField = document.querySelector('#newEducationStartDate');
        let descriptionField = document.querySelector('#newEducationStartDate');
        if (organizationField.value.length === 0) {
            errorField.innerText = "Please enter an organization name"
            return false;
        }
        console.log(startDateField.value)
        if (startDateField.value === '') {
            errorField.innerText = "Please select a start date"
            return false;
        }

        if (descriptionField.value === '') {
            errorField.innerText = "Please enter a description"
        }
        let newEducation = {};
        newEducation.organization = organizationField.value;
        newEducation.startDate = startDateField.value;
        newEducation.endDate = newEndDateField.value;
        newEducation.description = descriptionField.value;
        newEducation.id = uniqid();
        let tempData = JSON.parse(JSON.stringify(this.state.CVData));
        tempData.education.push(newEducation);
        this.setState({
            CVData: tempData
        })
        startDateField.value = '';
        organizationField.value = '';
        descriptionField.value = '';
        newEndDateField.value = '';
        
    }

    editEducation(id) {
        let experienceForm = document.querySelector(`#${id}`);
        let organizationField = experienceForm.querySelector('.organizationInput');
        let startDateField = experienceForm.querySelector('.startDateInput')
        let endDateField = experienceForm.querySelector('.endDateInput')
        let descriptionField = experienceForm.querySelector('.descriptionInput')
        let errorField = experienceForm.querySelector('.errorTextField')
        if (organizationField.value.length === 0) {
            errorField.innerText = "Please enter an organization name"
            return false;
        }
        if (startDateField.value === '') {
            errorField.innerText = "Please select a start date"
            return false;
        }

        if (descriptionField.value === '') {
            errorField.innerText = "Please enter a description"
        }
        let newEducation = {};
        newEducation.organization = organizationField.value;
        newEducation.startDate = startDateField.value;
        newEducation.endDate = endDateField.value;
        newEducation.description = descriptionField.value;
        newEducation.id = id;
        let tempData = JSON.parse(JSON.stringify(this.state.CVData));
        for (let i = 0; i<tempData.education.length; i++) {
            let currentEducation = tempData.education[i];
            if (currentEducation.id === id) {
                console.log(currentEducation)
                console.log(newEducation)
                tempData.education[i] = newEducation;
            }
        }
            
            this.setState({
                CVData: tempData
            })
    }

    deleteEducation(id) {
        let tempData = JSON.parse(JSON.stringify(this.state.CVData));
        let updatedEducation = tempData.education.filter(el => {
            return el.id != id
        })
        tempData.education = updatedEducation;
        this.setState({
            CVData: tempData
        })
    }


    testFunction(number) {
        console.log(number);
    }

    editExperience(id) {
        let experienceForm = document.querySelector(`#${id}`);
        let experienceFormChildren = experienceForm.childNodes
        let organizationField = experienceForm.querySelector('.organizationInput');
        let startDateField = experienceForm.querySelector('.startDateInput')
        let endDateField = experienceForm.querySelector('.endDateInput')
        let descriptionField = experienceForm.querySelector('.descriptionInput')
        let errorField = experienceForm.querySelector('.errorTextField')
        if (organizationField.value.length === 0) {
            errorField.innerText = "Please enter an organization name"
            return false;
        }
        if (startDateField.value === '') {
            errorField.innerText = "Please select a start date"
            return false;
        }

        if (descriptionField.value === '') {
            errorField.innerText = "Please enter a description"
        }
        let newExperience = {};
        newExperience.organization = organizationField.value;
        newExperience.startDate = startDateField.value;
        newExperience.endDate = endDateField.value;
        newExperience.description = descriptionField.value;
        newExperience.id = id;
        let tempData = JSON.parse(JSON.stringify(this.state.CVData));
        for (let i = 0; i<tempData.experience.length; i++) {
            let currentExperience = tempData.experience[i];
            if (currentExperience.id === id) {
                console.log(currentExperience)
                console.log(newExperience)
                tempData.experience[i] = newExperience;
            }
        }
            
            this.setState({
                CVData: tempData
            })

        
    }

    addExperience() {
        let organizationField = document.querySelector('#newOrganization');
        let startDateField = document.querySelector('#newStartDate');
        let newEndDateField = document.querySelector('#newEndDate');
        let descriptionField = document.querySelector('#newJobDescription');
        let errorField = document.querySelector('#experienceErrorText');
        if (organizationField.value.length === 0) {
            errorField.innerText = "Please enter an organization name"
            return false;
        }
        console.log(startDateField.value)
        if (startDateField.value === '') {
            errorField.innerText = "Please select a start date"
            return false;
        }

        if (descriptionField.value === '') {
            errorField.innerText = "Please enter a description"
        }
        let newExperience = {};
        newExperience.organization = organizationField.value;
        newExperience.startDate = startDateField.value;
        newExperience.endDate = newEndDateField.value;
        newExperience.description = descriptionField.value;
        newExperience.id = uniqid();
        let tempData = JSON.parse(JSON.stringify(this.state.CVData));
        tempData.experience.push(newExperience);
        this.setState({
            CVData: tempData
        })
        startDateField.value = '';
        organizationField.value = '';
        descriptionField.value = '';
        newEndDateField.value = '';
    }

    deleteExperience(id) {
        let tempData = JSON.parse(JSON.stringify(this.state.CVData));
        let updatedExperience = tempData.experience.filter(el => {
            return el.id != id
        })
        tempData.experience = updatedExperience;
        this.setState({
            CVData: tempData
        })
    }

    stringToDate(id) {

    }



    render() {
        return (
            <div >
                <Header setExample= { this.applySampleData } />
                <div className="ColumnContainer">
                    <div className="forms">
                <AboutSection updateAbout = { this.updateAbout } />
                <ExperienceForm testFunction = {this.testFunction} experienceList = { this.state.CVData.experience } addExperience = { this.addExperience } deleteExperience = { this.deleteExperience } editExperience = {this.editExperience} />
                <EducationForm educationList = { this.state.CVData.education } addEducation = { this.addEducation } deleteEducation = { this.deleteEducation } editEducation = {this.editEducation} />
                    </div>
                    <div className="CVSection">
                        <CV CVData = { this.state.CVData }/>
                    </div>
                
                </div>
            </div>
        )
    }
}

export default App;