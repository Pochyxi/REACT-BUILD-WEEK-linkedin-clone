import { Col, Container, Row } from "react-bootstrap";
import CardPost from "./CardPost";
import CardPubblicità from "./CardPubblicità";
import CardCreaPost from "./CardCreaPost";
import CardProfiloHome from "./CardProfiloHome";

const HomeComponent = () => {
  return (
    <Container>
      <Row className="justify-content-center flex-nowrap px-4 pt-3 pb-2">
        <Col xs={3}>
        <CardProfiloHome/>
        </Col>
        <Col xs={6}>
        <CardCreaPost/>
        <CardPost />
        </Col>
        <Col xs={3}>
        <CardPubblicità />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeComponent;
