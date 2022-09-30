import React from 'react';
import './Footer.css';
import { Col , Container , Row } from "react-bootstrap";




const Footer = () => {
    return (
        <Container fluid>
            <Row className={''}>
                <div className='titleLink'>
                    <h4>LINKEDIN</h4>
                </div>
            </Row>
            <Row className={"d-flex flex-column flex-sm-row justify-content-between"}>
                <Col xs={12} md={6} className={"d-flex flex-wrap justify-content-between"} >
                    <Col>
                        <p>Informazioni</p>
                        <p>Talent solutions</p>
                        <p>Carriera</p>
                        <p>Privacy e condizioni</p>
                        <p>Pubblicità</p>
                        <p>Mobile</p>
                        <p>Centro sicurezza</p>
                    </Col>
                    <Col xs={6} md={8} className={"d-flex flex-column flex-md-row justify-content-between"}>
                        <Col xs={12} md={6} className={"m-1"}>
                            <p>Accessibilità</p>
                            <p>Linee guida della community</p>
                            <p>Soluzioni di marketing</p>
                        </Col>
                        <Col xs={12} md={6} className={"m-1"}>
                            <p>Opzioni di annuncio</p>
                            <p>Sales Solutions</p>
                            <p>Piccole imprese</p>
                        </Col>
                    </Col>
                </Col>
                <Col xs={12} sm={6} className={"d-flex flex-column ps-5"}>
                        <p>Domande?</p>
                        <p>Visita il nostro centro assistenza</p>
                        <p>Gestisci il tuo account e la tua privacy</p>
                        <p>Vai alle impostazioni</p>
                </Col>
            </Row>
            <small>Linkedin corporation &copy; 2022</small>
        </Container>

    );
}

export default Footer;