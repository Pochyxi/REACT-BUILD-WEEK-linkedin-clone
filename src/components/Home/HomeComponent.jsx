import { Col, Container, Row } from "react-bootstrap";
import CardPost from "./CardPost";
import CardProfile from "../profilo/CardProfile";
import CardPubblicità from "./CardPubblicità";
import CardCreaPost from "./CardCreaPost";

const HomeComponent = () => {
  return (
    <Container>
      <Row className="justify-content-center flex-nowrap px-4 pt-3 pb-2">
        <Col xs={3}>
        <CardProfile/>
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
