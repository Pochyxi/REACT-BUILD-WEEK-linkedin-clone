import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";

const CardCreaPost = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div>
      <Row xs={10}>
        <Col xs={10} className="d-flex">
          <Avatar>
            <img className="PostUser" src={user.image} alt="user" />
          </Avatar>
          <Button variant="outline-secondary" className="buttonPost" >
            Crea Post
          </Button>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </div>
  );
};

export default CardCreaPost;
