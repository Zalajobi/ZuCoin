import React, {useEffect, useState} from "react";
import {Carousel, Col, Container, Image, Row} from "react-bootstrap";
import TextLoop from "react-text-loop";



const HeroSlider = (props) => {

    const messages = ["Decentralization", "Security", "Transparency", "Charity", "Community", "Growth"];

    return (
        <React.Fragment>
            {/*<section style={{backgroundColor: 'rgba(0,0,0, 0.8)'}}>*/}
            <section id="hero"  className="py-3">
                <div>
                    <Container className="h-100">
                        <Row className="h-100">
                            <Col lg="7" className="d-flex flex-column align-items-start justify-content-center h-100 p-3">
                                {/* eslint-disable-next-line react/no-children-prop */}
                                <h1 className="text-white hero-text mt-5">The ZuCoin Protocol was built for <span><TextLoop children={messages} interval={5000} springConfig={{ stiffness: 180, damping: 8 }}/></span></h1>

                                <p className="text-white">ZuCoin is a decentralized finance token built to bring together trustless defi lending, token reflection, charitable donations, and decentralized governance.</p>

                                <div className="d-flex flex-row">
                                    <a className="hero-btn mr-2">learn more</a>
                                    <a className="hero-btn ml-2">buy now <i className="icofont-dotted-right"/></a>
                                </div>
                            </Col>

                            <Col lg="5" className="d-flex align-items-center justify-content-center">
                                <div style={{width: '250px', height: '100%'}}>
                                    <Image className="d-flex align-items-center justify-content-center w-100 h-100" src="https://res.cloudinary.com/zalajobi/image/upload/v1626396125/ZuCoin/Home/4976424-removebg-preview_pclqoi.png" alt="Logo"/>
                                </div>
                            </Col>
                        </Row>

                        <div className="d-flex flex-column align-items-center justify-content-center w-100">
                            <h3 className="text-white">We are Hosting a 1,000,000,000,000 ZuCoin Giveaway RIGHT NOW!</h3>

                            <a className="hero-btn">giveaway <i className="icofont-dotted-right"/></a>

                            <div className="d-flex flex-row w-25 mb-4 mt-3 socials-icon">
                                <a className="text-white mx-auto"><i className="icofont-telegram"/></a>
                                <a className="text-white mx-auto"><i className="icofont-twitter"/></a>
                                <a className="text-white mx-auto"><i className="icofont-reddit"/></a>
                                <a className="text-white mx-auto"><i className="icofont-instagram"/></a>
                                <a className="text-white mx-auto"><i className="icofont-youtube-play"/></a>
                                <a className="text-white mx-auto"><i className="icofont-facebook"/></a>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </React.Fragment>
    )
}

export default HeroSlider;