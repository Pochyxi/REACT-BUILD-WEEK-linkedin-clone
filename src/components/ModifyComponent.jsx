import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardCompetenze from './profilo/CardCompetenze'
import CardAziende from './profilo/CardAziende';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ModifyComponent = () => {
  const user = useSelector(state => state.user.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user.name) {
      navigate('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <Container fluid>
      <Row className="justify-content-center flex-nowrap px-4 pt-3 pb-2">
        <Col className="ProfilePrincipale" >
          <CardCompetenze />
        </Col>
        <Col className='ProfileSecondaria'>
          <CardAziende />
        </Col>
      </Row>
    </Container>
  )
}

export default ModifyComponent
