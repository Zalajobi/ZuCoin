import React, {useEffect, useState} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import axios from "axios";
import CountUp from "react-countup";

const Tokenomics = (props) => {

    const [supply, setSupply] = useState(0);
    const [maxLiquidity, setMaxLiquidity] = useState('');
    const [liquidityFee, setLiquidityFee] = useState('');
    const [taxFee, setTaxFee] = useState('');
    const [maxTxAmount, setMaxTxAmount] = useState('');
    const [maxTaxFee, setMaxTaxFee] = useState('');
    const [maxWalletSize, setMaxWalletSize] = useState('');
    const [name, setName] = useState('');
    const [symbol, setSymbol] = useState('');

    useEffect(() => {
        getValues()
    });

    async function getValues() {
        let coinSupply = await axios.get('https://zucoin.herokuapp.com/totalsupply')
        let maxLiquid = await axios.get('https://zucoin.herokuapp.com/maxliquidity')
        let taxFee = await axios.get('https://zucoin.herokuapp.com/taxFee')
        let maxTaxFee = await axios.get('https://zucoin.herokuapp.com/maxTaxFee')
        let liquidityFee = await axios.get('https://zucoin.herokuapp.com/liquidityfee')
        let maxTxAmount = await axios.get('https://zucoin.herokuapp.com/maxTxAmount')
        let maxWalletSize = await axios.get('https://zucoin.herokuapp.com/maxWalletSize')
        let name = await axios.get('https://zucoin.herokuapp.com/name')
        let symbol = await axios.get('https://zucoin.herokuapp.com/symbol')




        setSupply(coinSupply.data)
        setMaxLiquidity(maxLiquid.data)
        setTaxFee(taxFee.data)
        setMaxTaxFee(maxTaxFee.data)
        setLiquidityFee(liquidityFee.data)
        setMaxTxAmount(maxTxAmount.data)
        setMaxWalletSize(maxWalletSize.data)
        setName(name.data)
        setSymbol(symbol.data)
    }

    return (
        <React.Fragment>
            <section id="tokenomics" className="pt-3 pb-5">
                <Container>
                    <Row>
                       <Col lg="6" className="p-3">
                           <div className="tokenomics-left p-4">
                               <div className="d-flex flex-column">
                                   <h5>Official Contract Address:</h5>
                                   <p>0x7d6d0aa59fcab13140604dc122bf310bd72c00a1</p>
                               </div>

                               <p><i className="icofont-dotted-right"/>Name: {name}</p>
                               <p><i className="icofont-dotted-right"/>Symbol: {symbol}</p>
                               <p><i className="icofont-dotted-right"/>Total Supply: <CountUp end={supply} duration={5} separator=","/></p>
                               <p><i className="icofont-dotted-right"/>Tax Fee: <CountUp end={taxFee} duration={5}/>%</p>
                               <p><i className="icofont-dotted-right"/>Maximum Tax Fee: <CountUp end={maxTaxFee} duration={5}/>%</p>
                               <p><i className="icofont-dotted-right"/>Liquidity Fee: <CountUp end={liquidityFee} duration={5}/>%</p>
                               <p><i className="icofont-dotted-right"/>Maximum Liquidity Fee: <CountUp end={maxLiquidity} duration={5}/>%</p>
                               <p><i className="icofont-dotted-right"/>Maximum Transaction Amount: <CountUp end={maxTxAmount} duration={5} separator=","/></p>
                               <p><i className="icofont-dotted-right"/>Maximum Token in a Wallet: <CountUp end={maxWalletSize} duration={5} separator=","/></p>
                           </div>
                       </Col>

                        <Col lg="6" className="p-3">
                            <div className="w-100" style={{height: '449px'}}>
                                <Image alt="Tokenomics Details" src="https://res.cloudinary.com/zalajobi/image/upload/v1626615410/ZuCoin/Home/fee-distribution-1536x2048_nsas6v.jpg" className="w-100 h-100"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    )
}

export default Tokenomics;