import { Col, Container, Row } from "react-bootstrap";
import CardCreaPost from "./CardCreaPost";
import CardProfiloHome from "./CardProfiloHome";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LinkedinPost from "./LinkedinPost";
import News from "../news/News";
import { useNavigate } from "react-router-dom";
import AlertComponent from "../AlertComponent"

const HomeComponent = () => {
  const token = useSelector((state) => state.user.token);
  const [allPosts, setAllPosts] = useState([]);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [mess, setMess] = useState(" ");

  useEffect(() => {
    if (!user.name) {
      navigate("/");
    }
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (token) {
      fetchPosts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const handleClick = () => {
    setOpen(true);
  };

  const fetchPosts = async () => {
    const baseEndpoint = "//striveschool-api.herokuapp.com/api/posts/";
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
        setMess("Qualcosa è andato storto durante la richiesta");
        handleClick();
      }
    } catch (error) {
      setMess("Errore del server" + error.message);
      handleClick();
      console.log(error);
    }
  };
  console.log(token);

  return (
    <Container className="container-lg-fluid HomeComponent">
      <Row className="flex-column flex-lg-row justify-content-between flex-wrap px-4 pt-3 pb-2">
        <Col
          xs={12}
          lg={9}
          className="d-flex flex-column flex-md-row justify-content-between"
        >
          <AlertComponent open={open} setOpen={setOpen} mess={mess} />
          <Col xs={12} sm={12} md={3}>
            <CardProfiloHome />
          </Col>
          <Col xs={12} sm={12} md={8}>
            <CardCreaPost fetchPosts={fetchPosts} />
            {allPosts.map((post, i) => (
              <LinkedinPost key={i} post={post} fetchPosts={fetchPosts} />
            ))}
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
