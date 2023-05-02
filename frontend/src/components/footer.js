import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaTelegramPlane, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="Footer ">
            <Container>
            <hr className="text-white"/>
                <Row className="my-4 pb-3">
                    <Col sm={8} md={3} className="d-flex align-items-center justify-content-around mx-auto">
                        <NavLink to="https://t.me/+PP6lgpXVqjIwNmNh" className="nav-link text-white text-center"><FaTelegramPlane className="fs-2"/></NavLink>
                        <NavLink to="https://twitter.com/goooooooots" className="nav-link text-white text-center"><FaTwitter className="fs-2"/></NavLink>
                        <NavLink to="mailto:goots@goooooooots.com" className="nav-link text-white text-center"><FaEnvelope className="fs-2"/></NavLink>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}