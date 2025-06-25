import React from "react";
import bgImage from "../../assets/places/railconnection.jpg"; // replace this with your train-themed image

const trips = [
  {
    days: "10 DAY TOUR",
    title: "Highlights of Poland",
    price: "$1844",
    image:
      "https://media.gadventures.com/media-server/cache/06/43/0643ac0abbabdaaac22a4a48a5667fb3.webp",
  },
  {
    days: "11 DAY TOUR",
    title: "Back Roads of Japan",
    price: "$3374",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60",
  },
  {
    days: "13 DAY TOUR",
    title: "Paradise in Croatia",
    price: "$2899",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
  },
  {
    days: "9 DAY TOUR",
    title: "Uncover India: High Deserts & Markets",
    price: "$849",
    image:
      "https://media.gadventures.com/media-server/cache/9c/e2/9ce2468a2d82d3bab541ec953c9ba919.jpg",
  },
  {
    days: "15 DAY TOUR",
    title: "Korea to Japan: Epic Eats & Bright City",
    price: "$2879",
    image:
      "https://images.pexels.com/photos/32655011/pexels-photo-32655011.jpeg",
  },
  {
    days: "17 DAY TOUR",
    title: "Solo-ish China",
    price: "$1849",
    image:
      "https://images.pexels.com/photos/745243/pexels-photo-745243.jpeg",
  },
  {
    days: "14 DAY TOUR",
    title: "Epic Vietnam: Hanoi, Ho Chi Minh City",
    price: "$804",
    image:
      "https://images.pexels.com/photos/1102398/pexels-photo-1102398.jpeg",
  },
];

const RailCollection = () => {
  return (
    <section
    data-aos="zoom-in"
      className="py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      


      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Text */}
        <div className="lg:w-1/2 text-white text-center lg:text-left">
          <h2 
          data-aos="fade-up"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Now in the station:
            <br /> your next adventure
          </h2>
          <p 
          data-aos="zoom-in"
           className="text-base sm:text-lg text-white/90 mb-6">
            Our brand-new Rail Collection has officially rolled in. Explore 60+ trips
            worldwide that combine iconic train journeys with immersive, locally-led
            experiences. Travel easier, go deeper, and see the world in a whole new
            way — one track at a time.
          </p>
          <button 
          data-aos="zoom-in"
          className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-purple-100 transition">
            Climb aboard
          </button>
        </div>

        {/* Right Scrollable Cards */}
        <div 
        data-aos="zoom-in"
        className="lg:w-1/2 w-full overflow-x-auto pb-4">
          <div className="flex gap-6 min-w-[700px] sm:min-w-full">
            {trips.map((trip, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden w-72 shrink-0 flex-none"
              >
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-xs text-gray-500 font-medium mb-1">{trip.days}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {trip.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    <span className="text-xl font-bold text-gray-900">
                      {trip.price}
                    </span>{" "}
                    / per person
                  </p>
                  <button className="text-purple-700 font-semibold hover:underline">
                    View itinerary
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RailCollection;
