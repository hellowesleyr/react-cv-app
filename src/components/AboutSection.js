import React, { Component } from "react";

class AboutSection extends Component {
    constructor(props){
        super(props)
        this.applyAbout = this.applyAbout.bind(this);
    }

    applyAbout() {
        const { updateAbout } = this.props;
        let firstNameInput = document.querySelector("#firstNameInput");
        let lastNameInput = document.querySelector("#lastNameInput");
        let titleInput = document.querySelector("#titleInput");
        let phoneNumberInput = document.querySelector("#numberInput");
        let addressInput = document.querySelector("#adressInput");
        let postcodeInput = document.querySelector("#postcodeInput");
        let emailInput = document.querySelector("#emailInput");
        let aboutData = {
            firstName: firstNameInput.value,
            secondName: lastNameInput.value,
            title: titleInput.value,
            phoneNumber: phoneNumberInput.value,
            address: addressInput.value,
            postcode: postcodeInput.value,
            email: emailInput.value,
        }
        updateAbout(aboutData);
    }

    render(){
        const { updateAbout } = this.props;
        return (
            <div className="inputSectionContainer">
                <p className="CVSectionMarker ">
                    About:
                    </p>
                <form action="" className="inputForm" id="aboutForm">
                    <input type="text" name="firstName " id="firstNameInput"  placeholder='First name' />
                    <input type="text" name="lastName" id="lastNameInput" placeholder='Last name' />
                    <input type="text" name="title" id="titleInput" placeholder='Title' />
                    <input type="text" name="phoneNumber" id="numberInput" placeholder='Phone number'/>
                    <input type="text" name="address" id="adressInput" placeholder='Address'/>
                    <input type="text" name="postcode" id="postcodeInput" placeholder='Postcode' />
                    <input type="text" name="email" id='emailInput' placeholder='Email' />
                    <button type="button" onClick={this.applyAbout} className='formButton'>Apply</button>
                </form>
        </div>
        )
    }
}

export default AboutSection