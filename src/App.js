import React from 'react';
import './App.css';
import './index.css';
import Home from './Components/Home';
import TutorSection from './Components/TutorSection';
import Tutors from './Pages/Tutors';
import Testimonial from './Components/Testimonial';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PricesCard from './Components/PricesCard';
import Work from './Components/Work';
import MyAccordion from './Components/MyAccordian';

function App() {
  return (
    <div className="App" style={{ position: 'relative' }}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Home />
                <div style={{ position: 'relative', top: '-120px', width: '100%' }}>
                  <TutorSection />
                  <Work/>
                  <PricesCard/>
                  <MyAccordion/>


                </div>
              </div>
            }
          />
          <Route path="/tutor" element={<Tutors />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
