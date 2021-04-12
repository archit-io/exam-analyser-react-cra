import React, { Component } from 'react';
import '../css/Styles.css';
// import banner from '../images/banner.png';
import fastWebLight from '../images/fast.webp';
import fastWebDense from '../images/fast@2x.webp';
import fastJpgLight from '../images/fast.jpg';
import fastJpgDense from '../images/fast@2x.jpg';
import supportWebLight from '../images/support.webp';
import supportWebDense from '../images/support@2x.webp';
import supportJpgLight from '../images/support.jpg';
import supportJpgDense from '../images/support@2x.jpg';
import wordpressWebLight from '../images/wordpress.webp';
import wordpressWebDense from '../images/wordpress@2x.webp';
import wordpressJpgLight from '../images/wordpress.jpg';
import wordpressJpgDense from '../images/wordpress@2x.jpg';
import easyWebLight from '../images/easy.webp';
import easyWebDense from '../images/easy@2x.webp';
import easyJpgLight from '../images/easy.jpg';
import easyJpgDense from '../images/easy@2x.jpg';
import sprite from '../images/sprite.svg';


class BlockFeatures extends Component {
    
    render() {
        return (
        <React.Fragment>
            <section className="block container">
                <header className="block__header">
                    <h2>Analyse Your Exam and Succeed</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
                    voluptatem.
                    </p>
                </header>
                <article className="grid grid--1x2 feature">
                    <div className="feature__content" data-aos="fade-right">
                        <span className="icon-container">
                            <svg className="icon icon--primary">
                                <use href={sprite + "#easy"} />
                            </svg>
                        </span>
                        <h3 className="feature__heading">Super Easy to Use</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                            obcaecati vel ad unde est illo at. Labore excepturi officia dolores!
                        </p>
                        <a href="#" className="link-arrow">Learn More</a>
                    </div>
                    <picture data-aos="zoom-in-left">
                        <source
                            type="image/webp"
                            srcSet={`${easyWebLight} 1x, ${easyWebDense} 2x`}
                        />
                        <source
                            type="image/jpg"
                            srcSet={`${easyJpgLight} 1x, ${easyJpgDense} 2x`}
                        />
                        <img className="feature__image" src={easyJpgLight} alt="" />
                    </picture>
                </article>
                <article className="grid grid--1x2 feature">
                    <div className="feature__content">
                        <span className="icon-container">
                            <svg className="icon icon--primary">
                                <use href={sprite + "#computer"} />
                            </svg>
                        </span>
                        <h3 className="feature__heading">Fast and Responsive</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                            obcaecati vel ad unde est illo at. Labore excepturi officia dolores!
                        </p>
                        <a href="#" className="link-arrow">Learn More</a>
                    </div>
                    <picture>
                        <source
                            type="image/webp"
                            srcSet={`${fastWebLight} 1x, ${fastWebDense} 2x`}
                        />
                        <source
                            type="image/jpg"
                            srcSet={`${fastJpgLight} 1x, ${fastJpgDense} 2x`}
                        />
                        <img className="feature__image" src={fastJpgLight} alt="" />
                    </picture>
                </article>
                <article className="grid grid--1x2 feature">
                    <div className="feature__content">
                        <span className="icon-container">
                            <svg className="icon icon--primary">
                                <use href={sprite + "#wordpress"} />
                            </svg>
                        </span>
                        <h3 className="feature__heading">Exam Analysis Made Easy</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                            obcaecati vel ad unde est illo at. Labore excepturi officia dolores!
                        </p>
                        <a href="#" className="link-arrow">Learn More</a>
                    </div>
                    <picture>
                        <source
                            type="image/webp"
                            srcSet={`${wordpressWebLight} 1x, ${wordpressWebDense} 2x`}
                        />
                        <source
                            type="image/jpg"
                            srcSet={`${wordpressJpgLight} 1x, ${wordpressJpgDense} 2x`}
                        />
                        <img className="feature__image" src={wordpressJpgLight} alt="" />
                    </picture>
                </article>
                <article className="grid grid--1x2 feature">
                    <div className="feature__content">
                        <span className="icon-container">
                            <svg className="icon icon--primary">
                                <use href={sprite + "#clock"} />
                            </svg>
                        </span>
                        <h3 className="feature__heading">24/7 Expert Support</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                            obcaecati vel ad unde est illo at. Labore excepturi officia dolores!
                        </p>
                        <a href="#" className="link-arrow">Learn More</a>
                    </div>
                    <picture>
                        <source
                            type="image/webp"
                            srcSet={`${supportWebLight} 1x, ${supportWebDense} 2x`}
                        />
                        <source
                            type="image/jpg"
                            srcSet={`${supportJpgLight} 1x, ${supportJpgDense} 2x`}
                        />
                        <img className="feature__image" src={supportJpgLight} alt="" />
                    </picture>
                </article>
            </section>
        </React.Fragment>); 
        
    }
}
 
export default BlockFeatures;