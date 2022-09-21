import React from 'react'
import { useSelector } from 'react-redux'
import { Col } from 'react-bootstrap'

const CardProfiloHome = () => {
    const user = useSelector(state => state.user.user)
    return (
        <Col className='CardProfile'>
            <Col className="CardProfileImages d-flex justify-content-center" xs={12} >
                <Col xs={12} className='HomeCardProfileCerchio justify-content-center d-flex align-items-end'>
                    <img className="img-fluid HomeCardProfileCerchioImg" src={user.image} alt="" />
                </Col>
            </Col>
            <Col xs={12} className='CardProfileText text-center mt-5'>
                <h5>{user.name} {user.surname}</h5>
                <p>{user.title}</p>
                <p className="text-secondary">{user.area}</p>
            </Col>
            <Col xs={12} className='d-flex justify-content-start p-2'>
                <Col xs={10}>
                    <p className='text-seconday'>Collegamenti</p>
                    <h6>Espandi la tua rete</h6>
                </Col>
                <Col xs={2}>
                    <p className='text-primary text-end'>4</p>
                </Col>
            </Col>
        </Col>
    )
}

export default CardProfiloHome
