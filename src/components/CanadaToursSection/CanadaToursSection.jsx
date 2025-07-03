import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const tours = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/29007474/pexels-photo-29007474.jpeg",
    title: "Snorkel Through a World of Vibrant Coral Gardens",
    label: "Havelock Island · Scuba diving, reef walks & golden sunsets\nA paradise for marine life lovers.",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/12720656/pexels-photo-12720656.jpeg",
    title: "Sink Your Feet into the Silken Sands of Neil Island",
    label: "Neil Island · Pristine beaches & barefoot bliss\nWhere time slows and the sea sings.",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/7891821/pexels-photo-7891821.jpeg",
    title: "Unveil Mystical Caves Among Emerald Trees",
    label: "Baratang Island · Caves, mangroves & tribal legends\nAdventure wrapped in untouched wilderness.",
  },
  {
    id: 4,
    image: "https://media.gadventures.com/media-server/dynamic/admin/content_pages/canadaday4.webp",
    title: "Sail Alongside Playful Dolphins in Crystal Waters",
    label: "North Bay Island · Snorkeling & open-sea encounters\nNature's thrill just beneath the waves.",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/8882950/pexels-photo-8882950.jpeg",
    title: "Savor the Freshest Seafood with Coastal Sunsets",
    label: "Port Blair · From sea-to-plate specialties like curried crab 🦀 to coastal fish thalis — every bite tastes like the ocean breeze.",
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/9955802/pexels-photo-9955802.jpeg",
    title: "Glide Across Turquoise Waters on a Scenic Cruise",
    label: "Makruzz Catamaran · Island hopping with ocean views\nComfort meets the call of the sea.",
  },
  {
    id: 7,
    image: "https://images.pexels.com/photos/1857003/pexels-photo-1857003.jpeg",
    title: "Paddle Gently Through Sunset-Tinted Mangroves",
    label: "Chidiya Tapu · Kayaking, golden skies & peaceful shores\nWhere the forest whispers at dusk.",
  }
];

const CanadaToursSection = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const navigate = useNavigate();

  return (
    <div data-aos="zoom-in" className="bg-white dark:bg-gray-900 dark:text-white py-16 w-full">
      <div className="text-center mb-12 px-4">
        <h2 data-aos="fade-up" className="text-3xl font-bold mb-2">
          Andaman & Nicobar: The Hidden Jewels of India
        </h2>
        <p data-aos="fade-up" className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          From emerald waters and coral gardens to ancient tribal cultures,
          the Andaman and Nicobar Islands promise a rare blend of untouched
          beauty and rich heritage — a true tropical escape.
        </p>
      </div>

      <div className="flex items-center w-full overflow-x-auto scrollbar-hide">
        {tours.map((tour) => (
          <div
            key={tour.id}
            onMouseEnter={() => setHoveredId(tour.id)}
            onMouseLeave={() => setHoveredId(null)}
            className={`relative transition-all duration-500 cursor-pointer overflow-hidden flex-shrink-0 h-[480px]
              ${hoveredId === tour.id ? "w-[580px]" : "w-[280px]"} 
              ${hoveredId === tour.id ? "z-10" : "z-0"}`}
          >
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-full object-cover transition duration-500"
            />
            <div data-aos="zoom-in" className="absolute inset-0 flex flex-col justify-between text-center text-white bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 py-10">
              <h4 className="text-lg font-medium mt-32 max-w-[260px] mx-auto leading-tight line-clamp-2">
                {tour.title}
              </h4>

              <div className="flex flex-col items-center">
                <span className="text-xs bg-red-500 px-2 py-1 rounded-md mb-2">
                  NEW
                </span>
                <p className="text-sm font-medium mb-3 max-w-[260px] mx-auto leading-snug line-clamp-2 whitespace-pre-line">
                  {tour.label}
                </p>
                <button
                  onClick={() => navigate(`/tour/${tour.id}`)}
                  className="bg-purple-700 hover:bg-purple-800 text-white text-xs px-2 py-[2px] rounded-md"
                >
                  View tour
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CanadaToursSection;
