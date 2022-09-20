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
                        <li>Privacy e codizioni</li>
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
                        <ul><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Help Circle</title><path d="M256 80a176 176 0 10176 176A176 176 0 00256 80z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"/><path d="M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45 10 4.76 29.47 16.38 29.47 41.09 0 26-17 37.81-36.37 50.8S251 281.43 251 296" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="28"/><circle cx="250" cy="348" r="20"/></svg>
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