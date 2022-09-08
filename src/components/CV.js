import React, { Component } from "react";

class CV extends Component {
    constructor(props){
        super(props)

    }

    render(){
        const { CVData } = this.props;
        
        return (
        <div className="CV">
            <div className="CVTitle">
                <p className="CVTitle">
            <span id="fullNameSpan">
                <span id="title">{CVData.about.title}</span><span> </span>
                <span id="firstName">{CVData.about.firstName}</span>
                <span id="secondName"> {CVData.about.secondName}</span>
                </span> CV
                </p>

            </div>
            <div className="CVAbout">
                <p className="CVSectionMarker ">
                    Contact:
                </p>
                <p>Phone number: <br /> <span id="phoneNumberSpan">{ CVData.about.phoneNumber}</span></p>
                <p>Address: <br /><span id="addressSpan">{ CVData.about.address }</span> <br /> <span id="postCodeSpan">{ CVData.about.postcode} </span> </p>
                <p>Email Address: <br /><span id="emailSpan">{ CVData.about.email }</span></p>
                
                <span id="postCodeSpan">

                </span>
            </div>
            <div className="CVExperience CVPanel">
                <p className="CVSectionMarker">
                    Work Experience: 
                </p>
                
                    { CVData.experience.map(el => {
                        return (
                            <div key={el.id}>
                                <p className="entryTitle">{el.organization}</p>
                                <p><span>{el.startDate}</span><span> - </span><span>{ el.endDate }</span></p>
                                <p><span>{el.description}</span></p>
                                <div className="dynamicSectionMarker"></div>

                            </div>
                        )
                    })  }
                
            </div>
            <div className="CVEducation CVPanel">
            <p className="CVSectionMarker">
                    Education: 
                </p>
                { CVData.education.map(el => {
                        return (
                            <div key={el.id}>
                                <p className="entryTitle">{el.organization}</p>
                                <p><span>{el.startDate}</span><span> - </span><span>{ el.endDate }</span></p>
                                <p><span>{el.description}</span></p>
                                <div className="dynamicSectionMarker"></div>

                            </div>
                        )
                    })  }
            </div>


        </div>
        )
    }
}

export default CV