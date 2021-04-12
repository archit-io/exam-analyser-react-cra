import React, { Component } from 'react';
//import { Navbar } from 'react-bootstrap/Navbar';
import Navbar from './Navbar'
import Hero from './hero';
import BlockDomain from './blockDomain';
import BlockPlan from './blockPlan';
import BlockFeatures from './blockFeatures';
import BlockShowcase from './blockShowcase';
import BlockFooter from './blockFooter';

class HomePage extends Component {
    render() { 
        return (  
            <React.Fragment>
                <Hero />
                <BlockDomain />
                <BlockPlan />
                <BlockFeatures />
                <BlockShowcase />
                <BlockFooter />
            </React.Fragment>
        );
    }
}
 
export default HomePage;