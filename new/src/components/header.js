import { Container, Navbar, Nav, Image } from 'react-bootstrap';
import Logo from '../assets/logo.gif';

export default function Header() {
    return (
        <div className='Header shadow'>
            <Navbar collapseOnSelect expand="lg" className="bg-transparent">
                <Container>
                    <Navbar.Brand href="#home" className='text-white fs-5 fw-bold '><Image className='rounded-circle me-2' src={Logo} width="60"/><span className='d-none d-sm-inline'>HermioneMichelleObamaAmyRose10Inu</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto d-flex flex-wrap">
                            <Nav.Link href="#about" className='text-white'>About🌺</Nav.Link>
                            <Nav.Link href="https://app.uniswap.org/#/swap?outputCurrency=0xA56F5c1E2d9B39c3b7153F63BC61596782f8996B" className='text-white'>Buy💝</Nav.Link>
                            <Nav.Link href="https://dexscreener.com/ethereum/0xdf4947b11e9deb5bd0de879765b4f0409e6d91f3" className='text-white'>Chart🌺</Nav.Link>
                            <Nav.Link href="https://t.me/amyrose10inu" className='text-white'>Telegram💖</Nav.Link>
                            <Nav.Link href="https://twitter.com/AmyRose10Inu" className='text-white'>Twitter🌷</Nav.Link>
                            <Nav.Link href="#spectrum" className='text-white'>Spectrum Visualization💖</Nav.Link>
                            <Nav.Link href="" className='text-white' disabled>Cosmic Artifacts🌹</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}