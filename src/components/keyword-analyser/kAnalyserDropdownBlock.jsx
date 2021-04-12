import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import {getDropDownList} from '../../services/dropDownList.js'
//import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
//import jsxToString from 'jsx-to-string';


class KAnalyserDropdownBlock extends Component {
    
    constructor(props)
    {
        super(props);
        this.state = {  
            dropDown: getDropDownList(),            
            clickState: ''
        }
        // this.handleClick = this.handleClick.bind(this);
        // this.genCurrDropDownId = this.genCurrDropDownId.bind(this);
    }

    

    // genCurrDropDown = () => {
    //     const parsed = JSON.parse(this.state.dropDown);
    //     return parsed[0].dropV.map(index => (<Dropdown.Item key={index} eventKey={index.eventK}>{index.val}</Dropdown.Item> ))
    //     };

    genIndexFromId = idParam => {
        const {dropDown} = this.state;
        const optionP = dropDown.find( ({ id }) => id === idParam )
        return dropDown.findIndex(object=>object.id===optionP.id);
    }

    genCurrDropDown = () => {
      const {dropDown} = this.state;
      const i = dropDown.map(dropDown => {return {...dropDown}})
      const j = this.genIndexFromId('currPyqOption');
      const dropDownTitle = i[j].type; //(!this.state.clickState ?  i[j].type : this.state.clickState );
      const dropDownId = i[j].id;
      const dropDownMenu = i[j].dropV.map((index) => (<Dropdown.Item  onClick={this.handleClick(index.eventK)} key={index.eventK} eventKey={index.eventK} style={{fontSize: "1.75rem"}}>{index.val}</Dropdown.Item> ));
      return (
            <DropdownButton style={{textAlign: "center" }} key= {dropDownId} id="dropdown-item-button" title={dropDownTitle}>
                   {dropDownMenu}
            </DropdownButton>  
      )    //CHANGE STYLE ABOVE    
    }

    genCurrDropDownId = (id) => {
      const {dropDown} = this.state;
      const i =  this.state.dropDown.map(dropDown => {return {...dropDown}})
      const j = this.genIndexFromId(id);
      const dropDownTitle = i[j].type;//(!this.state.clickState ?  i[idd].type : i[idd].dropV. );
      const dropDownId = i[j].id;
      const dropDownMenu = i[j].dropV.map((index) => (<Dropdown.Item onClick={this.handleClick(index.eventK)} key={index.eventK} eventKey={index.eventK} style={{fontSize: "1.75rem"}}>{index.val}</Dropdown.Item> ));
      return (            
                <DropdownButton style={{textAlign: "center" }} key= {dropDownId} id="dropdown-item-button" title={dropDownTitle}>                   
                    {dropDownMenu} 
                </DropdownButton>                
            
            //CHANGE STYLE ABOVE   
      )        
    }

    handleClick = value => () => {
        this.setState({clickState: value})
          
        //return this.genCurrDropDownId(2);    
        //console.log('Bar');            
        }

    //  changeDropDownHeading = (value, dropDownTitle) => {
    //    return (!value ? dropDownTitle : value);
    //  }
    
    mainDropDownBlock()
        {
            let {clickState} = this.state;

            if (clickState === '') //DEFAULT STATE ON PAGE LOAD
                {return this.genCurrDropDown();}

            else if (clickState === 'pyq') //SELECT PYQ = pre main option appears
                {return [this.genCurrDropDown(), this.genCurrDropDownId('preMainsOption')];}
            
            else if (clickState === 'prelims')//Select PYQ.Prelims = GS CSAT option appears
                {return [this.genCurrDropDown(), this.genCurrDropDownId('preMainsOption'), this.genCurrDropDownId('prelimsOptions')];}

            else if (clickState === 'mains')//Select PYQ.Mains = GS1,...optional appears
                {return [this.genCurrDropDown(), this.genCurrDropDownId('preMainsOption'), this.genCurrDropDownId('mainsOptions')];}
                
            else if (clickState === 'gs1')//Select PYQ.Mains.GS1 = GS1 subjects appear
                {return [this.genCurrDropDown(), this.genCurrDropDownId('preMainsOption'), this.genCurrDropDownId('mainsOptions'), this.genCurrDropDownId('mainsSubjectGS1Options')];}
    
                
            else if (clickState === 'current')
                {return [this.genCurrDropDown(), this.genCurrDropDownId('mainsOptions')];}
            
            else {return this.genCurrDropDown();}
            }

    // genAllDropDowns = () => {
    //     const i =  this.state.dropDown.map(dropDown => {return {...dropDown}}) 
    //     let dropDownBlockArr = [];
    //     for (var p in  i) {
    //         let dropDownTitle = i[p].type ;
    //         const dropDownId = i[p].id; /*RESOLVE ISSUE OF DUPLICATE KEYS*/
    //         let dropDownMenu = i[p].dropV.map((index) => (<Dropdown.Item key={index.eventKey} onClick={this.handleClick(index.eventK)}  eventKey={index.eventK}>{index.val}</Dropdown.Item> ))
    //         var dropDownBlock = <DropdownButton id="dropdown-item-button"  key={dropDownId} title={dropDownTitle}>{dropDownMenu}</DropdownButton>;
    //         dropDownBlockArr.push(dropDownBlock);                
    //     }
    //     return dropDownBlockArr; /*ReactHtmlParser(html)*/
    // }


    render() { 
        return ( 
            <React.Fragment>               
                {this.mainDropDownBlock()}
            </React.Fragment>
         );
    }
}
 
export default KAnalyserDropdownBlock;