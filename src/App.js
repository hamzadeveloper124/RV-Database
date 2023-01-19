import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Reviews from "./Pages/Reviews/Reviews";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./Pages/Blog/Blog";
import Faqs from "./Pages/Faqs/Faqs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />

          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
