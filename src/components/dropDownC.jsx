import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

class DropDownC extends Component {
    
    constructor(props) {
            super(props);           
        }
    
    
    genDropDown = () => {return this.props.dropV.map(index => (<Dropdown.Item key={index} eventKey={index.eventK}>{index.val}</Dropdown.Item> ))};

    render() { 
        return ( 
            <React.Fragment>
                
                <DropdownButton
                    menuAlign="right"
                    title={this.props.type}
                    id="dropdown-menu-align-right"
                >
                {this.genDropDown()}
                </DropdownButton> 
            </React.Fragment>
         );
    }
}
 
export default DropDownC;
