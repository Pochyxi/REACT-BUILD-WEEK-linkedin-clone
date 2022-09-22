import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import EventIcon from '@mui/icons-material/Event';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import FormDialogPost from "./FormDialogPost";

const CardCreaPost = ({ fetchPosts }) => {
  const user = useSelector((state) => state.user.user);

  return (
    <Col className="CardPost mb-3 ">
      <Col xs={12} className="CardCompetenze mt-3">
        <Row>
          <Col className="d-flex">
            <Avatar>
              <img className="PostUser" src={user.image} alt="user" />
            </Avatar>
            <FormDialogPost fetchPosts={fetchPosts} />
          </Col>
        </Row>
        <Row className="rigaIconePost mt-3">
          <Col className="d-flex no-wrap">
            <ImageOutlinedIcon color="primary" /> <span className="text-secondary">Foto</span>
          </Col>
          <Col className="d-flex no-wrap">
            <SmartDisplayIcon color="success" /> <span className="text-secondary">Video</span>
          </Col>
          <Col className="d-flex no-wrap">
            <EventIcon sx={{ color: 'orange' }} /> <span className="text-secondary">Evento</span>
          </Col>
          <Col className="d-flex no-wrap">
            <NewspaperIcon sx={{ color: 'orangered' }} /> <span className="text-secondary">Scrivi un articolo</span>
          </Col>
        </Row>
      </Col>
    </Col>
  );
};

export default CardCreaPost;
