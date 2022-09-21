import { Col, Container, Row } from "react-bootstrap";
import CardPost from "./CardPost";
import CardPubblicità from "./CardPubblicità";
import CardCreaPost from "./CardCreaPost";
import CardProfiloHome from "./CardProfiloHome";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const HomeComponent = () => {

  const user = useSelector(state => state.user.user)
  const token = useSelector(state => state.user.token)
  const [allPosts, setAllPosts] = useState(null)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const baseEndpoint = "//striveschool-api.herokuapp.com/api/posts/"
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
        setAllPosts(data.slice(-50, data.length).reverse());
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <Container>
      <Row className="justify-content-center flex-nowrap px-4 pt-3 pb-2">
        <Col xs={3}>
        <CardProfiloHome/>
        </Col>
        <Col xs={6}>
        <CardCreaPost/>
        {
          allPosts &&
          allPosts.map((post, index) => (
            <CardPost key={index} post={post}/>
          ))
        }
        </Col>
        <Col xs={3}>
        <CardPubblicità />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeComponent;
