import React, { Component } from 'react';
import '../css/Styles.css';
import logo from '../images/logo.png';
import sprite from '../images/sprite.svg';


class NavBarC extends Component {
    
    render() {
        return (
        <React.Fragment>
            <header>
                <nav className="nav collapsible">
                    <a className="nav__brand" href="/"><img src={logo} /> </a>
                    <svg className="icon icon--white nav__toggler">
                        <use href={sprite + "#menu"} />
                    </svg>
                    <ul className="list nav__list collapsible__content">
                        <li className="nav__item"><a href="about.html">About</a></li>
                        <li className="nav__item"><a href="#">Tools</a></li>
                        <li className="nav__item"><a href="login.html">Sign up/Login</a></li>
                        <li className="nav__item"><a href="#">FAQ</a></li>
                        <li className="nav__item"><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
            </header>
        </React.Fragment>); 
        
    }
}
 
export default NavBarC;