import React, {useState} from "react";
import {Container} from "react-bootstrap";

const Roadmap = (props) => {
    const [roadmapContent, setRoadmapContent] = useState('Stage zero focuses on building the necessary team for the initial iterations of the project, creating the protocol and testing it thoroughly before launch.');
    const [roadmapHeader, setRoadmapHeader] = useState('Team Building and Testnet Launch');

    function step01() {
        document.getElementById("line-progress").style.width = '3%';
        setRoadmapContent('Stage zero focuses on building the necessary team for the initial iterations of the project, creating the protocol and testing it thoroughly before launch.')
        setRoadmapHeader('Team Building and Testnet Launch')
    }

    function step02() {
        document.getElementById("line-progress").style.width = '23%';
        setRoadmapContent('The goals of stage one are to successfully launch the ZuCoin token on the BSC mainnet, to build our community, to grow our team, and to make our first charitable donation. This including taking steps such as launching our first marketing campaign, hiring new team members, and ensuring that our protocol passes external security audits.')
        setRoadmapHeader('Mainnet Launch')
    }

    function step03() {
        document.getElementById("line-progress").style.width = '43%';
        setRoadmapContent('The primary goal of stage two is to increase our presence on major platforms, media and exchanges, to launch our staking system, and to continue building our community. We aim to reach major milestones for total amount given to charity during this stage.')
        setRoadmapHeader('Marketplace Adoption/Staking V1')
    }

    function step04() {
        document.getElementById("line-progress").style.width = '63%';
        setRoadmapContent('We aim to launch our defi lending protocol and staking protocol during stage three, this will also be where we introduce our fee reduction to increase general usability of the token in a defi setting.')
        setRoadmapHeader('Defi Lending Platform Launch')
    }

    function step05() {
        document.getElementById("line-progress").style.width = '83%';
        setRoadmapContent('With the primary functions of the protocol completed, our next focus will be on decentralization of the protocol and increased governance by the community.')
        setRoadmapHeader('Increased Decentralization')
    }

    function step06() {
        document.getElementById("line-progress").style.width = '100%';
        setRoadmapContent('As the project develops, we expect new technologies to be released that we may want to incorporate into the Altruism Protocol or to build on. Stage five is where we will implement those ideas.')
        setRoadmapHeader('Future Plans')
    }

    return (
        <React.Fragment>
            <section id="timeline" className="pb-5 pt-lg-2">
                <Container>
                    <h1 className="text-center text-white">Roadmap</h1>
                    <div className="process-wrapper">
                        <div id="progress-bar-container">
                            <ul>
                                <li className="step step01" onClick={step01}>
                                    <div className="step-inner">Q1 2021</div>
                                </li>
                                <li className="step step02" onClick={step02}>
                                    <div className="step-inner">Q1 2021</div>
                                </li>
                                <li className="step step03" onClick={step03}>
                                    <div className="step-inner">Q3 2021</div>
                                </li>

                                <li className="step step04" onClick={step04}>
                                    <div className="step-inner">Q4 2021</div>
                                </li>

                                <li className="step step05" onClick={step05}>
                                    <div className="step-inner">Q1 2022</div>
                                </li>

                                <li className="step step06" onClick={step06}>
                                    <div className="step-inner">Q2 2022</div>
                                </li>
                            </ul>

                            <div id="line">
                                <div id="line-progress"/>
                            </div>
                        </div>

                        <div id="progress-content-section">
                            <div className="section-content testnet active">
                                <h2 className="text-white pb-3">{roadmapHeader}</h2>
                                <p>{roadmapContent}</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Roadmap;