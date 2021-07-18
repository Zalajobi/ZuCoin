import React, {useEffect, useState} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import axios from "axios";


const DashboardContent = (props) => {

    const [name, setName] = useState('');
    const [symbol, setSymbol] = useState('');
    const [balance, setBalance] = useState('');
    const [chargeableFee, setChargeableFee] = useState('');
    const [reward, setReward] = useState('');
    let address;

    async function getCoinValues() {
        let coinName = await axios.get('https://zucoin.herokuapp.com/name');
        let coinSymbol = await axios.get('https://zucoin.herokuapp.com/symbol')
        let walletBalance = await axios.get(`https://zucoin.herokuapp.com/balance?address=${address}`)
        let chargeableFee = await axios.get(`https://zucoin.herokuapp.com/chargeableFee?address=${address}`)
        let rewardExclusion = await axios.get(`https://zucoin.herokuapp.com/rewardExclusion?address=${address}`)


        setSymbol(coinSymbol.data)
        setName(coinName.data)
        setBalance(walletBalance.data)
        setChargeableFee(chargeableFee.data === true ? 'Fee Applicable on Next Transaction' : 'No Fee Applicable on Next Transaction')
        setReward(rewardExclusion.data === true ? 'You are Excluded from the reward system' : `You can actively accumulate ${name}`)
    }


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(
        getCoinValues
    );

    useEffect(() => {
        address = localStorage.getItem('address');
    });

    useR



    return (
        <React.Fragment>
            <div id="dashboard" className="pt-5">
                <Container className="pt-5">
                    <div className="pt-3 pb-5">
                        <Row>
                            <Col lg="4" className="p-3 token-info-col">
                                <div className="d-flex flex-column align-items-center p-3">
                                    <div style={{width: '75px', height: '75px'}} className="mb-4">
                                        <Image src="https://res.cloudinary.com/zalajobi/image/upload/v1626628538/ZuCoin/Home/money-transfer-icon-vector-21080026_llisef.png" alt="Wallet PNG" className="w-100 h-100"/>
                                    </div>
                                    <h2 className="text-center">Your {name} Balance is</h2>
                                    <h4 className="text-white text-center">{balance}</h4>
                                </div>
                            </Col>

                            <Col lg="4" className="p-3 token-info-col">
                                <div className="d-flex flex-column align-items-center p-3">
                                    <i className="icofont-exchange text-center mb-4" style={{fontSize: '75px', color: '#2379be'}}/>
                                    <h4 className="text-white text-center text-capitalize">{chargeableFee}</h4>
                                </div>
                            </Col>

                            <Col lg="4" className="p-3 token-info-col">
                                <div className="d-flex flex-column align-items-center p-3">
                                    <i className="icofont-exchange text-center mb-4" style={{fontSize: '75px', color: '#2379be'}}/>
                                    <h4 className="text-white text-center text-capitalize">{reward}</h4>
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