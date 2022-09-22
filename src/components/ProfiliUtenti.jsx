import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProfiliUtentiCard from "./ProfiliUtentiCard";
import ProfiliUtentiCompetenze from "./ProfiliUtentiCompetenze";
import CardAziende from "./profilo/CardAziende";
import CardPersone from "./profilo/CardPersone";

const ProfiliUtenti = () => {
  const params = useParams();
  const token = useSelector((state) => state.user.token);
  const [user, setUser] = useState({});
  const [experiences, setCompetenze] = useState([]);

  useEffect(() => {
    fetchUtent();
    fetchExperiences();
    console.log(experiences);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchUtent = async () => {
    const baseEndpoint = `//striveschool-api.herokuapp.com/api/profile/${params.userId}`;
    const header = {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await fetch(baseEndpoint, {
        headers: header,
      });
      if (response.ok) {
        const data = await response.json();
        setUser(data);
        console.log(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchExperiences = async () => {
    const baseEndpoint = `//striveschool-api.herokuapp.com/api/profile/${user._id}/experiences`;
    const header = {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await fetch(baseEndpoint, {
        headers: header,
      });
      if (response.ok) {
        const data = await response.json();
        setCompetenze(data);
        console.log(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid>
      <Row className="justify-content-center align-items-start  flex-column flex-md-row flex-nowrap px-4 pt-3 pb-2">
        <Col className="ProfilePrincipale">
          <ProfiliUtentiCard user={user} />
        </Col>
        <Col className="ProfileSecondaria">
          <CardAziende />
        </Col>
      </Row>
      <Row className="justify-content-center align-items-start flex-column flex-md-row flex-nowrap px-4 pt-3 pb-2">
        <Col className="ProfilePrincipale">
          <ProfiliUtentiCompetenze experiences={experiences} />
        </Col>
        <Col className="ProfileSecondaria">
          <CardPersone />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfiliUtenti;
