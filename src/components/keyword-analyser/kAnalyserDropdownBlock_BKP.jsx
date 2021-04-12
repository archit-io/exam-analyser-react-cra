import React, { Component } from 'react';
import DropDownC from '../dropDownC';

class KAnalyserDropdownBlock extends Component {
    state = {  
        dropDown: [
            {id:1, type: `Current/PYQ`, 
                dropV: [
                    {eventK:1, val:`Current`},
                    {eventK:2, val: `PYQ`}
                ]
            },
            {id:2, type: `Prelims/Mains`,
                dropV: [
                    {eventK:1, val:`Prelims`},
                    {eventK:2, val: `Mains`}
                ]
            },
            {id:2, type: `Exam`,
                dropV: [
                    {eventK:1, val:`GS1`},
                    {eventK:2, val: `Optional`}
                ]
            }
        ] 
    }
    render() { 
        return ( 
            <div>
                {this.state.dropDown.map(dropDown => (
                    <DropDownC key={dropDown.id} {...dropDown} />
                ))}
            </div>
         );
    }
}
 
export default KAnalyserDropdownBlock;