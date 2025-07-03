import React from "react";
import { FaTree, FaSun, FaMapSigns, FaWater } from "react-icons/fa";

const Tour7 = () => (
 <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white px-6 md:px-20 py-16">
  <h1 className="text-3xl font-bold mb-6 text-center">
    🚢 Glide Across Turquoise Waters on a Scenic Cruise
  </h1>

  {/* Image with overlay */}
  <div className="relative w-full h-[500px] mb-10 rounded-2xl overflow-hidden shadow-lg">
    <img
      src="https://images.pexels.com/photos/1857003/pexels-photo-1857003.jpeg"
      alt="Makruzz Catamaran"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-lg">
        Chidiya Tapu
      </h1>
      <p className="text-white text-lg md:text-xl font-light mt-2 drop-shadow">
        Chidiya Tapu · Kayaking, golden skies & peaceful shores  where the forest whispers at dusk.
      </p>
    </div>
  </div>

    <p className="text-base italic font-light mb-8 leading-relaxed text-gray-700 dark:text-gray-300">
      Tucked away on the southern tip of South Andaman, <strong>Chidiya Tapu</strong> is a nature lover’s retreat 🌳. As the sun begins to dip below the horizon, the mangrove forests here glow in hues of gold and amber. Paddling through narrow creeks and still waters, the only sounds you'll hear are the soft splash of your oar and distant bird calls. 🌅 Chidiya Tapu is famous for its <strong>sunset kayaking experiences</strong>, where serenity and scenic beauty come together to soothe the soul. Whether you're a first-timer or an experienced kayaker, this gentle journey through calm waters lets you feel truly one with nature.
    </p>

    {/* Highlights */}
    <h2 className="text-xl font-semibold mt-8 mb-3">🌟 Highlights</h2>
    <ul className="list-disc pl-6 text-sm text-gray-600 dark:text-gray-300 space-y-2">
      <li>Evening kayaking through golden mangrove creeks</li>
      <li>Sunset views over still water and lush forests</li>
      <li>Birdwatching opportunities — home to many exotic species</li>
      <li>Peaceful, uncrowded, and perfect for reflection</li>
    </ul>

    {/* Icons */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center my-12">
      <div>
        <FaWater size={30} className="mx-auto text-blue-500" />
        <p className="mt-2 text-sm">Tranquil Waters</p>
      </div>
      <div>
        <FaTree size={30} className="mx-auto text-green-600" />
        <p className="mt-2 text-sm">Mangrove Forests</p>
      </div>
      <div>
        <FaSun size={30} className="mx-auto text-yellow-500" />
        <p className="mt-2 text-sm">Sunset Kayaking</p>
      </div>
      <div>
        <FaMapSigns size={30} className="mx-auto text-purple-500" />
        <p className="mt-2 text-sm">Nature Trails</p>
      </div>
    </div>

    {/* Map */}
    <h2 className="text-xl font-semibold mb-4">📍 Chidiya Tapu Location</h2>
    <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-md mb-12">
      <iframe
        title="Chidiya Tapu Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19936.684144171113!2d92.70713332204704!3d11.483935490853616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30889423a71b74e3%3A0x3efbb8a06ebd4a26!2sChidiya%20Tapu!5e0!3m2!1sen!2sin!4v1657031234567"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    {/* Travel Tips */}
    <h2 className="text-xl font-semibold mt-8 mb-2">🧭 Travel Tips</h2>
    <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 mb-6">
      <li>Best visited in the evening for sunset kayaking</li>
      <li>Wear lightweight, water-resistant clothing</li>
      <li>Carry a flashlight or headlamp if returning after dark</li>
      <li>Bring a waterproof phone pouch or camera case</li>
    </ul>

    {/* Ideal For */}
    <h2 className="text-xl font-semibold mt-8 mb-2">📸 Ideal For</h2>
    <p className="text-sm mb-6 text-gray-600 dark:text-gray-300">
      Nature lovers, solo explorers, photographers, and anyone seeking peace and quiet away from the crowds.
    </p>
  </div>
);

export default Tour7;
