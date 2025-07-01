import React from "react";
import TravelImg from "../../assets/travelbox.png";
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="min-h-[550px] bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* Image section */}
            <div data-aos="flip-up">
              <img
                src={TravelImg}
                alt="Travel Box"
                className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover rounded-xl"
              />
            </div>

            {/* Text content section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0 lg:px-16">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
              >
                Explore all corners of the world with us
              </h1>

              <p
                data-aos="fade-up"
                className="text-sm text-gray-600 dark:text-gray-300 tracking-wide leading-8"
              >
                Aman's Travello is your gateway to unforgettable journeys — whether
                you’re traveling solo or with a group. Dive into immersive local
                cultures, stay in charming places, and let our guides take care of
                the rest — all with comfort and safety.
              </p>

              <div data-aos="zoom-in" className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-500 text-gray-800 dark:text-white" />
                    <p className="text-gray-800 dark:text-white">Flight</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-500 text-gray-800 dark:text-white" />
                    <p className="text-gray-800 dark:text-white">Hotel</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <IoIosWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-500 text-gray-800 dark:text-white" />
                    <p className="text-gray-800 dark:text-white">Wi-Fi</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-500 text-gray-800 dark:text-white" />
                    <p className="text-gray-800 dark:text-white">Foods</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Banner;
