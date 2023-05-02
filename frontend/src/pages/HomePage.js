import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Image, InputGroup, Form } from "react-bootstrap";
import { Banner } from '../assets';
import { useConnect } from '../contexts/contexts';
import { toast } from 'react-toastify';
import Contract_Abi from '../utils/abi.json';
import { ethers, BigNumber } from "ethers";

const Contract_address = process.env.REACT_APP_CONTRACT_ADDRESS;

export default function HomePage() {
    const [value, setValue] = useState(1);

    const { isConnected, provider, totalMintNum, publicSalePrice, wallet } = useConnect();

    const [totalMintNumber, setTotalMintNumber] = useState();

    useEffect(() => {
        setTotalMintNumber(totalMintNum);
    }, [totalMintNum])

    function incrementCount() {
        let _value = value*1 + 1;
        setValue(_value);
        if (_value >= 10000) {
            setValue(10000);
            toast.warn("This field cannot exceed 10000!")
        } else {
            setValue(_value);
        }

    }
    function decrementCount() {
        let _value = value*1 - 1;
        if (_value >= 1) {
            setValue(_value);
        } else {
            setValue(1);
        }

    }


    const mintNFT = async () => {
        if (!isConnected) {
            toast.info("Please Connect Wallet!");
            return;
        } else {
            const balance = wallet.accounts[0].balance;
            const cost = ethers.utils.parseEther((publicSalePrice * value).toString());
            const balance_i = Number(balance.ETH);
            const cost_i = Number(publicSalePrice) * value;
            if (balance_i >= cost_i) {
                const signer = provider.getSigner();
                const contract = new ethers.Contract(
                    Contract_address,
                    Contract_Abi.abi,
                    signer
                );
                try {
                    const response = await contract.clientMint(BigNumber.from(value), {
                        value: cost,
                    });
                    toast.success("Transaction started... Wait a few seconds.");
                    response.wait().then( async (res) => {
                        toast.success("Transaction completed.");
                        const _totoalMintNum = parseInt(await contract.getTotalMintNumber());
                        setTotalMintNumber(_totoalMintNum);
                    });
                } catch (err) {
                    toast.warn("Transaction rejected.\n" + err.code);
                }
            } else {
                toast.warn("Insufficient balance!", ethers.utils.parseEther((publicSalePrice * value).toString()));
                return
            }

        }
    }

    const changeValue = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className="HomePage">
            <Container>
                <Row className='my-5 py-5'>
                    <Col sm={12} md={6} className='mb-2'>
                        <div className='text-center'>
                            <Image src={Banner} width="80%" className='rounded-5 border border-5 me-auto egg-banner' />
                        </div>
                    </Col>
                    <Col sm={12} md={6} className='mb-2 d-flex flex-column justify-content-center aligin-items-center'>
                        <div className='text-white text-center fs-2 mb-3 title-fs'>Total Prize Pool: <span className='text-pop title-fs fs-1'>{totalMintNumber * publicSalePrice}</span> ETH</div>
                        <div className='text-white text-center fs-3 mb-3 title-fs'>Mint Price: <span className='text-pop title-fs fs-1'>{(publicSalePrice)}</span> ETH</div>

                        <Col sm={10} md={6} className='mx-auto'>
                            <InputGroup>
                                <Button variant="outline-secondary" id="button-addon1" className='fs-1 px-4 text-white title-fs border-1 border-white' onClick={decrementCount}>
                                    -
                                </Button>
                                <Form.Control
                                    aria-label="Example text with button addon"
                                    aria-describedby="basic-addon1"
                                    className='text-center fs-2 text-pop title-fs'
                                    type='number'
                                    value={value}
                                    onChange={changeValue}
                                />
                                <Button variant="outline-secondary" id="button-addon1" className='fs-1 title-fs px-4 text-white border-1 border-white' onClick={incrementCount}>
                                    +
                                </Button>
                            </InputGroup>
                        </Col>


                        {isConnected ? (
                            <Row className='mt-3'>
                                <p className='text-white mb-3 text-center title-fs'>Participants must hold 50M $GOOTS tokens to mint</p>
                                <Col sm={12} md={6} className='mb-2 mx-auto'>
                                    <Button className="mint-button py-2 px-4 title-fs rounded-5 border-white border-2 w-100" onClick={mintNFT}>Mint Now</Button>
                                </Col>
                            </Row>
                        ) : (
                            <Row className='mt-3'>
                                <p className='text-white mb-3 text-center title-fs'>Participants must hold 50M $GOOTS tokens to mint</p>
                                <Col sm={12} md={6} className='mb-2 mx-auto'>
                                    <Button className="mint-button py-2 px-4 title-fs rounded-5 border-white border-2 w-100" onClick={mintNFT}>Mint Now</Button>
                                </Col>
                            </Row>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}