import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import axios from "axios";


const DashboardContent = (props) => {

    const [name, setName] = useState('');
    const [symbol, setSymbol] = useState('');

    async function getCoinValues() {
        let coinName = await axios.get('https://zucoin.herokuapp.com/api/vi/name');
        let coinSymbol = await axios.get('https://zucoin.herokuapp.com/api/vi/symbol')
        setSymbol(coinSymbol.data)
        setName(coinName.data)
    }


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(
        getCoinValues
    );


    return (
        <React.Fragment>
            <div id="dashboard" className="pt-5">
                <Container className="pt-5">
                    <div className="pt-3 pb-5">
                        <Row>
                            <Col lg="2" className="p-3 token-info-col">
                                <div className="d-flex flex-column p-3">
                                    <h2>{name}</h2>
                                    <p>Name</p>
                                </div>
                            </Col>

                            <Col lg="2" className="p-3 token-info-col">
                                <div className="d-flex flex-column p-3">
                                    <h2>{symbol}</h2>
                                    <p>Symbol</p>
                                </div>
                            </Col>

                            <Col lg="2" className="p-3 token-info-col">
                                <div className="d-flex flex-column p-3">
                                    <h2>{symbol}</h2>
                                    <p>Wallet Max</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default DashboardContent;