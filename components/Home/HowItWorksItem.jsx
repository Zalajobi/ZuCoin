import React from "react";
import {Col, Image} from "react-bootstrap";

const HowItWorksItem = (props) => {
    return (
        <React.Fragment>
            <Col lg="4" className="p-3">
                <div className="works-container">
                    <div className="works-img-container">
                        <Image className="w-100 h-100" src={props.image} alt="Growth"/>
                    </div>

                    <h2>{props.header}</h2>

                    <p>{props.desc}</p>
                </div>
            </Col>
        </React.Fragment>
    )
}

export default HowItWorksItem;