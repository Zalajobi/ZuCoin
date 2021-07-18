import React, {useState} from "react";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
const Web3 = require('web3')

const Header = (props) => {
    let account;

    async function connectMetamask() {
        // Modern Browsers like Chrome and Brave
        if (window.ethereum) {
            try {
                // Request account access
                await window.ethereum.enable();
            } catch (error) {
                // User denied account access...
                alert('You must connect your wallet !')
                return;
            }
        }else {
            // you cant connect
            console.error("Unable to connect to metamask");
            alert("You have to use Trustwallet app or install Metamask extension in your browser to use this app, you can install it from :  https://metamask.io/download.html");
            return;
        }
        let web3 = new Web3(window.ethereum);
        let accounts = await web3.eth.getAccounts();
        account = accounts[0];

        setWallet(account)
        localStorage.setItem('address', account);
    }

    const [wallet, setWallet] = useState('Connect Wallet');

    return (
        <React.Fragment>
            <Navbar fixed="top" expand="lg" className="header-background">
                <Container>
                    <Navbar.Brand href="#home">ZuCoin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link className="mx-2 text-center" href="/">Home</Nav.Link>
                            <Nav.Link className="mx-2 text-center" href="#about">About</Nav.Link>
                            <Nav.Link className="mx-2 text-center" href="#timeline">Roadmap</Nav.Link>
                            <Nav.Link className="mx-2 text-center" href="/dashboard">Dashboard</Nav.Link>

                            <a onClick={connectMetamask} className="connect-wallet-button mx-2 text-center d-flex align-items-center">{wallet}</a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}

export default Header