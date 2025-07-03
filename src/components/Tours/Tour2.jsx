import React from "react";
import { FaWater, FaLeaf, FaSun, FaMapMarkerAlt } from "react-icons/fa";

const Tour2 = () => {
  return (
   <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white px-6 md:px-20 py-16">

  {/* Image section with overlay */}
  <div className="relative w-full h-[500px] mb-10 rounded-2xl shadow-lg overflow-hidden">
    <img
      src="https://images.pexels.com/photos/12720656/pexels-photo-12720656.jpeg"
      alt="Neil Island"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-lg">
        Neil Island
      </h1>
      <p className="text-white text-lg md:text-xl font-light mt-2 drop-shadow">
        Pristine beaches & barefoot bliss — where time slows and the sea sings.
      </p>
    </div>
  </div>
      

      <p className="text-base italic font-light mb-8 leading-relaxed text-gray-700 dark:text-gray-300">
        🏝️ <strong>Neil Island</strong>, now known as <strong>Shaheed Dweep</strong>, is a serene gem tucked away in the Andaman Islands. 
        It's famous for its calm atmosphere, soft white-sand beaches, and slow island vibes 🌊. Life moves gently here — the roads are quiet, 
        locals are friendly, and nature speaks in waves and whispers. Watch golden sunrises at Sitapur Beach 🌅, snorkel in shallow coral 
        bays at Bharatpur 🐠, and stroll on the natural Howrah Bridge 🌉 made of living rock. With fewer tourists and more palm trees, 
        Neil Island offers peace to those who seek simplicity and raw island beauty.
      </p>

      {/* Highlights Section */}
      <h2 className="text-xl font-semibold mt-8 mb-3">🌟 Highlights</h2>
      <ul className="list-disc pl-6 text-sm text-gray-600 dark:text-gray-300 space-y-2">
        <li>Swim in turquoise lagoons and calm waters</li>
        <li>Explore coral reefs through snorkeling and glass-bottom boats</li>
        <li>Visit Sitapur, Bharatpur, and Laxmanpur beaches</li>
        <li>Capture photos at the Natural Rock Formation (Howrah Bridge)</li>
        <li>Watch stunning sunrises and sunsets</li>
      </ul>

      {/* Icons Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center my-12">
        <div>
          <FaWater size={30} className="mx-auto text-blue-500" />
          <p className="mt-2 text-sm">Shallow Waters</p>
        </div>
        <div>
          <FaLeaf size={30} className="mx-auto text-green-600" />
          <p className="mt-2 text-sm">Nature Walks</p>
        </div>
        <div>
          <FaSun size={30} className="mx-auto text-yellow-400" />
          <p className="mt-2 text-sm">Golden Sunsets</p>
        </div>
        <div>
          <FaMapMarkerAlt size={30} className="mx-auto text-red-500" />
          <p className="mt-2 text-sm">Iconic Rock Bridge</p>
        </div>
      </div>

    

      {/* Map Embed */}
      <h2 className="text-xl font-semibold mb-4">📍 Neil Island Location</h2>
      <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-md mb-12">
        <iframe
          title="Neil Island Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31610.799474374463!2d93.01908802554617!3d11.832477914935854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30889654c1b0c06f%3A0x3d44a6d0beac77f3!2sNeil%20Island!5e0!3m2!1sen!2sin!4v1657045336992!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

   {/* Best Time */}
      <h2 className="text-xl font-semibold mt-8 mb-2">📅 Best Time to Visit</h2>
      <p className="text-sm mb-6 text-gray-600 dark:text-gray-300">
        October to May is the perfect time — the skies are clear, the sea is calm, and the weather is perfect for swimming, sightseeing, and sunbathing.
      </p>

  {/* Cuisine */}
      <h2 className="text-xl font-semibold mt-8 mb-2">🍴 Local Cuisine</h2>
      <p className="text-sm mb-6 text-gray-600 dark:text-gray-300">
        Try fresh catch-of-the-day seafood dishes, coconut-based curries, grilled fish, and tropical fruit smoothies 🍹. Cafes serve both Indian and continental food with a seaside vibe.
      </p>

      {/* Travel Tips */}
      <h2 className="text-xl font-semibold mt-8 mb-2">🧳 Travel Tips</h2>
      <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 mb-6">
        <li>Carry cash — only a few ATMs and cards may not work</li>
        <li>Internet is slow — take the chance to unwind</li>
        <li>Book ferries between Havelock & Neil in advance</li>
        <li>Wear water shoes for rocky beach areas</li>
      </ul>
      {/* Perfect For */}
      <h2 className="text-xl font-semibold mt-8 mb-2">📸 Perfect For</h2>
      <p className="text-sm mb-6 text-gray-600 dark:text-gray-300">
        Honeymooners, backpackers, solo travelers, and anyone who loves a peaceful tropical vibe with picture-perfect beaches.
      </p>
    </div>
  );
};

export default Tour2;
