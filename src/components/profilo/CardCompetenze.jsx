import React, { useEffect, useState } from "react";
import { BiPencil, BiPlus } from "react-icons/bi";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CardCompetenze = () => {
    const user = useSelector(state => state.user.user)
    const [experiences, setExperiences] = useState([])
    const token = useSelector(state => state.user.token)
    const [experienceObj, setExperienceObj] = useState({
        description: 'prova',
        area: 'Italy',
        role: 'Student',
        company: 'Epicode',
        startDate: '2020-10-22',
        endDate: '2020-01-22',
    })

    useEffect(() => {
        fetchExperiences()
        console.log(experiences);
    }, [])

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
                    setExperiences(data);
                    console.log(data);
                } else {
                    alert("Error fetching results");
                }
            } catch (error) {
                console.log(error);
            }
        }   
    
  return (
    <div className="CardProfile ">
      <div className="CardCompetenze mt-3">
        <div className="d-flex justify-content-between mb-3">
          <h4>Competenze</h4>
          <div>
            <BiPlus
             onClick={() => {
               addExperience(experienceObj);
              }}

             className="CardProfilePencil2 text-secondary " />
            <Link to='/modify'>
            <BiPencil className="CardProfilePencil text-secondary " />
            </Link>
          </div>
        </div>
      <ListGroup variant="flush">
        {experiences?.map((experience, index) => {
          return (
              <ListGroup.Item key={index}>{experience.description}</ListGroup.Item>
          )})}
      </ListGroup>
      </div>
    </div>
  );
};

export default CardCompetenze;
