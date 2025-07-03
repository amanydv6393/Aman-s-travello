import React from "react";
import { FaWater, FaCamera, FaUmbrellaBeach, FaMapMarkedAlt } from "react-icons/fa";

const Tour4 = () => (
<div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white px-6 md:px-20 py-16">
  <h1 className="text-3xl font-bold mb-6 text-center">
    🐬 Sail Alongside Playful Dolphins in Crystal Waters
  </h1>

  {/* Image with overlay */}
  <div className="relative w-full h-[500px] mb-10 rounded-2xl shadow-lg overflow-hidden">
    <img
      src="https://media.gadventures.com/media-server/dynamic/admin/content_pages/canadaday4.webp"
      alt="North Bay Island"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-lg">
        North Bay Island
      </h1>
      <p className="text-white text-lg md:text-xl font-light mt-2 drop-shadow">
        Snorkeling & open-sea encounters — nature's thrill just beneath the waves.
      </p>
    </div>
  </div>

    <p className="text-base italic font-light mb-8 leading-relaxed text-gray-700 dark:text-gray-300">
      <strong>North Bay Island</strong>, nestled just a short ride from Port Blair, is a <strong>water lover’s paradise</strong>. 🚤 Known for its shimmering 
      turquoise waters, rich coral reefs, and dolphin sightings, this island delivers <strong>magical encounters</strong> with <strong>marine life</strong>. 
      Whether you’re snorkeling, glass-bottom boating, or diving deep into the reefs, the undersea spectacle of <strong>clownfish, 
      sea anemones </strong> and <strong>parrotfish awaits</strong> North Bay isn’t just for thrill-seekers — it’s for dreamers too. 
      Settle by the beach, camera in hand, and capture dolphins leaping across the horizon. 🐬🌊
    </p>

    {/* Highlights */}
    <h2 className="text-xl font-semibold mt-8 mb-3">🌟 Highlights</h2>
    <ul className="list-disc pl-6 text-sm text-gray-600 dark:text-gray-300 space-y-2">
      <li>Snorkeling and scuba diving around coral reefs</li>
      <li>Boat rides with dolphin spotting</li>
      <li>Glass-bottom boat tours for non-swimmers</li>
      <li>Ideal site for underwater photography</li>
    </ul>

    {/* Icons */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center my-12">
      <div>
        <FaWater size={30} className="mx-auto text-blue-600" />
        <p className="mt-2 text-sm">Crystal Waters</p>
      </div>
      <div>
        <FaCamera size={30} className="mx-auto text-pink-500" />
        <p className="mt-2 text-sm">Photo Hotspot</p>
      </div>
      <div>
        <FaUmbrellaBeach size={30} className="mx-auto text-yellow-500" />
        <p className="mt-2 text-sm">Relaxed Beaches</p>
      </div>
      <div>
        <FaMapMarkedAlt size={30} className="mx-auto text-purple-500" />
        <p className="mt-2 text-sm">Marine Excursions</p>
      </div>
    </div>

    {/* Map */}
    <h2 className="text-xl font-semibold mb-4">📍 North Bay Island Location</h2>
    <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-md mb-12">
      <iframe
        title="North Bay Island Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252802.18076951278!2d92.65319822500001!3d11.69303945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x308893126b2f5a85%3A0x5644ed7bd38e97c3!2sNorth%20Bay%20Island!5e0!3m2!1sen!2sin!4v1657035000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    {/* More Info */}
    <h2 className="text-xl font-semibold mt-8 mb-2">📅 Best Time to Visit</h2>
    <p className="text-sm mb-6 text-gray-600 dark:text-gray-300">
      October to March is the ideal time with calm seas and great visibility. Monsoon season (June–September) should be avoided.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">🧭 How to Reach</h2>
    <p className="text-sm mb-6 text-gray-600 dark:text-gray-300">
      Take a boat from Aberdeen Jetty in Port Blair — a 15–20 minute ride to reach North Bay Island.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">🧳 Travel Tips</h2>
    <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 mb-6">
      <li>Carry waterproof bags and dry clothes</li>
      <li>Use eco-friendly sunscreen to protect coral life</li>
      <li>Rent snorkel gear or join guided underwater tours</li>
      <li>Keep camera gear ready — dolphins are fast!</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2">📸 Perfect For</h2>
    <p className="text-sm mb-6 text-gray-600 dark:text-gray-300">
      Families, marine photographers, casual snorkelers, and anyone who loves ocean adventures.
    </p>
  </div>
);

export default Tour4;
