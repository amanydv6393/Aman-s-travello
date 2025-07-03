import React from "react";
import { FaShip, FaBinoculars, FaCouch, FaMapMarkedAlt } from "react-icons/fa";

const Tour6 = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white px-6 md:px-20 py-16">
    <h1 className="text-3xl font-bold mb-6 text-center">
      🚢 Glide Across Turquoise Waters on a Scenic Cruise
    </h1>

 <div className="relative w-full max-h-[500px] mb-10">
  <img
    src="https://images.pexels.com/photos/9955802/pexels-photo-9955802.jpeg"
    alt="Hampta Pass"
    className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
  />
  <div className="absolute inset-0 bg-black/40 rounded-2xl flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-lg">
       Makruzz Catamaran
    </h1>
    <p className="text-white text-lg md:text-xl font-light mt-2 drop-shadow">
    Luxury Ferry Rides Across the Turquoise Andaman Sea
    </p>
  </div>
</div>


    <p className="text-base italic font-light mb-8 leading-relaxed text-gray-700 dark:text-gray-300">
      Experience the <strong>elegance</strong> of sailing aboard the <strong>Makruzz Catamaran</strong>, the premier high-speed ferry service in the Andaman Islands. 🌊 As you cruise across the <strong>turquoise waters</strong> between Port Blair, Havelock, and Neil Island, the panoramic views are nothing short of breathtaking. The interiors are <strong>air-conditioned</strong> and comfortable, offering a smooth ride even through choppy waters. Whether you’re gazing at the vast blue from your reclining seat or stepping outside to feel the sea breeze, the Makruzz transforms ordinary transit into a <strong>relaxing journey</strong>. It’s the perfect way to elevate your island-hopping adventure with style and comfort.
    </p>

    {/* Highlights */}
    <h2 className="text-xl font-semibold mt-8 mb-3">🌟 Highlights</h2>
    <ul className="list-disc pl-6 text-sm text-gray-600 dark:text-gray-300 space-y-2">
      <li>Travel between islands in a luxurious, high-speed catamaran</li>
      <li>Enjoy air-conditioned comfort and scenic windows</li>
      <li>Perfect for families, couples, and solo travelers</li>
      <li>Direct routes from Port Blair to Havelock and Neil Island</li>
    </ul>

    {/* Icons */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center my-12">
      <div>
        <FaShip size={30} className="mx-auto text-blue-500" />
        <p className="mt-2 text-sm">Scenic Sailing</p>
      </div>
      <div>
        <FaBinoculars size={30} className="mx-auto text-green-500" />
        <p className="mt-2 text-sm">Ocean Views</p>
      </div>
      <div>
        <FaCouch size={30} className="mx-auto text-yellow-500" />
        <p className="mt-2 text-sm">Comfy Seating</p>
      </div>
      <div>
        <FaMapMarkedAlt size={30} className="mx-auto text-purple-500" />
        <p className="mt-2 text-sm">Island Routes</p>
      </div>
    </div>

    {/* Map */}
    <h2 className="text-xl font-semibold mb-4">📍 Makruzz Ferry Route</h2>
    <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-md mb-12">
      <iframe
        title="Makruzz Ferry Route"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126255.44519388895!2d92.73415965892844!3d11.650006538158684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30889d1c60abdb11%3A0x87cb57b7b453ce22!2sMakruzz%20Ferry%20Services!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    {/* More Info */}
    <h2 className="text-xl font-semibold mt-8 mb-2">📅 Best Time to Cruise</h2>
    <p className="text-sm mb-6 text-gray-600 dark:text-gray-300">
      October to May offers calm seas and clear skies, making it the ideal time to enjoy your ferry rides in comfort.
    </p>

    <h2 className="text-xl font-semibold mt-8 mb-2">🎟 Booking Tips</h2>
    <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 mb-6">
      <li>Book Makruzz tickets online in advance, especially during peak season</li>
      <li>Arrive at the terminal 30–45 minutes before departure</li>
      <li>Keep a digital and printed copy of your tickets</li>
    </ul>

    <h2 className="text-xl font-semibold mt-8 mb-2">📸 Ideal For</h2>
    <p className="text-sm mb-6 text-gray-600 dark:text-gray-300">
      Families, island-hoppers, comfort seekers, and scenic travel enthusiasts.
    </p>
  </div>
);

export default Tour6;
