import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Pages/Layout";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";





const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home page with multiple sections */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />



        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
