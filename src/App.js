import React from "react";

import Services from "./components/Services/Services";
import HowWeWork from "./components/HowWeWork";
import Home from "./components/Home";
import { Navbar } from "./components/Navbar";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Request from "./components/Request";
import CallOrder from "./components/CallOrder";
import ShowCase from "./components/ShowCase";
import Testimonials from './components/Testimonials';
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Services/>
      <HowWeWork/>
      <Request/>
      <About/>
      <WhyChooseUs/>
      <CallOrder/>
      <ShowCase/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
