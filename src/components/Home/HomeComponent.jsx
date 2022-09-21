import { Col, Container, Row } from "react-bootstrap";
import CardPubblicità from "./CardPubblicità";
import CardCreaPost from "./CardCreaPost";
import CardProfiloHome from "./CardProfiloHome";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LinkedinPost from "./LinkedinPost";



const HomeComponent = () => {

  const user = useSelector(state => state.user.user)
  const token = useSelector(state => state.user.token)
  const [allPosts, setAllPosts] = useState([])

  useEffect(() => {
    fetchPosts()
  }, [])

  useEffect(() => {
    console.log(deletePostWithoutImage(allPosts));
    console.log(allPosts);
  }, [allPosts])

  const deletePostWithoutImage = (arr) => {
    let arrDelete = []
    for (let i = arr.length - 1 ; i > 1; i--) {
      if (!typeof arr[i].user === 'object' ) {
       arrDelete = arr.filter(item => item._id === arr[i]._id)
    }
  }
    return arrDelete
  }

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
        setAllPosts(data.slice(-100, data.length - 5).reverse());
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
          allPosts.map((post, i) => (
            <LinkedinPost key={i} post={post} />
          ))
        }
                {/* <LinkedinPost post={allPosts} /> */}
        </Col>
        <Col xs={3}>
        <CardPubblicità />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeComponent;
