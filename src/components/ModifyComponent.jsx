import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CardCompetenze from './profilo/CardCompetenze'
import CardAziende from './profilo/CardAziende';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ModifyComponent = () => {
  const user = useSelector(state => state.user.user)
  const navigate = useNavigate()
  const [fotoBG, setFotoBG] = useState(null)
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    if (!user.name) {
      navigate('/')
    }
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <Container fluid>
      <Row className="justify-content-center align-items-start  flex-column flex-md-row flex-nowrap px-4 pt-3 pb-2">
        <Col className="ProfilePrincipale" >
          <CardCompetenze setFotoBG={setFotoBG} toggleFetch={toggleFetch} setToggleFetch={setToggleFetch} />
        </Col>
        <Col className='ProfileSecondaria'>
          <CardAziende />
        </Col>
      </Row>
    </Container>
  )
}

export default ModifyComponent
