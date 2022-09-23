import React, { useEffect, useState } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import FormDialogCompetenze from "./FormDialogCompetenze";
import { useLocation } from "react-router-dom";
import FormDialogDelete from "./FormDialogDelete";
import AlertComponent from "../AlertComponent"

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


const CardCompetenze = () => {
  const user = useSelector(state => state.user.user)
  const [deleteToggle, setDeleteToggle] = useState(false)
  const location = useLocation()
  const [experiences, setExperiences] = useState([])
  const token = useSelector(state => state.user.token)
  const [blobFile, setBlobFile] = useState(null)
  const [open, setOpen] = useState(false)
  const [mess, setMess] = useState(' ')
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  const dateCorrect = (string) => {
    let date = new Date(string);
    return date.toLocaleDateString(undefined, options).split(' ').slice(2, 4).join(' ')
  }

  const handleClick = () => {
    setOpen(true);
};

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
      } else {
        setMess('Qualcosa è andato storto durante la richiesta')
        handleClick()
      }
    } catch (error) {
      setMess('Errore del server' + error.message)
      handleClick()
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
        fetchImg(data._id)
        setExperienceObj({
          description: '',
          area: '',
          role: '',
          company: '',
          startDate: '',
          endDate: '',
        })
        fetchExperiences()
      } else {
        setMess('Qualcosa è andato storto durante la creazione')
        handleClick()
      }
    } catch (error) {
      setMess('Errore del server' + error.message)
      handleClick()
      console.log(error);
    }
  }

  const fetchImg = async (expId) => {

    const baseEndpoint = `https://striveschool-api.herokuapp.com/api/profile/${user._id}/experiences/${expId}/picture`

    try {
      let formData = new FormData();
      formData.append('experience', blobFile);

      const response = await fetch(baseEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        fetchExperiences()
      } else {
        setMess('Qualcosa è andato storto durante il caricamento dell\'immagine')
        handleClick()
      }
    } catch (error) {
      setMess('Errore del server' + error.message)
      handleClick()
      console.log(error);
    }
  }
  console.log(experiences)
  return (
    <Col className="CardProfile mb-3">
        <AlertComponent open={open} setOpen={setOpen} mess={mess} />
      <Col xs={12} className="CardCompetenze mt-3">
        <FormDialogCompetenze
          addExperience={addExperience}
          experienceObj={experienceObj}
          setExperienceObj={setExperienceObj}
          setDeleteToggle={setDeleteToggle}
          deleteToggle={deleteToggle}
          blobFile={blobFile}
          setBlobFile={setBlobFile} />
        <ListGroup variant="flush">

          {experiences?.map((experience, index) => {
            return (
              <ListGroup.Item className="d-flex justify-content-between p-0 mt-2" key={index}>
                <Col className="d-flex justify-content-center align-items-center p-1" xs={3}>
                  <img className="img-fluid CardCompetenzeImg" src={experience.image} alt="foto experience"
                    style={{
                      minWidth: '100%',
                    }} />
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
                        <FormDialogDelete
                          experience={experience}
                          fetchExperiences={fetchExperiences}
                          deleteToggle={deleteToggle}
                          blobFile={blobFile}
                          setBlobFile={setBlobFile}
                        />
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
