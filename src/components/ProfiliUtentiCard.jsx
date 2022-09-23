import React from "react";
import { Button, Col } from "react-bootstrap";
import { BiPencil } from 'react-icons/bi'

const ProfiliUtentiCard = ({ user }) => {
  return (
    <Col className="CardProfile">
      <Col className="CardProfileImages" xs={12}>
        <Col
          className="text-end d-flex justify-content-end  CardProfileImagesPencil"
          xs={12}
        > 
         <BiPencil className="bg-light CardProfileImagesPenciBi" />
        </Col>
        <Col xs={3} className="CardProfileCerchio d-flex align-items-end">
          <img
            className="img-fluid CardProfileCerchioImg"
            src={user.image}
            alt=""
          />
        </Col>
      </Col>
      <Col xs={12} className='d-flex justify-content-end text-end p-3'>
      <Button className="CardAziendaButton" variant="outline-secondary">Segui</Button>
      </Col>
      <Col xs={12} className="CardProfileText">
        <h3>
          {user.name} {user.surname}
        </h3>
        <p>{user.title}</p>
        <p className="text-secondary">
          {user.area}{" "}
          <span className="text-primary">informazioni di contatto</span>{" "}
        </p>
      </Col>
      <Col xs={12} className="d-flex justify-content-start p-4">
        <Col className="CardProfileDisp" xs={8}>
          <h6 className="m-0">Disponibile a lavorare</h6>
          <p className="m-0">Ruoli di {user.title}</p>
          <p className="text-primary m-0">Vedi informazioni di contatto</p>
        </Col>
      </Col>
    </Col>
  );
};

export default ProfiliUtentiCard;
