import React from "react";
import { FaLeaf, FaShip, FaMountain, FaMapMarkedAlt } from "react-icons/fa";

const Tour3 = () => (
 <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white px-6 md:px-20 py-16">

  {/* Image with overlay */}
  <div className="relative w-full h-[500px] mb-10 rounded-2xl shadow-lg overflow-hidden">
    <img
      src="https://images.pexels.com/photos/7891821/pexels-photo-7891821.jpeg"
      alt="Baratang Island"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-lg">
        Baratang Island
      </h1>
      <p className="text-white text-lg md:text-xl font-light mt-2 drop-shadow">
        Caves, mangroves & tribal legends — adventure wrapped in untouched wilderness.
      </p>
    </div>
  
  </div>

    <p className="text-base italic font-light mb-8 leading-relaxed text-gray-700 dark:text-gray-300">
      <strong> Baratang Island </strong>is a place where nature and mystery coexist. 🌿 Tucked deep within the <strong>Andaman archipelago</strong>, it is one
      of the few places in India where you can venture through mangrove-covered waterways 🛶 to discover naturally formed
       <strong> limestone caves</strong>and <strong>glimpse</strong> the intriguing tribal cultures that have lived untouched for centuries. Expect a journey
      filled with dense tropical forests, hidden creeks, and surreal silence broken only by nature. A boat ride through
      thick mangrove tunnels feels like stepping into another realm — quiet, green, and ancient. Baratang is not just a tour,
      it's a timeless journey.
    </p>

    {/* Highlights */}
    <h2 className="text-xl font-semibold mt-8 mb-3">🌟 Highlights</h2>
    <ul className="list-disc pl-6 text-sm text-gray-600 dark:text-gray-300 space-y-2">
      <li>Explore the spectacular limestone caves</li>
      <li>Ride through dense mangrove forests via narrow creeks</li>
      <li>Witness the tribal areas from a respectful distance</li>
      <li>Rich birdlife and tranquil forests for nature lovers</li>
    </ul>

    {/* Icons */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center my-12">
      <div>
        <FaLeaf size={30} className="mx-auto text-green-600" />
        <p className="mt-2 text-sm">Thick Forests</p>
      </div>
      <div>
        <FaShip size={30} className="mx-auto text-blue-500" />
        <p className="mt-2 text-sm">Mangrove Boat Ride</p>
      </div>
      <div>
        <FaMountain size={30} className="mx-auto text-gray-500" />
        <p className="mt-2 text-sm">Limestone Caves</p>
      </div>
      <div>
        <FaMapMarkedAlt size={30} className="mx-auto text-purple-500" />
        <p className="mt-2 text-sm">Raw Adventure</p>
      </div>
    </div>

    {/* Map */}
    <h2 className="text-xl font-semibold mb-4">📍 Baratang Island Location</h2>
    <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-md mb-12">
      <iframe
        title="Baratang Island Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126556.55736407976!2d92.67182657066361!3d12.13675825093945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30888db79ffb8911%3A0xe3a185f1e4982fa2!2sBaratang%20Island!5e0!3m2!1sen!2sin!4v1657023010295!5m2!1sen!2sin"
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
      Best visited between November and April. Monsoons (June–September) bring lush green beauty but also unpredictable waters.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">🧭 How to Reach</h2>
    <p className="text-sm mb-6 text-gray-600 dark:text-gray-300">
      Travel from Port Blair via the Andaman Grand Trunk Road (ATR) — a scenic drive of about 100 km with a mandatory check post
      crossing through tribal areas. Boats also operate from Nilambur Jetty.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">🧳 Travel Tips</h2>
    <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 mb-6">
      <li>Wear light cotton clothes and comfortable walking shoes</li>
      <li>Photography inside tribal reserves is strictly prohibited</li>
      <li>Pack snacks and water; options are limited at the site</li>
      <li>Carry insect repellent for forest areas</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2">📸 Ideal For</h2>
    <p className="text-sm mb-6 text-gray-600 dark:text-gray-300">
      Offbeat explorers, nature lovers, cave photographers, and eco-travelers.
    </p>
  </div>
);

export default Tour3;
