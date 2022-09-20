import React, { useEffect, useState } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import FormDialogCompetenze from "./FormDialogCompetenze";
import ClearIcon from '@mui/icons-material/Clear';
import { useLocation } from "react-router-dom";
import FormDialogDelete from "./FormDialogDelete";

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


const CardCompetenze = () => {
  const user = useSelector(state => state.user.user)
  const [deleteToggle, setDeleteToggle] = useState(false)
  const location = useLocation()
  const [experiences, setExperiences] = useState([])
  const token = useSelector(state => state.user.token)
  const [experienceObj, setExperienceObj] = useState({
    description: '',
    area: '',
    role: '',
    company: '',
    startDate: '',
    endDate: '',
  })

  useEffect(() => {
    if (token) {
      fetchExperiences()
    }
  }, [token])

  const dateCorrect = (string) => {
    let date = new Date(string);
    return date.toLocaleDateString(undefined, options).split(' ').slice(2, 4).join(' ')
  }

  const fetchExperiences = async () => {
    const baseEndpoint = "https://striveschool-api.herokuapp.com/api/profile/" + user._id + "/experiences"
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
        setExperiences(data);
        console.log(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  }
  const addExperience = async (obj) => {
    const baseEndpoint = "https://striveschool-api.herokuapp.com/api/profile/" + user._id + "/experiences"

    const header = {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await fetch(baseEndpoint, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: header,
      });
      if (response.ok) {
        const data = await response.json();
        setExperienceObj({
          description: '',
          area: '',
          role: '',
          company: '',
          startDate: '',
          endDate: '',
        })
        fetchExperiences()
        console.log(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  }

  console.log(dateCorrect(
    "2022-09-20T19:45:13.097Z"))

  return (
    <Col className="CardProfile">
      <Col xs={12} className="CardCompetenze mt-3">
        <FormDialogCompetenze addExperience={addExperience} experienceObj={experienceObj} setExperienceObj={setExperienceObj} setDeleteToggle={setDeleteToggle} deleteToggle={deleteToggle} />
        <ListGroup variant="flush">

          {experiences?.map((experience, index) => {
            return (
              <ListGroup.Item className="d-flex justify-content-between p-0 mt-2" key={index}>
                <Col className="mt-2" xs={3}>
                  <img className="img-fluid CardCompetenzeImg" src={`https://picsum.photos/id/${Math.floor(Math.random() * 200)}/500/500`} alt="lorem picsum" />
                </Col>
                <Col xs={8}>
                  <Row>
                    <h3>{experience.company.toUpperCase()} {experience.area}</h3>
                  </Row>
                  <Row>
                    <h6 >{experience.role}</h6>
                  </Row>
                  <Row>
                    <p className='text-secondary'>{dateCorrect(experience.startDate)} - {dateCorrect(experience.endDate)}</p>
                  </Row>
                  <Row>
                    <p>{experience.description}</p>
                  </Row>
                  <Row className="justify-content-end text-danger">
                    {
                      location.pathname === '/modify' && (
                        <FormDialogDelete experience={experience} fetchExperiences={fetchExperiences} deleteToggle={deleteToggle} />
                      )
                    }

                  </Row>
                </Col>
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </Col>
    </Col>
  );
};

export default CardCompetenze;
