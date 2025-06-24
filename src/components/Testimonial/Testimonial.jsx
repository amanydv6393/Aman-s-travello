import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Samuya Chauhan",
    text: "Traveling with this company was a dream! Everything was so smooth and well-organized. Can't wait for my next trip!",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 2,
    name: "Apoorva Yadav",
    text: "I was amazed by the beautiful destinations and the great hospitality. Truly a memorable experience!",
    img: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    id: 3,
    name: "Aavesh Saxena",
    text: "From booking to exploring — everything felt effortless. Highly recommend it to every traveler out there!",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 4,
    name: "Subhangi Madan",
    text: "It was the perfect solo trip! Felt safe, had fun, and the places were just breathtaking!",
    img: "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&h=500&w=500",
  },
  {
    id: 5,
    name: "Mahika Bhatnagar",
    text: "Such a friendly and well-coordinated team! They helped me discover hidden gems I would've missed on my own.",
    img: "https://randomuser.me/api/portraits/women/49.jpg",
  },
  {
    id: 6,
    name: "Grace Hayden",
    text: "An unforgettable journey with breathtaking views and superb service. Every moment was a highlight!",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 7,
    name: "Alica Schmidt",
    text: "The planning, the destinations, and the people – everything was top notch. Highly recommended!",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "Michele Morrone",
    text: "Absolutely stunning experience. As a frequent traveler, this was one of my best trips ever!",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
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

  return (
    <div className="py-10" data-aos="fade-up" data-aos-duration="600">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Testimonial
          </p>
          <h1 className="text-3xl font-bold">What Our Travelers Say</h1>
          <p className="text-xs text-gray-400">
            Hear from real people who explored with us. Their stories inspire the journey.
          </p>
        </div>

        {/* Slider */}
        <div className="max-w-[1280px] mx-auto">
          <Slider {...settings}>
            {testimonialData.map(({ id, name, text, img }) => (
              <div key={id} className="my-6 px-3">
                <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-6 rounded-xl dark:bg-gray-800 bg-primary/10 relative transition-transform hover:scale-105 duration-300">
                  <img
                    src={img}
                    alt={name}
                    className="rounded-full w-24 h-24 object-cover border-4 border-transparent hover:border-yellow-400 duration-300"
                  />
                  <h1 className="text-xl font-bold">{name}</h1>
                  <p className="text-gray-500 text-sm">{text}</p>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
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
