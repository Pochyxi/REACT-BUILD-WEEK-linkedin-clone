import { Col, Container, Row } from "react-bootstrap"
import CardProfile from "./CardProfile"

const Profile = () => {
    return (
        <Container fluid>
            <Row className="justify-content-center flex-nowrap px-4 pt-3 pb-2">
                <Col className="ProfilePrincipale" >
                    <CardProfile />
                </Col>
                <Col className="ProfileSecondaria" >
                    <h2>qui va la sezione secondaria</h2>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile