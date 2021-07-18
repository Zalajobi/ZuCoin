import React, {useState} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";

const WhyUs = (props) => {

    const [centralizedControl, setCentralizedControl] = useState('');
    const [visibility, setVisibility] = useState('');
    const [useCase, setUseCase] = useState('');
    const [replicated, setReplicated] = useState('');
    const [donation, setDonation] = useState('');
    const [security, setSecurity] = useState('');

    function CentralizedControl() {
        setCentralizedControl('ZuCoin has launched in a partially decentralized state. Our roadmap lays out our plan to become fully decentralized.')
    }

    function removeCentralizedControl() {
        setCentralizedControl('')
    }

    function visibilityControl() {
        setVisibility('In our whitepaper, we discuss our transaction fee reduction plan designed to increase general usability.')
    }

    function removeVisibility() {
        setVisibility('')
    }

    function setUseCaseControl() {
        setUseCase('We are actively developing the protocol into a decentralized lending platform.')
    }

    function removeUseCase() {
        setUseCase('')
    }

    function setReplicatedControl() {
        setReplicated('While we do make use of established code libraries and templates, we have also implemented unique code to create a token that matches our needs exactly.')
    }

    function removeReplicated() {
        setReplicated('')
    }

    function setDonationControl() {
        setDonation('Holders of ZuCoin will be in control of which charities receive donations. This is implemented at launch.')
    }

    function removeDonation() {
        setDonation('')
    }

    function setSecurityControl() {
        setSecurity('Every protocol wallet is controlled via Gnosis Multisig Safe wallet contracts.')
    }

    function removeSecurity() {
        setSecurity('')
    }

    return (
        <React.Fragment>
            <section id="whyus" className="pt-3 pb-4">
                <Container>
                    <Row>
                        <Col lg="7">
                            <div className="whyus-content-container">
                                <h5>Why Choose ZuCoin</h5>

                                <h2>What sets us apart</h2>

                                <p>We have learned from our predecessors and aim to improve on their formulas. Our team has identified a number of issues with existing frictionless yield-generation tokens, and has devised solutions for each of them:</p>

                                <Row>
                                    <Col lg="6" className="p-4">
                                        <div className="issues">
                                            <h3 onMouseOver={CentralizedControl} onMouseLeave={removeCentralizedControl}>centralized control</h3>
                                            <p>{centralizedControl}</p>
                                        </div>
                                    </Col>

                                    <Col lg="6" className="p-4">
                                        <div className="issues">
                                            <h3 onMouseOver={visibilityControl} onMouseLeave={removeVisibility}>Low Token Usability</h3>
                                            <p>{visibility}</p>
                                        </div>
                                    </Col>

                                    <Col lg="6" className="p-4">
                                        <div className="issues">
                                            <h3 onMouseOver={setUseCaseControl} onMouseLeave={removeUseCase}>No Primary Use Case</h3>
                                            <p>{useCase}</p>
                                        </div>
                                    </Col>

                                    <Col lg="6" className="p-4">
                                        <div className="issues">
                                            <h3 onMouseOver={setReplicatedControl} onMouseLeave={removeReplicated}>Replicated Smart Contract Code</h3>
                                            <p>{replicated}</p>
                                        </div>
                                    </Col>

                                    <Col lg="6" className="p-4">
                                        <div className="issues">
                                            <h3 onMouseOver={setDonationControl} onMouseLeave={removeDonation}>Centralized Donation Control</h3>
                                            <p>{donation}</p>
                                        </div>
                                    </Col>

                                    <Col lg="6" className="p-4">
                                        <div className="issues">
                                            <h3 onMouseOver={setSecurityControl} onMouseLeave={removeSecurity}>Poor Security Controls</h3>
                                            <p>{security}</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>

                        <Col lg="5">
                            <div className="p-3">
                                <Image src="https://res.cloudinary.com/zalajobi/image/upload/v1626554004/ZuCoin/Home/setsapart_j96aua.png" alt="What sets us apart" className="w-100 h-100"/>
                            </div>

                            <div className="d-flex flex-row">
                                <a className="hero-btn mr-lg-2">View Whitepaper</a>
                                <a className="hero-btn ml-lg-2">Buy Now <i className="icofont-dotted-right"/></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default WhyUs;