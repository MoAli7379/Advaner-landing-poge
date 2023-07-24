import React from "react";
import Navbar from "../Components/Navbar";
import TeacherHome from"../Components/TeacherHome";
import TeacherBody from "../Components/TeacherBody";
import { FiArrowRight } from "react-icons/fi";

import "../App.css";


function Courses() {
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
  
  export default Courses;
  