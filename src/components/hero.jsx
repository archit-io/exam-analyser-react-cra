import React, { Component } from 'react';
import '../css/Styles.css';
// import banner from '../images/banner.png';
import bannerWebLight from '../images/banner.webp';
import bannerWebDense from '../images/banner@2x.webp';
import bannerPngLight from '../images/banner.png';
import bannerPngDense from '../images/banner@2x.png';

class Hero extends Component {
    
    render() {
        return (
        <React.Fragment>
            <section className="block block--dark block--skewed-left hero">
                <div className="container grid grid--1x2">
                    <header className="block__header hero__content">
                        <h1 data-aos="fade-right" className="block__heading">
                            Exam Analysis for Pros
                        </h1>
                        <p className="hero__tagline">
                            Analyse your exam with highest accuracy and increase your chances of success.
                        </p>
                        <a href="" className="btn btn--accent btn--stretched">Get Started</a>
                    </header>
                    <picture data-aos="zoom-in">
                        <source
                            type="image/webp"
                            srcSet={`${bannerWebLight} 1x, ${bannerWebDense} 2x`}
                        />
                        <source
                            type="image/png"
                            srcSet={`${bannerPngLight} 1x, ${bannerPngDense} 2x`}
                        />
                        <img className="hero__image" src={bannerPngLight} alt="" />
                    </picture>
                </div>
            </section>
        </React.Fragment>); 
        
    }
}
 
export default Hero;