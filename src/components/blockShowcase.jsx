import React, { Component } from 'react';
import '../css/Styles.css';
import ipadWebLight from '../images/ipad.webp';
import ipadWebDense from '../images/ipad@2x.webp';
import ipadPngLight from '../images/ipad.png';
import ipadPngDense from '../images/ipad@2x.png';
import sprite from '../images/sprite.svg';


class BlockShowcase extends Component {
    
    render() {
        return (
        <React.Fragment>
            <section className="block block--dark block--skewed-right block-showcase">
                <header className="block__header">
                    <h2>User-friendly Control Panel</h2>
                </header>
                <div className="container grid grid--1x2">
                    <picture data-aos="fade-right" className="block-showcase__image">
                        <source
                            type="image/webp"
                            srcSet={`${ipadWebLight} 1x, ${ipadWebDense} 2x`}
                        />
                        <source
                            type="image/jpg"
                            srcSet={`${ipadPngLight} 1x, ${ipadPngDense} 2x`}
                        />
                        <img classNameName="feature__image" src={ipadPngLight} alt="" />
                    </picture>
                    <ul className="list" data-aos="fade-up">
                        <li>
                            <div className="media">
                                <div className="media__image">
                                    <svg className="icon icon--primary">
                                        <use href={sprite + "#snap"} />
                                    </svg>
                                </div>
                                <div className="media__body">
                                    <h3 className="media__title">Easy Start & Managed Updates</h3>
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Veniam quisquam, ex nostrum vero voluptates dicta excepturi
                                    vel perspiciatis consequuntur ab.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="media">
                                <div className="media__image">
                                    <svg className="icon icon--primary">
                                        <use href={sprite + "#growth"} />
                                    </svg>
                                </div>
                                <div className="media__body">
                                    <h3 className="media__title">Staging, GIT & WP-CLI</h3>
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Veniam quisquam, ex nostrum vero voluptates dicta excepturi
                                    vel perspiciatis consequuntur ab.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="media">
                                <div className="media__image">
                                    <svg className="icon icon--primary">
                                        <use href={sprite + "#wordpress"} />
                                    </svg>
                                </div>
                                <div className="media__body">
                                    <h3 className="media__title">Dynamic Caching & More</h3>
                                    <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Veniam quisquam, ex nostrum vero voluptates dicta excepturi
                                    vel perspiciatis consequuntur ab.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </React.Fragment>); 
        
    }
}
 
export default BlockShowcase;