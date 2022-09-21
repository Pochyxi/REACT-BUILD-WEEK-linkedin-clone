import { Col, Container, Row } from "react-bootstrap"
import CardAziende from "./CardAziende"
import CardCompetenze from "./CardCompetenze"
import CardPersone from "./CardPersone"
import CardProfile from "./CardProfile"

const Profile = () => {
    return (
        <Container fluid>
            <Row className="justify-content-center align-items-start  flex-column flex-md-row flex-nowrap px-4 pt-3 pb-2">
                <Col className="ProfilePrincipale" >
                    <CardProfile />
                </Col>
                <Col className="ProfileSecondaria" >
                    <CardAziende />
                </Col>
            </Row>
            <Row className="justify-content-center align-items-start flex-column flex-md-row flex-nowrap px-4 pt-3 pb-2">
                <Col className="ProfilePrincipale" >
                    <CardCompetenze />
                </Col>
                <Col className="ProfileSecondaria" >
                    <CardPersone />
                </Col>
            </Row>
        </Container>
    )
}

export default Profile