import React, { useRef } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ NEW

const PlaceCard = ({
  img,
  title,
  location,
  description,
  price,
  discountPrice,
  type,
  index,
}) => {
  const navigate = useNavigate(); // ✅ NEW
  const rating = (Math.random() * (5 - 4) + 4).toFixed(1);
  const totalReviews = Math.floor(Math.random() * 50) + 100;
  const showRibbon = Math.random() > 0.5;

  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 5;
    const rotateY = ((x - centerX) / centerX) * -5;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const resetTilt = () => {
    const card = cardRef.current;
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <div
      className="relative rounded-xl bg-white dark:bg-gray-800 p-4 flex flex-col shadow-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] border border-transparent hover:border-cyan-400"
      data-aos="fade-up"
      data-aos-delay={index * 100}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      {/* Ribbon */}
      {showRibbon && (
        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded shadow-md z-10">
          Limited Seats
        </div>
      )}

      {/* Image */}
      <div className="relative overflow-hidden rounded-lg mb-4 group">
        <img
          src={img}
          alt={title}
          className="w-full h-52 object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <h2 className="text-xl font-semibold mb-1">{title}</h2>
      <p className="text-sm text-gray-500 dark:text-gray-300 mb-1">{location}</p>
      <p className="text-sm text-gray-700 dark:text-gray-200 mb-3 line-clamp-3">
        {description}
      </p>

      <p className="text-sm font-medium text-primary mb-2">{type}</p>

      {/* Rating */}
      <div className="relative group mb-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`text-sm mr-1 ${
                i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>

        <div className="absolute top-full mt-1 left-0 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transform transition-all duration-300 origin-top-left z-20">
          Rated {rating} by {totalReviews}+ trekkers
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center gap-2 mb-4">
        <p className="text-lg font-bold text-green-600">
          ₹{discountPrice.toLocaleString()}
        </p>
        <p className="line-through text-sm text-gray-500">
          ₹{price.toLocaleString()}
        </p>
        <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded">
          10% OFF
        </span>
      </div>

      {/* CTA Button */}
      <button
        onClick={() => navigate("/kashmir-great-lakes")}
        className="mt-auto bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition"
      >
        View Itinerary
      </button>
    </div>
  );
};

export default PlaceCard;
