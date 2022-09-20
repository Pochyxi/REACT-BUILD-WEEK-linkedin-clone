import React from "react";
import { BiPencil, BiPlus } from "react-icons/bi";
import { ListGroup } from "react-bootstrap";

const CardCompetenze = () => {
  return (
    <div className="CardProfile ">
      <div className="CardCompetenze mt-3">
        <div className="d-flex justify-content-between mb-3">
          <h4>Competenze</h4>
          <div>
            <BiPlus className="CardProfilePencil2 text-secondary " />
            <BiPencil className="CardProfilePencil text-secondary " />
          </div>
        </div>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>
      </div>
    </div>
  );
};

export default CardCompetenze;
