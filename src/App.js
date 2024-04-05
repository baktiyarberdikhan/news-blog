// import { Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import News from "./components/News";
// import Article from "./components/Article";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import NotFound from "./components/NotFound";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/news" element={<News />} />
//       <Route path="/news/:id" element={<Article />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route element={<NotFound />} />
//     </Routes>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import News from './components/News';
import Article from './components/Article';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/:id" element={<Article />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route element={<NotFound />} />
    </Routes>
  );
}

export default App;