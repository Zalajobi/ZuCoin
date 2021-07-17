import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";

const About = (props) => {
    return (
        <React.Fragment>
            <section id="about" className="pt-1 pb-5">
                <div>
                    <Container>
                        <div className="d-flex flex-column align-items-center justify-content-center about-container">
                            <h2 className="mb-3">ZuCoin Has Pledged <span>$10,000</span> To Charity</h2>
                            <div className="about-content-container">
                                <div className="about-content-item">
                                    <div className="about-content-img mt-1 mb-3">
                                        <Image src="https://res.cloudinary.com/zalajobi/image/upload/v1626450985/ZuCoin/Home/bscscan-logo-light-circle-clear-blue_oxwf5r.png" alt="BSC Scan logo"/>
                                    </div>
                                    <p><a href="https://bscscan.com/token/0xeDAF1F5B8078d4feb4E13c8d5A2c8dE1365be7b6#balances" target="_blank" rel="noreferrer">Bscscan</a></p>
                                </div>

                                <div className="about-content-item">
                                    <div className="about-content-img mt-1 mb-3">
                                        <Image src="https://res.cloudinary.com/zalajobi/image/upload/v1626450985/ZuCoin/Home/bogtools_symbol_default-clear-blue_yccvqx.png" alt="Charts"/>
                                    </div>
                                    <p><a href="https://charts.bogged.finance/?token=0xeDAF1F5B8078d4feb4E13c8d5A2c8dE1365be7b6" target="_blank" rel="noreferrer">Charts</a></p>
                                </div>

                                <div className="about-content-item">
                                    <div className="about-content-img mt-1 mb-3">
                                        <Image src="https://res.cloudinary.com/zalajobi/image/upload/v1626450985/ZuCoin/Home/techrate2_pgtow8.png" alt="Security Audit"/>
                                    </div>
                                    <p><a href="https://altrucoin.io/wp-content/uploads/2021/06/ALTRUCOIN-Full-Smart-Contract-Security-Audit-v2.pdf" target="_blank" rel="noreferrer">Security Audit</a></p>
                                </div>

                                <div className="about-content-item">
                                    <div className="about-content-img mt-1 mb-3">
                                        <Image src="https://res.cloudinary.com/zalajobi/image/upload/v1626450985/ZuCoin/Home/CoinGecko-Logo-clearn-blue-768x768_wfncge.png" alt="Coin GEcko"/>
                                    </div>
                                    <p><a href="https://www.coingecko.com/en/coins/altrucoin" target="_blank" rel="noreferrer">CoinGecko</a></p>
                                </div>

                                <div className="about-content-item">
                                    <div className="about-content-img mt-1 mb-3">
                                        <Image src="https://res.cloudinary.com/zalajobi/image/upload/v1626450985/ZuCoin/Home/CoinMarketCap_Logo-clear-blue_rweraf.png" alt="Coming Soon"/>
                                    </div>
                                    <p><a href="#" target="_blank" rel="noreferrer">Coming Soon</a></p>
                                </div>
                            </div>

                            <Row className="pt-5">
                                <Col lg="6" className="abt-zuCoin-img" >
                                    <div className="w-100 h-100">
                                        <Image className="w-100 h-100" src="https://res.cloudinary.com/zalajobi/image/upload/v1626452060/ZuCoin/Home/what-is-trim2_dtegvs.png" alt="What is ZuCoin"/>
                                    </div>

                                    {/*<div className="white-paper">*/}
                                    {/*    <h3>public fair launch</h3>*/}

                                    {/*    <p>ZuCoin was publicly launched with no tokens being kept by the development team.</p>*/}

                                    {/*    <a href="https://www.notion.so/Altrucoin-Live-Whitepaper-a46458c7613a4245bf64d240db972759" target="_blank" rel="noreferrer">view whitepaper<i className="icofont-arrow-right"/></a>*/}
                                    {/*</div>*/}
                                </Col>

                                <Col lg="6" className="p-4">
                                    <div className="d-flex flex-column abt-zuCoin">
                                        <h5>The ZuCoin Protocol</h5>

                                        <h2>What is ZuCoin?</h2>

                                        <p>The ZuCoin Protocol (ZuCoin) is a community-driven, frictionless yield-generating token created on the Binance Smart Chain.</p>

                                        <p>The protocol was designed to produce decentralized charitable donations and to provide a safe, appreciating store of value for token holders with strong incentives for long-term investment and a clearly defined use case: trustless defi lending.</p>

                                        <p>Our project combines the established use case of trustless defi lending with the modern tokenomic mechanism of token reflection and a variety of other improvements.</p>

                                        <p className="font-weight-bold">We aim to remove the middlemen (banks) from the lending equation and instead send profits directly to ZuCoin holders and charitable organizations.</p>

                                        <div className="d-flex flex-row">
                                            <a className="hero-btn mr-lg-2">View Whitepaper</a>
                                            <a className="hero-btn ml-lg-2">Buy Now <i className="icofont-dotted-right"/></a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row id="values">
                                <Col lg="2" className="p-1">

                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </section>
        </React.Fragment>
    )
}

export default About;