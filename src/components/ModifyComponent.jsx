import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardCompetenze from './profilo/CardCompetenze'
import CardAziende from './profilo/CardAziende';

const ModifyComponent = () => {
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
