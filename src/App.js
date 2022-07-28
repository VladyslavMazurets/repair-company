import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Services from "./components/Services/Services";
import HowWeWork from "./components/HowWeWork";
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Request from "./components/Request";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Home/>
      <Services/>
      <HowWeWork/>
      <Request/>
      <About/>
      <WhyChooseUs/>
      <Routes>
        {/* <Route path="/about" element={<About />}> */}
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
