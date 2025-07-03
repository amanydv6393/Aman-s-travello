import React from "react";
import { FaUtensils, FaSun, FaFish, FaMapMarkedAlt } from "react-icons/fa";

const Tour5 = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white px-6 md:px-20 py-16">
  <h1 className="text-3xl font-bold mb-6 text-center">
    🍤 Savor the Freshest Seafood with Coastal Sunsets
  </h1>

  {/* Image with overlay */}
  <div className="relative w-full h-[500px] mb-10 rounded-2xl shadow-lg overflow-hidden">
    <img
      src="https://images.pexels.com/photos/8882950/pexels-photo-8882950.jpeg"
      alt="Port Blair"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-lg">
        Port Blair
      </h1>
      <p className="text-white text-lg md:text-xl font-light mt-2 drop-shadow">
        "From sea-to-plate specialties like curried crab to coastal fish thalis — every bite tastes like the ocean breeze."
      </p>
    </div>
  </div>

  <p className="text-base italic font-light mb-8 leading-relaxed text-gray-700 dark:text-gray-300">
  Welcome to <strong>Port Blair</strong> — the gateway to the Andaman Islands and a vibrant coastal city that blends <strong>history</strong>, <strong>culture</strong>, and <strong>culinary delight</strong>. As you walk through its bustling seafood markets, the scent of freshly grilled fish and coconut-laced curries fills the air. From beachside cafes to traditional kitchens, the island offers a taste of <strong>authentic Andamanese cuisine</strong> that lingers on your palate. When the sun begins its descent, head to the Marina Park shoreline where <strong>golden sunsets</strong> cast a warm glow over the sea. It’s a place to slow down, sip on local toddy, and savor both food and moment.
</p>


    {/* Highlights Section */}
    <h2 className="text-xl font-semibold mt-8 mb-3">🌟 Highlights</h2>
    <ul className="list-disc pl-6 text-sm text-gray-600 dark:text-gray-300 space-y-2">
      <li>Explore Aberdeen Bazaar and the Port Blair fish market</li>
      <li>Dine at seaside restaurants with live music and sunset views</li>
      <li>Try traditional dishes like fish curry, crab masala, and coconut prawns</li>
      <li>Catch the Sound & Light Show at Cellular Jail</li>
    </ul>

    {/* Icons Row */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center my-12">
      <div>
        <FaFish size={30} className="mx-auto text-blue-500" />
        <p className="mt-2 text-sm">Fresh Seafood</p>
      </div>
      <div>
        <FaUtensils size={30} className="mx-auto text-red-500" />
        <p className="mt-2 text-sm">Authentic Cuisine</p>
      </div>
      <div>
        <FaSun size={30} className="mx-auto text-yellow-500" />
        <p className="mt-2 text-sm">Coastal Sunsets</p>
      </div>
      <div>
        <FaMapMarkedAlt size={30} className="mx-auto text-green-600" />
        <p className="mt-2 text-sm">Local Markets</p>
      </div>
    </div>

    {/* Map Embed */}
    <h2 className="text-xl font-semibold mb-4">📍 Port Blair Location</h2>
    <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-md mb-12">
      <iframe
        title="Port Blair Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126557.18874352303!2d92.68160286184761!3d11.662004037117067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x308895dd79d0f23b%3A0x8702b47d74d58c25!2sPort%20Blair!5e0!3m2!1sen!2sin!4v1657123009286!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    {/* Extra Info */}
    <h2 className="text-xl font-semibold mt-8 mb-2">📅 Best Time to Visit</h2>
    <p className="text-sm mb-6 text-gray-600 dark:text-gray-300">
      Visit between October and March for pleasant evenings, perfect for exploring markets and savoring fresh seafood.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">🧭 How to Reach</h2>
    <p className="text-sm mb-6 text-gray-600 dark:text-gray-300">
      Regular flights connect Port Blair with Chennai, Kolkata, and Delhi. Ferries operate to nearby islands and attractions.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">🧳 Travel Tips</h2>
    <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 mb-6">
      <li>Check market timings before heading out</li>
      <li>Try the local seafood thali for a full-flavor experience</li>
      <li>Bring cash for local stalls and cafes</li>
      <li>Sunsets are best viewed from Corbyn’s Cove or Marina Park</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2">📸 Perfect For</h2>
    <p className="text-sm mb-6 text-gray-600 dark:text-gray-300">
      Food lovers, cultural explorers, casual photographers, and relaxed evening strollers.
    </p>
  </div>
);

export default Tour5;
