import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaMountain,
  FaRoute,
  FaCalendarAlt,
  FaFlagCheckered,
} from "react-icons/fa";

const KashmirGreatLakes = () => {
  const [showItinerary, setShowItinerary] = useState(false);

  const toggleItinerary = () => {
    setShowItinerary(!showItinerary);
  };

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white px-6 md:px-20 pt-28 pb-14 font-sans">
      {/* Header Section */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight text-primary">
        Kashmir Great Lakes Trek
      </h1>
      <p className="text-base md:text-lg mb-6 text-gray-700 dark:text-gray-300 max-w-3xl">
        Discover the true essence of Kashmir as you trek through seven breathtaking alpine lakes, lush green meadows, and majestic mountain passes. This trail is a perfect blend of adventure, serenity, and postcard-perfect scenery.
      </p>

      {/* Quick Info Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
        <div>
          <h2 className="text-3xl font-bold text-secondary mb-6">Quick Info</h2>
          <ul className="space-y-4 text-lg text-gray-800 dark:text-gray-200">
            <li className="flex items-center gap-3"><FaMapMarkerAlt className="text-primary text-2xl" /><span><strong>Region:</strong> Kashmir, J&K</span></li>
            <li className="flex items-center gap-3"><FaClock className="text-primary text-2xl" /><span><strong>Duration:</strong> 7 Days / 6 Nights</span></li>
            <li className="flex items-center gap-3"><FaMountain className="text-primary text-2xl" /><span><strong>Difficulty:</strong> Moderate to Challenging</span></li>
            <li className="flex items-center gap-3"><FaMountain className="text-primary text-2xl" /><span><strong>Max Altitude:</strong> 13,750 ft</span></li>
            <li className="flex items-center gap-3"><FaRoute className="text-primary text-2xl" /><span><strong>Trek Distance:</strong> ~75 km</span></li>
            <li className="flex items-center gap-3"><FaCalendarAlt className="text-primary text-2xl" /><span><strong>Best Season:</strong> July - September</span></li>
            <li className="flex items-center gap-3"><FaMapMarkerAlt className="text-primary text-2xl" /><span><strong>Start Point:</strong> Sonamarg</span></li>
            <li className="flex items-center gap-3"><FaFlagCheckered className="text-primary text-2xl" /><span><strong>End Point:</strong> Naranag</span></li>
          </ul>
        </div>
        <div>
          <img
            src="https://media1.thrillophilia.com/filestore/z5u7nanvztyuc2q14v2j4wlynslm_shutterstock_1195856011.jpg"
            alt="Vishansar Lake"
            className="rounded-2xl shadow-lg object-cover h-72 w-full border border-gray-200 dark:border-gray-700"
          />
        </div>
      </div>

      {/* Itinerary Accordion Section */}
      
       <div className="border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg mb-14">
      {/* Accordion Header */}
      <div
        className="cursor-pointer p-6 flex items-center justify-between"
        onClick={toggleItinerary}
      >
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
            Quick itinerary of Kashmir Great Lakes
          </h2>
          <p className="text-blue-600 mt-2 underline">
            Get your trek plan
          </p>
        </div>
        <div className="text-xl text-yellow-500">
          {showItinerary ? "−" : "+"}
        </div>
      </div>

      {/* Itinerary Body */}
      {showItinerary && (
        <div className="bg-gray-50 dark:bg-gray-800 px-6 py-6 space-y-6 text-sm md:text-base text-gray-800 dark:text-gray-300">
          {[
            {
              day: "Day 1",
              desc: "🚐 Drive from Srinagar to Gagangir\n🕓 Duration: 3–4 hours | 📏 Distance: 83 km\n📍 Pickup at 10:00 AM from Sheikh Feroze Tours & Travels, Sathu, Srinagar.",
            },
            {
              day: "Day 2",
              desc: "🥾 Trek from Gagangir to Nichnai via Shitkadi\n🕒 6–7 hours | ⛰️ Altitude: 2,800m → 3,500m",
            },
            {
              day: "Day 3",
              desc: "🥾 Trek from Nichnai to Vishansar Lake\n🕒 5–6 hours | ⛰️ Cross Nichnai Pass (4,100m)",
            },
            {
              day: "Day 4",
              desc: "📸 Rest & Acclimatization at Vishansar & Kishansar Lakes\n🌄 Explore twin alpine lakes and surrounding beauty.",
            },
            {
              day: "Day 5",
              desc: "🥾 Trek to Gadsar via Gadsar Pass\n🕒 6–7 hours | 🏔️ Highest point: 4,200m",
            },
            {
              day: "Day 6",
              desc: "🥾 Trek from Gadsar to Satsar\n🕒 5–6 hours | 🌿 Through scenic rolling meadows",
            },
            {
              day: "Day 7",
              desc: "🥾 Trek from Satsar to Gangbal via Zaj Pass\n🕒 6–7 hours | 🗻 View twin alpine lakes: Gangbal & Nundkol",
            },
            {
              day: "Day 8",
              desc: "🥾 Trek to Naranag and 🚐 drive to Srinagar\n🕒 Trek: 6 hours | 🚘 Drive: 2 hours",
            },
          ].map((item, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold text-yellow-600">{item.day}</h3>
              <p className="whitespace-pre-line mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* BELOW IS YOUR ORIGINAL SECTION — UNTOUCHED */}
      <div className="border-t border-b border-yellow-400 py-4 cursor-pointer hover:bg-yellow-50/10 transition">
        <div className="flex items-center gap-3 text-lg font-semibold">
          <img
            src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
            alt="icon"
            className="w-6 h-6"
          />
          How Does Each Day Look
        </div>
        <p className="mt-2 text-base text-gray-700 dark:text-gray-300 pl-9">
          Complete day-wise guide with photos
        </p>
      </div>

      <div className="border-t border-b border-yellow-400 py-4 cursor-pointer hover:bg-yellow-50/10 transition">
        <div className="flex items-center gap-3 text-lg font-semibold">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3658/3658959.png"
            alt="icon"
            className="w-6 h-6"
          />
          How Difficult is the Kashmir Great Lakes Trek
        </div>
        <p className="mt-2 text-base text-gray-700 dark:text-gray-300 pl-9">
          What to Expect in terms of Terrain, Altitude, Weather and Safety
        </p>
      </div>

      <div className="border-t border-b border-yellow-400 py-4 cursor-pointer hover:bg-yellow-50/10 transition">
        <div className="flex items-center gap-3 text-lg font-semibold">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2920/2920267.png"
            alt="icon"
            className="w-6 h-6"
          />
          Best Time to do the Kashmir Great Lakes Trek
        </div>
        <p className="mt-2 text-base text-gray-700 dark:text-gray-300 pl-9">
          Time your trek well
        </p>
      </div>

      <div className="border-t border-b border-yellow-400 py-4 cursor-pointer hover:bg-yellow-50/10 transition">
        <div className="flex items-center gap-3 text-lg font-semibold">
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            alt="icon"
            className="w-6 h-6"
          />
          How to Reach the Base Camp
        </div>
        <p className="mt-2 text-base text-gray-700 dark:text-gray-300 pl-9">
          Plan your travel
        </p>
      </div>

      <div className="border-t border-b border-yellow-400 py-4 cursor-pointer hover:bg-yellow-50/10 transition">
        <div className="flex items-center gap-3 text-lg font-semibold">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2910/2910792.png"
            alt="icon"
            className="w-6 h-6"
          />
          Stay Options for Kashmir Great Lakes Trek
        </div>
        <p className="mt-2 text-base text-gray-700 dark:text-gray-300 pl-9">
          Budget and Premium Stay Options that Trekkers Recommend
        </p>
      </div>

      <div className="border-t border-b border-yellow-400 py-4 cursor-pointer hover:bg-yellow-50/10 transition">
        <div className="flex items-center gap-3 text-lg font-semibold">
          <img
            src="https://cdn-icons-png.flaticon.com/512/10763/10763954.png"
            alt="icon"
            className="w-6 h-6"
          />
          What to Pack for Your Trek
        </div>
        <p className="mt-2 text-base text-gray-700 dark:text-gray-300 pl-9">
          Things you must take on the trek
        </p>
      </div>

      <div className="border-t border-b border-yellow-400 py-4 cursor-pointer hover:bg-yellow-50/10 transition">
        <div className="flex items-center gap-3 text-lg font-semibold">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3565/3565418.png"
            alt="icon"
            className="w-6 h-6"
          />
          How to Get Fit for the Kashmir Great Lakes Trek
        </div>
        <p className="mt-2 text-base text-gray-700 dark:text-gray-300 pl-9">
          A 6-Week Plan to Help You Get Trek-Fit for the Kashmir Great Lakes Trek
        </p>
      </div>

      <div className="border-t border-b border-yellow-400 py-4 cursor-pointer hover:bg-yellow-50/10 transition">
        <div className="flex items-center gap-3 text-lg font-semibold">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3122/3122678.png"
            alt="icon"
            className="w-6 h-6"
          />
          Frequently Asked Questions
        </div>
        <p className="mt-2 text-base text-gray-700 dark:text-gray-300 pl-9">
          Get your questions answered here
        </p>
      </div>
    </div>

      {/* Photo Gallery Section */}
       <h2 className="text-3xl font-semibold text-primary mt-12 mb-4">Trek Highlights</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
        <li>Over 7 alpine lakes including Vishansar, Kishansar, Gadsar, Satsar, and Gangbal</li>
        <li>High altitude passes over 13,000 ft with panoramic views</li>
        <li>Wildflower-filled meadows & colorful valleys</li>
        <li>Chance to interact with nomadic shepherds (Gujjars)</li>
        <li>Remote campsites with minimal light pollution — perfect for stargazing</li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <img src="https://i.ytimg.com/vi/SedpWkuZ53g/hq720.jpg" alt="Gadsar Lake" className="rounded-xl h-64 w-full object-cover shadow-md" />
        <img src="https://miro.medium.com/v2/resize:fit:1400/1*yxb8R3q8YVTcTgUspkj5PQ@2x.jpeg" alt="Satsar" className="rounded-xl h-64 w-full object-cover shadow-md" />
        <img src="https://tripmore.in/wp-content/uploads/2024/09/Kishanganga-River.jpg-1000x600.png" alt="Gangbal Lake" className="rounded-xl h-64 w-full object-cover shadow-md" />
        <img src="https://solopassport.com/wp-content/uploads/2023/08/Locals-at-Kashmir-Great-Lakes.jpeg" alt="Vishansar" className="rounded-xl h-64 w-full object-cover shadow-md" />
        <img src="https://skyhike.in/uploads/itinerary/C5RHrXxGFK8TEtSWAmTY5Vqjv9OAKlCi4uibIVBa.jpg" alt="Gadsar Lake" className="rounded-xl h-64 w-full object-cover shadow-md" />
        <img src="https://ekaxp.in/wp-content/uploads/2022/10/Great-Lakes-of-Kashmir-Trek-Experience_EKA...jpg" alt="Satsar" className="rounded-xl h-64 w-full object-cover shadow-md" />
        <img src="https://kashmirlife.net/wp-content/uploads/2019/09/Female-Hikers.jpg" alt="Gangbal Lake" className="rounded-xl h-64 w-full object-cover shadow-md" />
        <img src="https://brozaadventures.com/soft/file_store/highlight/202238245CJ.jpg" alt="Vishansar" className="rounded-xl h-64 w-full object-cover shadow-md" />
      </div>
    </div>
  );
};

export default KashmirGreatLakes;
