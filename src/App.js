import React from 'react';

import './App.css';
import Navbar from './Components/Navbar.js';
import Topimg from './Components/Topimg.js';
import AboutUs from './Components/AboutUs.js';
import Events from './Components/Events.js';
import Timeline from './Components/Timeline.js';
import Achievements from './Components/Achievements.js';
import ContactUs from './Components/ContactUs.js';
function App() {
  return (
    <div>
      
      <Navbar/>
      <Topimg/>
      <AboutUs/>
      <Timeline/>
      <Events/>
      <Achievements/>
      <ContactUs/>

    </div>
    
  );
}

export default App;
