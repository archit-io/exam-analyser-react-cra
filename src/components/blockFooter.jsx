import React, { Component } from 'react';
import '../css/Styles.css';
import sprite from '../images/sprite.svg';
import logo from '../images/logo.png';

class BlockFooter extends Component {
    
    render() {
        return (
        <React.Fragment>
            <footer class="block block--dark footer" style={{paddingTop:"2rem", paddingBottom:"0rem"}}>
                <div class="container grid footer__sections">
                    <section class="collapsible footer__section">
                    <header class="collapsible__header">
                        <h2 class="collapsible__heading footer__heading">Company</h2>
                        {/* <svg class="icon icon--white collapsible__chevron">
                        <use href={sprite + "#chevron"} />
                        </svg> */}
                    </header>
                    {/* <div class="collapsible__content">
                        <ul class="list">
                        <li><a href="#">Website Hosting</a></li>
                        <li><a href="#">Free Automated Wordpress</a></li>
                        <li><a href="#">Migrations</a></li>
                        </ul>
                    </div> */}
                    </section>
                    <section class="collapsible footer__section">
                    <header class="collapsible__header">
                        <h2 class="collapsible__heading footer__heading">FAQ</h2>
                        {/* <svg class="icon icon--white collapsible__chevron">
                        <use href={sprite + "#chevron"} />
                        </svg> */}
                    </header>
                    {/* <div class="collapsible__content">
                        <ul class="list">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Affiliates</a></li>
                        <li><a href="#">Blog</a></li>
                        </ul>
                    </div> */}
                    </section>
                    <section class="collapsible footer__section">
                    <header class="collapsible__header">
                        <h2 class="collapsible__heading footer__heading">CONTACT</h2>
                        {/* <svg class="icon icon--white collapsible__chevron">
                        <use href={sprite + "#chevron"} />
                        </svg> */}
                    </header>
                    {/* <div class="collapsible__content">
                        <ul class="list">
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Knowledge Base</a></li>
                        <li><a href="#">FAQ</a></li>
                        </ul>
                    </div> */}
                    </section>
                    <section class="collapsible footer__section">
                    <header class="collapsible__header">
                        <h2 class="collapsible__heading footer__heading">SUPPORT</h2>
                        {/* <svg class="icon icon--white collapsible__chevron">
                        <use href={sprite + "#chevron"} />
                        </svg> */}
                    </header>
                    {/* <div class="collapsible__content">
                        <ul class="list">
                        <li><a href="#">Domain Checker</a></li>
                        <li><a href="#">Domain Transfer</a></li>
                        <li><a href="#">Free Domain</a></li>
                        </ul>
                    </div> */}
                    </section>
                    <section class="footer__brand">
                    <img src={logo} alt='' style={{width:"20%"}}/>
                    <p class="footer__copyright">Copyright 2021 Tabotot Technologies</p>
                    </section>
                </div>
            </footer>

        </React.Fragment>); 
        
    }
}
 
export default BlockFooter;