import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import PlacesRoute from "./pages/PlacesRoute";
import About from "./pages/About";
import BlogsDetails from "./pages/BlogsDetails";

// 👇 Tumhare naye pages
import WhatSetsUsApart from "../src/components/WhatSetsUsApart/WhatSetsUsApart";
import LearnPage from "../src/components/LearnPage/LearnPage";
import KashmirGreatLakes from "./components/TrekDetailsPage/TrekDetailsPage";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogsDetails />} />
          <Route path="best-places" element={<PlacesRoute />} />
          <Route path="about" element={<About />} />
          <Route path="sets-us-apart" element={<WhatSetsUsApart />} />
          <Route path="/kashmir-great-lakes" element={<KashmirGreatLakes />} />
          <Route path="learn" element={<LearnPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
