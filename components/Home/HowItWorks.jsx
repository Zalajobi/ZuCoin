import React from "react";
import {Container, Row} from "react-bootstrap";
import HowItWorksItem from "./HowItWorksItem";

const HowItWorks = (props) => {
    return (
        <React.Fragment>
            <section id="howitworks" className="py-4">
                <Container>
                    <h1 className="text-white text-center pb-3">How it Works</h1>

                    <Row>
                        <HowItWorksItem header="Frictionless Yield Generation"
                                        image="https://res.cloudinary.com/zalajobi/image/upload/v1626548414/ZuCoin/Home/How%20It%20Works/Screenshot_2021-07-17_at_19.55.17_c9tput.png"
                                        desc="5% of every transaction is distributed proportionally to the wallets of all holders of ZuCoin."/>

                        <HowItWorksItem header="Deflationary Tokenomics"
                                        image="https://res.cloudinary.com/zalajobi/image/upload/v1626548414/ZuCoin/Home/How%20It%20Works/Screenshot_2021-07-17_at_19.55.24_qod71i.png"
                                        desc="ZuCoin implements features such as token burning and locked liquidity pooling, ensuring that the token remains deflationary."/>

                        <HowItWorksItem header="Automatic Liquidity Pooling"
                                        image="https://res.cloudinary.com/zalajobi/image/upload/v1626548414/ZuCoin/Home/How%20It%20Works/Screenshot_2021-07-17_at_19.55.31_qzg1yq.png"
                                        desc="Our smart contract automatically deposits a portion of every transaction into a locked liquidity pool."/>

                        <HowItWorksItem header="Charity Voting"
                                        image="https://res.cloudinary.com/zalajobi/image/upload/v1626548414/ZuCoin/Home/How%20It%20Works/Screenshot_2021-07-17_at_19.55.42_fjxfvt.png"
                                        desc="A portion of all transactions goes to a dedicated charity wallet. Holders can vote on which charities should receive donations from the charity wallet at vote.altrucoin.io."/>

                        <HowItWorksItem header="Decentralized Governance"
                                        image="https://res.cloudinary.com/zalajobi/image/upload/v1626548414/ZuCoin/Home/How%20It%20Works/Screenshot_2021-07-17_at_19.55.47_yxi2tn.png"
                                        desc="ZuCoin was created for decentralized governance from the start. All protocol wallets are controlled via Multisig and our roadmap shows our plan for full decentralization."/>

                        <HowItWorksItem header="Defi Lending/Staking"
                                        image="https://res.cloudinary.com/zalajobi/image/upload/v1626548414/ZuCoin/Home/How%20It%20Works/Screenshot_2021-07-17_at_19.55.54_vsaijn.png"
                                        desc="The Altruism Protocol's long term use case is to become a decentralized lending platform that rewards users for staking tokens. You can learn more from our live roadmap and whitepaper."/>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default HowItWorks;