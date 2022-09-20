import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardCompetenze from './profilo/CardCompetenze'
import { BiPencil, BiPlus } from "react-icons/bi";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardAziende from './profilo/CardAziende';

const ModifyComponent = () => {
  return (
    <Container fluid>
    <Row className="justify-content-center flex-nowrap px-4 pt-3 pb-2">
        <Col className="ProfilePrincipale" >
        <div className="CardProfile ">
      <div className="CardCompetenze mt-3">
        <div className="d-flex justify-content-between mb-3">
          <h4>Competenze</h4>
          <div>
            <BiPlus className="CardProfilePencil2 text-secondary " />
          </div>
        </div>
      <ListGroup variant="flush">
        <ListGroup.Item className='d-flex align-items-center justify-content-between'>Cras justo odio <BiPencil /> </ListGroup.Item>
        <ListGroup.Item className='d-flex align-items-center justify-content-between'>Dapibus ac facilisis in <BiPencil /></ListGroup.Item>
        <ListGroup.Item className='d-flex align-items-center justify-content-between'>Morbi leo risus <BiPencil /></ListGroup.Item>
        <ListGroup.Item className='d-flex align-items-center justify-content-between'>Porta ac consectetur ac <BiPencil /></ListGroup.Item>
      </ListGroup>
      </div>
    </div>
        </Col>
        <Col className='ProfileSecondaria'>
        <CardAziende/>
        </Col>
    </Row>
</Container>
  )
}

export default ModifyComponent
