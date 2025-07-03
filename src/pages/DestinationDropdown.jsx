// DestinationDropdown.jsx
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const destinations = [
  {
    name: "North America",
  },
  {
    name: "Central America & Caribbean",
    highlight: true,
    subDestinations: [
      "Belize",
      "Costa Rica",
      "Cuba",
      "El Salvador",
      "Guatemala",
      "Honduras",
      "Mexico",
      "Nicaragua",
    ],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Falls_in_the_Jungle_%28107818745%29.jpeg/640px-Falls_in_the_Jungle_%28107818745%29.jpeg",
  },
  {
    name: "South America",
  },
  {
    name: "Europe",
  },
  {
    name: "North Africa & Middle East",
  },
  {
    name: "Africa",
  },
  {
    name: "Asia",
  },
  {
    name: "Oceania",
  },
  {
    name: "Polar",
  },
];

const DestinationDropdown = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative group">
      <button className="px-4 py-2 hover:text-blue-600 transition">Destinations</button>
      <div className="absolute left-0 top-full bg-white shadow-xl border rounded-md mt-2 hidden group-hover:flex z-50 w-[900px]">
        {/* Left Sidebar */}
        <div className="w-60 p-4 border-r">
          {destinations.map((d) => (
            <div
              key={d.name}
              onMouseEnter={() => d.subDestinations && setSelected(d)}
              className={`cursor-pointer px-2 py-1 rounded hover:bg-gray-100 flex justify-between items-center ${
                d.highlight ? "text-purple-600 font-medium" : ""\              }`}
            >
              {d.name} {d.subDestinations && <FaChevronRight size={12} />}
            </div>
          ))}
        </div>

        {/* Right Content */}
        {selected && (
          <div className="p-6 flex gap-8">
            {/* Text List */}
            <div>
              <h3 className="text-xs uppercase text-gray-400 mb-2">All destinations in</h3>
              <h2 className="text-2xl font-bold mb-4">{selected.name}</h2>
              <div className="grid grid-cols-2 gap-1 text-sm text-gray-800">
                {selected.subDestinations.map((place) => (
                  <div key={place}>{place}</div>
                ))}
              </div>
              <button className="text-sm mt-4 text-blue-500 hover:underline">
                View all {selected.name} →
              </button>
            </div>
            {/* Image */}
            <div>
              <img
                src={selected.image}
                alt={selected.name}
                className="w-48 h-64 object-cover rounded-xl"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationDropdown;
