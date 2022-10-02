import { Col, Container, Row } from "react-bootstrap"
import { FaUserAlt } from 'react-icons/fa'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetchUser } from "../../redux/actions/actions"

const LoginComponent = () => {

    const navigate = useNavigate()//navigazione

    const dispatch = useDispatch()// REDUX

    //RENDER
    return (
        <Container fluid>
            <Row className="d-flex flex-column flex-lg-row justify-content-between">
                <Col xs={12} lg={6} className='pt-5 ps-4'>
                    <p className="loginText pt-5">Unisciti alla più grande community professionale</p>
                    <Row className="pt-5 text-center justify-content-between">
                        <Col
                            onClick={() => {
                                setTimeout(() => {
                                    navigate('/home')
                                }, 500);
                                dispatch(fetchUser(process.env.REACT_APP_ADIENERTOKEN));

                            }}
                            xs={3}
                            className="loginUser">
                            <FaUserAlt />
                            <p>Adiener</p>
                        </Col>
                        <Col
                            onClick={() => {
                                setTimeout(() => {
                                    navigate('/home')
                                }, 500);
                                dispatch(fetchUser(process.env.REACT_APP_MANUELTOKEN));

                            }}
                            xs={3}
                            className="loginUser">
                            <FaUserAlt />
                            <p>Manuel</p>
                        </Col>
                        <Col
                            onClick={() => {
                                setTimeout(() => {
                                    navigate('/home')
                                }, 500);
                                dispatch(fetchUser(process.env.REACT_APP_RUBENTOKEN));

                            }}
                            xs={3}
                            className="loginUser">
                            <FaUserAlt />
                            <p>Ruben</p>
                        </Col>
                    </Row>
                </Col>
                <Col className="loginLogoCol" xs={12} lg={6}>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginComponent