import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Samuya Chauhan",
    text: "Traveling with this company was a dream! Everything was so smooth and well-organized. Can't wait for my next trip!",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 5,
  },
  {
    id: 2,
    name: "Apoorva Yadav",
    text: "I was amazed by the beautiful destinations and the great hospitality. Truly a memorable experience!",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Aavesh Saxena",
    text: "From booking to exploring — everything felt effortless. Highly recommend it to every traveler out there!",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Subhangi Madan",
    text: "It was the perfect solo trip! Felt safe, had fun, and the places were just breathtaking!",
    img: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&h=500&w=500",
    rating: 5,
  },
  {
    id: 5,
    name: "Mahika Bhatnagar",
    text: "Such a friendly and well-coordinated team! They helped me discover hidden gems I would've missed on my own.",
    img: "https://randomuser.me/api/portraits/women/49.jpg",
    rating: 4,
  },
  {
    id: 6,
    name: "Grace Hayden",
    text: "An unforgettable journey with breathtaking views and superb service. Every moment was a highlight!",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 5,
  },
  {
    id: 7,
    name: "Alica Schmidt",
    text: "The planning, the destinations, and the people – everything was top notch. Highly recommended!",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 4,
  },
  {
    id: 8,
    name: "Michele Morrone",
    text: "Absolutely stunning experience. As a frequent traveler, this was one of my best trips ever!",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const renderStars = (count) => {
    return (
      <div className="flex justify-center">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className={`text-yellow-400 text-sm ${
              i < count ? "opacity-100" : "opacity-30"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div
      className="relative py-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/315998/pexels-photo-315998.jpeg')",
      }}
      data-aos="fade-up"
      data-aos-duration="600"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 container">
        {/* Heading */}
        <div className="text-center mb-20 max-w-[400px] mx-auto text-white">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            What Our Travelers Say
          </h1>
          <p data-aos="fade-up" className="text-xs text-white/70">
            Hear from real people who explored with us. Their stories inspire the journey.
          </p>
        </div>

        {/* Slider */}
        <div className="max-w-[1280px] mx-auto">
          <Slider {...settings}>
            {testimonialData.map(({ id, name, text, img, rating }) => (
              <div key={id} className="my-6 px-3">
                <div
                  data-aos="fade-up"
                  className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-6 rounded-xl dark:bg-gray-800 bg-white/10 backdrop-blur-sm relative transition-transform hover:scale-105 duration-300"
                >
                  <img
                    src={img}
                    alt={name}
                    className="rounded-full w-24 h-24 object-cover border-4 border-transparent hover:border-yellow-400 duration-300"
                  />
                  <h1 data-aos="fade-up" className="text-xl font-bold text-white">
                    {name}
                  </h1>
                  <p data-aos="fade-up" className="text-white/80 text-sm">{text}</p>

                  {/* ⭐ Rating */}
                  {renderStars(rating)}

                  <p
                    data-aos="fade-up"
                    className="text-white/10 text-9xl font-serif absolute top-0 right-0"
                  >
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
