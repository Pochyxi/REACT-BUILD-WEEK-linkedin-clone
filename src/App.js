import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinkedinNavBar from "./component/LinkedinNavBar";

function App() {
  return (
    <BrowserRouter>
      <LinkedinNavBar />
      <Routes>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
