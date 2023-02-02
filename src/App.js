import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Reviews from "./Pages/Reviews/Reviews";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
