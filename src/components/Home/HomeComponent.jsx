import { Col, Container, Row } from "react-bootstrap";
import CardCreaPost from "./CardCreaPost";
import CardProfiloHome from "./CardProfiloHome";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LinkedinPost from "./LinkedinPost";
import News from "../news/News";



const HomeComponent = () => {

  const user = useSelector(state => state.user.user)
  const token = useSelector(state => state.user.token)
  const [allPosts, setAllPosts] = useState([])

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
        console.log('fetching posts')
        setAllPosts(data.slice(-50, data.length).reverse());

      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <Container className="container-lg-fluid">
      <Row className="flex-column flex-lg-row justify-content-between flex-wrap px-4 pt-3 pb-2">
        <Col xs={12} lg={9} className='d-flex flex-column flex-md-row justify-content-between'>
          <Col xs={12} sm={12} md={3}>
            <CardProfiloHome />
          </Col>
          <Col xs={12} sm={12} md={8}>
            <CardCreaPost fetchPosts={fetchPosts} />
            {
              allPosts.map((post, i) => (
                <LinkedinPost key={i} post={post} fetchPosts={fetchPosts} />
              ))
            }
            {/* <LinkedinPost post={allPosts} /> */}
          </Col>
        </Col>
        <Col>
          <News />
        </Col>
      </Row>

    </Container>
  );
};

export default HomeComponent;
