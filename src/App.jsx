import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

// 👇 Add this import
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

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

// 👇 Tour detail pages
import Tour1 from "./components/Tours/Tour1";
import Tour2 from "./components/Tours/Tour2";
import Tour3 from "./components/Tours/Tour3";
import Tour4 from "./components/Tours/Tour4";
import Tour5 from "./components/Tours/Tour5";
import Tour6 from "./components/Tours/Tour6";
import Tour7 from "./components/Tours/Tour7";

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
      <ScrollToTop /> {/* 👈 Yeh line add ki gayi hai */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogsDetails />} />
          <Route path="best-places" element={<PlacesRoute />} />
          <Route path="about" element={<About />} />
          <Route path="sets-us-apart" element={<WhatSetsUsApart />} />
          <Route path="kashmir-great-lakes" element={<KashmirGreatLakes />} />
          <Route path="learn" element={<LearnPage />} />

          {/* Tour detail routes */}
          <Route path="tour/1" element={<Tour1 />} />
          <Route path="tour/2" element={<Tour2 />} />
          <Route path="tour/3" element={<Tour3 />} />
          <Route path="tour/4" element={<Tour4 />} />
          <Route path="tour/5" element={<Tour5 />} />
          <Route path="tour/6" element={<Tour6 />} />
          <Route path="tour/7" element={<Tour7 />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
