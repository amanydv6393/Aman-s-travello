import React from "react";
import { Link } from "react-router-dom";

const WhatSetsUsApart = () => {
  return (
    <div 
    className="bg-[#f9f7f4] py-16 px-4 sm:px-8 lg:px-24">
      <h2 
       data-aos="fade-up"
       className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-gray-900">
        What sets us apart
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-20">
        <div 
         data-aos="fade-up"
        className="flex-1 max-w-xl">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            We're all about sharing the joy of travel
          </h3>
          <p className="text-gray-700 text-base mb-6">
            For over 35 years, we’ve led travellers around the world to share in the real, rare and remarkable...
          </p>
          <button className="bg-red-600 text-white px-5 py-2 rounded-md font-medium hover:bg-red-700 transition duration-200">
            Read about our purpose
          </button>
        </div>

        <div 
         data-aos="zoom-in"
         className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Travel joy"
            className="rounded-xl shadow-md object-cover w-full h-full max-h-[400px]"
          />
        </div>
      </div>

      <div className="text-center mb-10">
        <h2 
         data-aos="fade-up"
         className="text-3xl sm:text-4xl font-semibold text-gray-900">
          Why travel with G Adventures?
        </h2>
        <p 
         data-aos="fade-up"
         className="text-gray-600 mt-4 max-w-2xl mx-auto">
          In just over a year, Aman's Travello has transformed how small group travel feels — authentic, meaningful, and unforgettable. Come see how we’re shaping the future of exploration.
        </p>

        {/* ✅ Link to Learn Page */}
        <Link to="/learn" 
         data-aos="fade-up"
         className="text-purple-700 font-semibold mt-2 inline-block hover:underline">
          Learn more
        </Link>
      </div>

      {/* Features Grid */}
      <div  
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            data-aos="fade-up"className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition duration-200 text-left"
          >
            <div data-aos="zoom-in"className="text-3xl mb-3">{feature.icon}</div>
            <h3 data-aos="zoom-in"className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p data-aos="zoom-in"className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const features = [
  { icon: "🌍", title: "Small groups", description: "Travel in a small circle of kindred spirits, all driven by curiosity and a desire to explore the world with confidence and care." },
  { icon: "🧳", title: "100% guaranteed departures", description: "Once you pack your bags, consider it done — our guaranteed departures mean your adventure is waiting, not wondering." },
  { icon: "🧭", title: "Locally based guides", description: "At Aman's Travello, our guides are more than just guides — they’re Chief Experience Officers, locals who know every hidden gem and story of the place like it’s their own backyard." },
  { icon: "🏘️", title: "Support local communities", description: "We believe in travel that gives back — that’s why we create our tours hand-in-hand with local communities, empowering them through every visit." },
  { icon: "📍", title: "Flexibility, freedom, fun", description: "Each of our travel styles blends guided plans with the freedom to personalize your journey — because no two travelers are the same" },
  { icon: "🌱", title: "G for Good", description: "We’re not just about seeing places — we’re about changing them for the better, one journey at a time." },
];

export default WhatSetsUsApart;
