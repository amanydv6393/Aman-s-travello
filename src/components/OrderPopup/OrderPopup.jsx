import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const OrderPopup = ({ orderPopup, setOrderPopup }) => {
  const bgImageUrl = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"; // change to any image you want

  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center px-4">
          <div
            className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden"
            style={{
              backgroundImage: `url(${bgImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

            {/* Content */}
            <div className="relative z-10 p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold text-white">Book Your Dream Trip</h1>
                <IoCloseOutline
                  className="text-3xl text-white cursor-pointer"
                  onClick={() => setOrderPopup(false)}
                />
              </div>

              {/* Subtitle */}
              <p className="text-sm text-white/80 mb-6">
                Fill in your details and we’ll get back to you shortly with your perfect escape!
              </p>

              {/* Form Fields */}
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full rounded-full border border-white/30 bg-white/90 px-4 py-2 text-sm text-black placeholder:text-gray-600 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-full border border-white/30 bg-white/90 px-4 py-2 text-sm text-black placeholder:text-gray-600 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full rounded-full border border-white/30 bg-white/90 px-4 py-2 text-sm text-black placeholder:text-gray-600 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Your Address"
                  className="w-full rounded-full border border-white/30 bg-white/90 px-4 py-2 text-sm text-black placeholder:text-gray-600 focus:outline-none"
                />
              </div>

              {/* Button */}
              <div className="flex justify-center mt-6">
                <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white font-medium py-2 px-6 rounded-full shadow-md">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderPopup;
