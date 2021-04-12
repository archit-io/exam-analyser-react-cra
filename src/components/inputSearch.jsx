import React, { Component } from 'react';
import '../css/Styles.css';

class InputSearch extends Component {
    
    render() { 
        return ( 
            <React.Fragment>
                <section class="block container block-domain">
                    <div className="input-group">
                        <input type="text" className="input" placeholder="Enter keyword..." />
                        <button className="btn btn--accent">Search</button>
                    </div>
                </section>
            </React.Fragment>
         );
    }
}
 
export default InputSearch ;