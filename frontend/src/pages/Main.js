import React from "react";
import { Navbar } from "../Components/Navbar";
import { Home } from "../Components/Home";
import { About } from "../Components/About";
import { Courses } from "../Components/Courses";
import { Pricing } from "../Components/Pricing";
import { Contact } from "../Components/Contact";

export const Main = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Courses />
      <Pricing />
      <Contact />
    </div>
  );
};
