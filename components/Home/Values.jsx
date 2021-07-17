import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";

const Values = (props) => {
    return (
        <React.Fragment>
            <section id="values">
                <Container>
                    <div className="d-flex flex-column">
                        <h1 className="text-center text-white pb-4">Core Values</h1>

                        <Row>
                            <Col lg="2" className="value-col">
                                <i className="icofont-chart-growth"/>
                                <h4 className="text-white">Growth</h4>
                                <p className="text-white text-center">Producing yield generation and creating a sensible investment for our holders.</p>
                            </Col>

                            <Col lg="2" className="value-col">
                                <i className="icofont-lock"/>
                                <h4 className="text-white">Security</h4>
                                <p className="text-white text-center">Creating a secure store of value for all our holders.</p>
                            </Col>

                            <Col lg="2" className="value-col">
                                <i className="icofont-holding-hands"/>
                                <h4 className="text-white">Charity</h4>
                                <p className="text-white text-center">Giving to impactful charitable causes in order to change the world for the better.</p>
                            </Col>

                            <Col lg="2" className="value-col">
                                <i className="icofont-globe"/>
                                <h4 className="text-white">Decentralization</h4>
                                <p className="text-white text-center">Ensuring no single entity or group has complete control of the protocol.</p>
                            </Col>

                            <Col lg="2" className="value-col">
                                <i className="icofont-people"/>
                                <h4 className="text-white">Community</h4>
                                <p className="text-white text-center">Through decentralization Altrucoin will remain community driven, built and controlled.</p>
                            </Col>

                            <Col lg="2" className="value-col">
                                <i className="icofont-book"/>
                                <h4 className="text-white">Transparency</h4>
                                <p className="text-white text-center">Transparency from our team in all aspects of the project.</p>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Values;