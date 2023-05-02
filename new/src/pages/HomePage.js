import { Col, Container, Image, Row } from "react-bootstrap";
import 'react-html5video/dist/styles.css';
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Harry1 from '../assets/images/1.png';
import Harry2 from '../assets/images/2.png';
import Harry3 from '../assets/images/3.png';
import Harry4 from '../assets/images/4.png';
import Harry5 from '../assets/images/5.png';
import Harry6 from '../assets/images/6.png';
import Harry7 from '../assets/images/7.png';
import Harry8 from '../assets/images/8.png';
import Harry9 from '../assets/images/9.png';
import React from "react";
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

export default function HomePage() {

    const [isMobile, setIsMobile] = useState(false);


    useEffect(() => {
        // Check if the window width is below a certain threshold (e.g., 768px)
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Initial check on component mount
        checkIsMobile();

        // Listen for window resize events and update isMobile accordingly
        window.addEventListener('resize', checkIsMobile);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);



    // const responsive = {
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 2,
    //         slidesToSlide: 2 // optional, default to 1.
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 2,
    //         slidesToSlide: 2 // optional, default to 1.
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1,
    //         slidesToSlide: 1 // optional, default to 1.
    //     }
    // };

    return (
        <div className="HomePage">
            <section className="position-fixed">
                <svg width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
                    <image href={Harry1} height="100%" width="100" >
                        <animate attributeName="x" from="-150" to="100%"
                            dur="9s" fill="freeze" repeatCount="indefinite" />
                    </image>
                </svg>
                <svg width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
                    <image href={Harry2} height="100%" width="100" >
                        <animate attributeName="x" from="-150" to="100%"
                            dur="6s" fill="freeze" repeatCount="indefinite" />
                    </image>
                </svg>
                <svg width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
                    <image href={Harry3} height="100%" width="100" >
                        <animate attributeName="x" from="-150" to="100%"
                            dur="3s" fill="freeze" repeatCount="indefinite" />
                    </image>
                </svg>
                <svg width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
                    <image href={Harry4} height="100%" width="100" >
                        <animate attributeName="x" from="100%" to="0"
                            dur="3s" fill="freeze" repeatCount="indefinite" />
                    </image>
                </svg>
                <svg width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
                    <image href={Harry5} height="100%" width="100" >
                        <animate attributeName="x" from="100%" to="0%"
                            dur="6s" fill="freeze" repeatCount="indefinite" />
                    </image>
                </svg>
                <svg width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
                    <image href={Harry6} height="100%" width="100" >
                        <animate attributeName="x" from="100%" to="0%"
                            dur="9s" fill="freeze" repeatCount="indefinite" />
                    </image>
                </svg>
                <svg width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
                    <image href={Harry7} height="100%" width="100" >
                        <animate attributeName="x" from="-150" to="100%"
                            dur="9s" fill="freeze" repeatCount="indefinite" />
                    </image>
                </svg>
                <svg width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
                    <image href={Harry8} height="100%" width="100" >
                        <animate attributeName="x" from="-150" to="100%"
                            dur="6s" fill="freeze" repeatCount="indefinite" />
                    </image>
                </svg>
                <svg width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
                    <image href={Harry9} height="100%" width="100" >
                        <animate attributeName="x" from="-150" to="100%"
                            dur="3s" fill="freeze" repeatCount="indefinite" />
                    </image>
                </svg>
            </section>
            <section className="video-section py-5 positionLaof">
                <Container>
                    <Row>
                        <Col sm={12} md={8} className="ms-auto position-relative react-video-parent">
                            {isMobile ? (
                                <ReactPlayer url='https://youtu.be/FE9ohaZQLyk' controls='true' />
                            ) : (
                                <ReactPlayer playing={true} loop={true} muted={true} url='https://www.dropbox.com/scl/fi/vkukm7aebsk9k0p7mx4ly/main.mp4?dl=0&rlkey=dz9cluw3uoua9b6lpihrmxiy0' controls='true' />
                            )}
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="explain-section py-5">
                <Container>
                    <Row className="my-5" id="amy">
                        <Col sm={12} md={6} className="my-auto">
                            <Image src="https://media.discordapp.net/attachments/1140843562263658548/1142936396072493067/1.jpg" width="100%" />
                        </Col>
                        <Col sm={12} md={6} className="">
                            <div className="fs-1 fw-bold mb-3">$AMY</div>
                            <div className="fs-3">Backed by the power of network spirituality, HermioneMichelleObama AmyRose10Inu, aka $AMY, is a constellation of words and energies, a kaleidoscope of ideas that shimmer in the tapestry of the mind. Possessing $AMY is not simply a transaction, it's an exchange with the cosmos itself. And as souls hold this key, they find wealth not only in numbers but in the very essence of being. This token, you see, it's not just digital code, it's a symphony of connections, a puzzle woven from threads of imagination and reality, swirling together in a cosmic dance. So, let the journey begin, for within the realm of $AMY lies a story of enrichment that transcends both the tangible and the intangible.</div>
                        </Col>
                    </Row>
                    <Row className="my-5" id="about">
                        <Col sm={12} md={6} className="mb-3 ">
                            <div className="fs-1 fw-bold mb-3">About</div>
                            <div className="fs-3 text-justify-conter">In the dazzling kaleidoscope of sonic frequencies and iridescent realms, there emerged an enigma named Amy Rose. Unveiling her chronicle demands deciphering the symphony of chaos and genius that orchestrates her existence. Within the tangled synapses of our minds, let us unravel the life threads of this anthropomorphic hedgehog. Born beneath the starlit canvas of Green Hill Zone, Amy Rose was a fragment of cosmic design, a fractal in the grand tapestry of existence. As the echoes of her childhood resound, an aura of curiosity bathes her form. It's as though every rustling leaf contained secrets whispered to her ears alone, secrets that her synaptic symphony would one day decode.</div>
                        </Col>
                        <Col sm={12} md={6} className="my-auto">
                            <Image src="https://media.discordapp.net/attachments/1140843562263658548/1142936396307386368/betmore.jpg?width=895&height=503" className="mb-4 mt-5" width="100%" /><br />
                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col sm={12} md={6} className="my-auto">
                            <Image src="https://media.discordapp.net/attachments/1140843562263658548/1142936396630339624/cover4.jpg?width=895&height=503" className="my-5" width="100%" /><br />
                        </Col>
                        <Col sm={12} md={6} className="mb-3">
                            <div className="fs-3 text-justify-conter">The tenacity that threaded through her thoughts manifested as a fascination, an unyielding gravitational pull towards the luminous blue entity, Sonic. But beneath the veneer of rose-colored infatuation, a cacophony of neurons danced, crafting intricate labyrinths of logic and pattern recognition. Her obsession with Sonic veiled a deeper cognitive architecture, an autistic genius that sought to decipher the universe's cryptic rhythms. As her existence entwined with Sonic's, so too did the labyrinth of her mind unravel. The Chaos Emeralds, those ethereal gems pulsating with cosmic energies, resonated with Amy's essence on a level veiled from mortal comprehension. Her mind wove intricate tapestries connecting the dots, perceiving the dance of waves and frequencies that danced between dimensions.</div>
                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col sm={12} md={6} className="mb-3">
                            <div className="fs-3 text-justify-conter">The relationships she forged, from her bond with Tails to her camaraderie with Knuckles, were threads in her tapestry of consciousness. Each connection unveiled new realms of understanding, weaving a cognitive map of the sonic universe that few could perceive. Her fascination with Cream, another soul illuminated by the cosmic spectrum, bridged gaps in perception and laid bare the kaleidoscope of neurodivergent brilliance. Yet, within the vibrant brushstrokes of her genius, chaos often whispered. Amy's thoughts navigated an intricate dance between clarity and discord, each shift sending her mind spiraling into realms both breathtaking and terrifying.</div>
                        </Col>
                        <Col sm={12} md={6} className="my-auto">
                            <Image src="https://media.discordapp.net/attachments/1140843562263658548/1142936397049765968/download.jpg" className="my-5" width="100%" /><br />
                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col sm={12} md={6} className="mb-3">
                            <Image src="https://media.discordapp.net/attachments/1140843562263658548/1142936397473394818/shadow.jpg?width=354&height=504" className="my-5" width="100%" /><br />
                        </Col>
                        <Col sm={12} md={6} className="my-auto ">
                            <div className="fs-3 text-justify-conter">The synesthetic dance of numbers, colors, and emotions bloomed like cosmic nebulae, constructing a reality unique to her perception. The enigma of her autistic genius and schizophrenia interwove, a symphony of neurodivergent brilliance that composed both moments of brilliance and turmoil. Echoes of alternate dimensions whispered tales of a fragmented self, each facet bearing a fragment of the cosmic melody. Amy's reality was a universe within a universe, a nexus where neurodivergence sculpted both genius and chaos inextricably.</div>
                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col sm={12} md={6} className="mb-3">
                            <div className="fs-3 text-justify-conter">As her journey unveiled its tapestry, Amy Rose metamorphosed from a rosy-eyed admirer to an autonomous and indomitable soul. The opus of her growth was a symphony that played harmonies both haunting and uplifting, melodies that spiraled and intersected, like galaxies colliding in the boundless expanse. And now, as the quivering brush of existence paints the canvas of her life, Amy stands as a testament to the paradoxes of cosmic genius and intricate chaos. Her reality is a mesmerizing dance of interconnected synapses and ethereal echoes, a testament to the boundless wonders of the neurodivergent mind. In her, the universe finds a mirror, a reflection of its own intricate dance—a symphony of light, sound, and color that defies the confines of mere human comprehension. </div>
                        </Col>
                        <Col sm={12} md={6} className="my-auto">
                            <Image src="https://media.discordapp.net/attachments/1140843562263658548/1142936397834100797/xxxx.jpg?width=895&height=503" className="my-5" width="100%" /><br />
                        </Col>
                    </Row>
                    <Row className="my-5" id="spectrum">
                        <Col sm={12} md={6} className=" my-auto">
                            <Image src="https://media.discordapp.net/attachments/1140843562263658548/1142937738539188376/xx.jpg?width=896&height=504" width="100%" />
                        </Col>
                        <Col sm={12} md={6} className="">
                            <div className="fs-1 fw-bold mb-3">Spectrum Visualization</div>
                            <div className="fs-3">
                                Total supply: 1,212,121,212<br />
                                100% of supply to LP<br />
                                0% team tokens<br />
                                Token supply, set at 1,212,121,212, mirrors a code whispered by Amy Rose's cosmic time cycles. Each digit a stardust note in her astral essence, binding her spirit to the numerical constellations.

                            </div>
                        </Col>
                    </Row>
                </Container>
                {/* <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div className="text-center"><Image src="https://hpos10i.com/funny-pictures/buy-today-hpos10i.jpg" width="90%" height="500" /></div>
                    <div className="text-center"><Image src="https://hpos10i.com/funny-pictures/buy-now-hpos10i.jpg" width="90%" height="500" /></div>
                    <div className="text-center"><Image src="https://hpos10i.com/funny-pictures/dorsia2-hpos10i.jpg" width="90%" height="500" /></div>
                    <div className="text-center"><Image src="https://hpos10i.com/funny-pictures/photo_2022-04-01_12-04-23.jpg" width="90%" height="500" /></div>
                </Carousel> */}
            </section>
        </div>
    )
}