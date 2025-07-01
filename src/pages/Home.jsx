import React from "react";
import Hero from "../components/Hero/Hero";
import NatureVid from "../assets/video/main.mp4";
import BlogsComp from "../components/Blogs/BlogsComp";
import Places from "../components/Places/Places";
import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
import BannerPic from "../components/BannerPic/BannerPic";
import BannerImg from "../assets/cover-women.jpg";
import Banner2 from "../assets/travel-cover2.jpg";
import OrderPopup from "../components/OrderPopup/OrderPopup";
import Whyamantravel from "../components/Whyamantravel/Whyamantravel";
import WhatSetsUsApart from "../components/WhatSetsUsApart/WhatSetsUsApart.jsx";
import FAQSection from "../components/FAQSection/FAQSection.jsx";
import RailCollection from "../components/RailCollection/RailCollection.jsx";
import TravelChatPopup from "../components/TravelChatPopup/TravelChatPopup.jsx";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div>
        <div className="h-[700px] relative">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video>
          <Hero />
        </div>
        <Places handleOrderPopup={handleOrderPopup} />
        <BannerPic img={BannerImg} />
        <BlogsComp />
        <Banner />
        <RailCollection/>
        <BannerPic img={Banner2} />
        <WhatSetsUsApart/>
         <FAQSection/>
         <Testimonial />
         <Whyamantravel/>
        <TravelChatPopup/>
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;
