import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props)

    }
    
    render() {
        const { setExample } = this.props
        return (
            <div className="header">
                <p>
                CV Designer
                </p>
                <button onClick={setExample}>Apply Sample Person</button>
            </div>

        )
    }
}

export default Header;