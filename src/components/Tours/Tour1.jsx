import React from "react";
import {
  FaWater,
  FaFish,
  FaUmbrellaBeach,
  FaMapMarkedAlt,
} from "react-icons/fa";

const Tour1 = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white px-6 md:px-20 py-16">
      {/* Heading */}
     {/* Image Section with Overlay */}
<div className="relative w-full max-h-[500px] mb-10">
  <img
    src="https://images.pexels.com/photos/29007474/pexels-photo-29007474.jpeg"
    alt="Havelock Island"
    className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
  />
  <div className="absolute inset-0 bg-black/40 rounded-2xl flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-lg">
      Havelock Island
    </h1>
    <p className="text-white text-lg md:text-xl font-light mt-2 drop-shadow">
      Scuba diving, reef walks & golden sunsets – a paradise for marine life lovers 🐠
    </p>
  </div>
</div>


      {/* Intro Paragraph */}
<p className="text-base italic font-light mb-8 leading-relaxed text-gray-700 dark:text-gray-300">
  🌴 <strong>Havelock Island</strong>, now officially known as <strong>Swaraj Dweep</strong>, is the crown jewel of the Andaman Islands. 
  Its crystal-clear waters  hide a surreal world beneath — colorful corals, darting clownfish 🐠, and gentle sea turtles 🐢 that invite you to explore their underwater haven.
  Whether you're walking barefoot on Radhanagar Beach , kayaking through calm mangrove creeks, or scuba diving into deep blue mysteries, 
  the island offers nature's finest in every form.
  <br /><br />
  The sunsets here aren't just events — they are daily rituals that turn the sky into a canvas of pinks and oranges.
  Eco-resorts tucked in palm groves ensure you sleep to the sound of waves 🌊 and wake to the songs of birds .
  With minimal mobile signal, Havelock encourages you to disconnect from the world and reconnect with yourself.
  It's not just a getaway — it's a soulful escape you’ll never forget.
</p>





      {/* 🛑 Icon Highlights */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-12">
        <div>
          <FaWater size={30} className="mx-auto text-blue-500" />
          <p className="mt-2 text-sm">Crystal-clear Waters</p>
        </div>
        <div>
          <FaFish size={30} className="mx-auto text-green-500" />
          <p className="mt-2 text-sm">Coral & Marine Life</p>
        </div>
        <div>
          <FaUmbrellaBeach size={30} className="mx-auto text-yellow-500" />
          <p className="mt-2 text-sm">Sunset Beaches</p>
        </div>
        <div>
          <FaMapMarkedAlt size={30} className="mx-auto text-purple-500" />
          <p className="mt-2 text-sm">Adventure Trails</p>
        </div>
      </div>

      {/* 📍 Map Section */}
      <h2 className="text-xl font-semibold mb-4">📍 Havelock Island Location</h2>
      <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-md mb-12">
        <iframe
          title="Havelock Island Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200529.25621193478!2d92.91738046946332!3d11.941596109191719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30889331ebcc3ef7%3A0xb94e734418d99ef7!2sHavelock%20Island!5e0!3m2!1sen!2sin!4v1657011813186!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
     {/* 🌟 Highlights Section */}
      <h2 className="text-xl font-semibold mt-8 mb-3">🌟 Highlights</h2>
      <ul className="list-disc pl-6 text-sm text-gray-600 dark:text-gray-300 space-y-2 mb-8">
        <li>Snorkel among vibrant coral reefs and colorful marine life</li>
        <li>Scuba dive at Elephant Beach and The Wall with certified instructors</li>
        <li>Stroll on Radhanagar Beach — ranked among the best in Asia</li>
        <li>Enjoy local seafood and coconut-based Andamani dishes</li>
        <li>Watch unforgettable pink-orange sunsets every evening</li>
        <li>Eco-resorts offering sustainable, beachside living</li>
      </ul>

      {/* 📅 Best Time to Visit */}
      <h2 className="text-xl font-semibold mt-8 mb-2">📅 Best Time to Visit</h2>
      <p className="text-sm mb-6 text-gray-600 dark:text-gray-300">
        The best time to visit  🌴 Havelock Island is between <strong>October and May</strong>,
        when the weather is pleasant and the sea is calm. Avoid the monsoon season
        (June–September) due to heavy rainfall and rough seas.
      </p>

      {/* 🍽 Local Cuisine */}
      <h2 className="text-xl font-semibold mt-8 mb-2">🍽 Local Cuisine</h2>
      <p className="text-sm mb-6 text-gray-600 dark:text-gray-300">
        Enjoy fresh seafood delicacies like grilled lobsters, prawns, and coconut curry fish.
        Many beachside cafes serve both Indian and continental cuisines. Don’t miss the local
        toddy and banana chips!
      </p>

      {/* ✈️ How to Reach */}
      <h2 className="text-xl font-semibold mt-8 mb-2">✈️ How to Reach</h2>
      <p className="text-sm mb-6 text-gray-600 dark:text-gray-300">
        Reach Port Blair by flight from major Indian cities. From there, take a government
        or private ferry (like Makruzz) to Havelock Island — about a 1.5 to 2.5 hour journey.
      </p>

      {/* 🧳 Travel Tips */}
      <h2 className="text-xl font-semibold mt-8 mb-2">🧳 Travel Tips</h2>
      <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 mb-6 space-y-1">
        <li>Carry reef-safe sunscreen to protect marine life</li>
        <li>ATMs are limited – carry enough cash</li>
        <li>Mobile connectivity is patchy – enjoy the digital detox</li>
        <li>Book diving/snorkeling slots in advance during peak season</li>
      </ul>

      {/* 📸 Perfect For */}
      <h2 className="text-xl font-semibold mt-8 mb-2">📸 Perfect For</h2>
      <p className="text-sm mb-6 text-gray-600 dark:text-gray-300">
        Couples, solo travelers, underwater photographers, beach lovers,
        and those seeking serenity and nature.
      </p>
    </div>
  );
};

export default Tour1;
