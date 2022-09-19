import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="p-0">
        <Routes>
          <Route path="/" element={<LoginComponent />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
