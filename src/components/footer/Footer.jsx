import React from 'react';
import { Col , Container , Row, Form, Dropdown } from "react-bootstrap";
import { GrLinkedin } from "react-icons/gr"
import { FaQuestionCircle } from "react-icons/fa"
import { AiTwotoneSetting } from "react-icons/ai"
import { IoIosArrowDown } from "react-icons/io";




const Footer = () => {
    return (
        <Container fluid className={"text-secondary"}>
            <Row className={''}>
                <div className='titleLink d-flex align-items-center'>
                    <p className={"m-0 p-0 "}>Linked</p><GrLinkedin className={"inIcon"} />
                </div>
            </Row>
            <Row className={"footerSecondaRow d-flex flex-column flex-sm-row justify-content-between"}>
                <Col xs={12} md={6} className={"d-flex flex-wrap justify-content-between"} >
                    <Col className={"m-1"}>
                        <p>Informazioni</p>
                        <p>Talent solutions</p>
                        <p>Carriera</p>
                        <p>
                            <Dropdown >
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className={"footerDrop"}>
                                    Dropdown Button <IoIosArrowDown />
                                </Dropdown.Toggle>

                                <Dropdown.Menu className={"text-center"}>
                                    <Dropdown.Item className={"footerDropMenu"} href="#/action-1">Informativa sulla privacy</Dropdown.Item>
                                    <Dropdown.Item className={"footerDropMenu"} href="#/action-2">Contratto di licenza</Dropdown.Item>
                                    <Dropdown.Item className={"footerDropMenu"} href="#/action-3">Informativa sui cookie</Dropdown.Item>
                                    <Dropdown.Item className={"footerDropMenu"} href="#/action-3">Informativa sui copyright</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </p>

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
                <Col xs={12} sm={6} className={"d-flex flex-column ps-3 ps-md-5 align-items-start"}>
                    <Col xs={12}>
                        <Col xs={12} className={"d-flex align-items-start"}>
                            <Col xs={1} className={"text-center pt-1 pe-1"}>
                                <FaQuestionCircle className={"footerIconDomande"}/>
                            </Col>

                            <Col xs={9}>
                                <p className={"m-0 footerDomande"}>Domande?</p>
                                <p className={"footerTestoSecondario"}>Visita il nostro centro assistenza</p>
                            </Col>
                        </Col>
                        <Col xs={12} className={"d-flex align-items-start"}>
                            <Col xs={1} className={"text-center pt-1 pe-1"}>
                                <AiTwotoneSetting className={"footerIconGestisci"}/>
                            </Col>
                            <Col xs={9}>
                                <p className={"m-0 footerGestisci"}>Gestisci il tuo account e la tua privacy</p>
                                <p className={"footerTestoSecondario"}>Vai alle impostazioni</p>
                            </Col>
                        </Col>
                    </Col>
                    <Col xs={12} >
                        <p className={""}>Seleziona lingua</p>
                        <Col xs={12} className={"d-none d-md-block"}>
                            <Form.Select >
                                <option>Italiano (Italiano)</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                    </Col>
                </Col>
                <Col xs={12} className={"d-md-none"}>
                    <p >Seleziona lingua</p>
                    <Col xs={12}>
                        <Form.Select >
                            <option>Italiano (Italiano)</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                </Col>
            </Row>

            <small>Linkedin corporation &copy; 2022</small>
        </Container>

    );
}

export default Footer;