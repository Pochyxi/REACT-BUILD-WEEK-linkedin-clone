import {Col, Container, Row} from "react-bootstrap";
import './Footer.css';


const MyFooter = () => {
    return (
        <div className="Footer">
            <Container className="container">
                <Row>
                <li className="svgLink">LinkedIn</li>
                </Row>
                <Row  md={2} className="grid">
                    <Col>
                        <li>Informazioni</li>
                        <li>Talent Solutions</li>
                        <li>Carriera</li>
                        <li class="dropdown">
                            <span>Privacy e codizioni</span>
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Chevron Down</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144"/></svg>
                            </span>
                                <div className="dropdown-content">
                                     <p>Informativa sulla privacy</p>
                                     <p>Contatto di licenza</p>
                                     <p>Informativa sui cookie</p>
                                     <p>Informativa sul copyright</p>
                                </div>
                        </li>
                        <li>Pubblicità</li>
                        <li>Mobile</li>
                        <li>Centro sicurezza</li>
                    </Col>
                    <Col>
                        <li>Accessibilità</li>
                        <li>Linee guida della community</li>
                        <li>Soluzioni di marketing</li>
                        <li>Opzioni di annuncio</li>
                        <li>Sales Solutions</li>
                        <li>Piccole imprese</li>
                    </Col>
                </Row>
                <Row>
                    <Col className="iconSec">
                        <ul><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Help Circle</title><path d="M256 80a176 176 0 10176 176A176 176 0 00256 80z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45 10 4.76 29.47 16.38 29.47 41.09 0 26-17 37.81-36.37 50.8S251 281.43 251 296" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="28"/><circle cx="250" cy="348" r="20"/></svg>
                             <li>Domande?</li>
                             <li>Visita il nostro Centro assistenza</li>
                        </ul>
                        <ul><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Settings</title><path d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
                             <li>Domande?</li>
                             <li>Visita il nostro Centro assistenza</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                <Col>
                    <li>Seleziona lingua</li>
                    <li>
                        <select name="lingua" id="">
                            <option value="italiano">italiano</option>
                            <option value="italiano">inglese</option>
                            <option value="italiano">francese</option>
                        </select>
                    </li>
                    <li>LinkedIn Corporation &copy;2022</li>
                </Col>
                </Row>
            </Container>
        </div>
    )}

export default MyFooter;