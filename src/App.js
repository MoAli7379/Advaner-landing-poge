import "./App.css";
import "./index.css"
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Tutors from "./Pages/Tutors";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={ 
            <>
              <Home />
              <About />
              <Work />
              <Testimonial />
              <Contact />
              <Footer />
            </>
          }/>
          <Route path="/tutor" element={< Tutors/>} />
          {/* <Route path="/work" element={<Work />} /> */}
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
