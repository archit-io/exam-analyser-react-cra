import React, { Component } from 'react';
import '../css/Styles.css';


class BlockDomain extends Component {
    
    render() {
        return (
        <React.Fragment>
            <section data-aos="fade-up" className="block container block-domain">
                <header className="block__header">
                    <h2>Starting at {'\u20B9'} 749 per month</h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
                    exercitationem?
                    </p>
                </header>    
            </section>
        </React.Fragment>); 
        
    }
}
 
export default BlockDomain;