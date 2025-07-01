import React from "react";

const Hero = () => {
  const [priceValue, setPriceValue] = React.useState(30);

  return (
    <div className="bg-black/20 h-full dark:bg-black/40">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10 dark:bg-primary/20">
        <div className="container grid grid-cols-1 gap-4">
          {/* Heading Section */}
          <div className="text-white">
  <p data-aos="fade-up" className="text-sm opacity-70">
    Our Packages
  </p>
  <p
    data-aos="fade-up"
    data-aos-delay="300"
    className="font-bold text-3xl"
  >
    Search Your Destination
  </p>
</div>


          {/* Input Section */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="space-y-4 bg-white dark:bg-gray-900 rounded-md p-4 relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
              {/* Destination Input */}
              <div>
                <label htmlFor="destination" className="opacity-70 dark:text-white">
                  Search your Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Dubai"
                  className="w-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white my-2 rounded-full p-2 border-transparent focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>

              {/* Date Input */}
              <div>
                <label htmlFor="date" className="opacity-70 dark:text-white">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full my-2 rounded-full p-2
                    bg-gray-100 dark:bg-gray-800
                    text-black dark:text-white
                    border border-transparent
                    focus:border-primary focus:ring-1 focus:ring-primary
                    outline-none
                    [&::-webkit-calendar-picker-indicator]:invert"
                />
              </div>

              {/* Price Range Input */}
              <div>
                <label htmlFor="price" className="opacity-70 block dark:text-white">
                  <div className="w-full flex justify-between items-center">
                    <p>Max Price</p>
                    <p className="font-bold text-xl text-black dark:text-white">
                      $ {priceValue}
                    </p>
                  </div>
                </label>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-2 flex items-center justify-center">
                  <input
                    type="range"
                    name="price"
                    id="price"
                    className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
                    min="150"
                    max="1000"
                    value={priceValue}
                    step="10"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Search Button */}
            <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2">
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
