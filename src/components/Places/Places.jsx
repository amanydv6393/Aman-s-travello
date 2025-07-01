import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/kgl.jpg";
import Img2 from "../../assets/places/mad.jpg";
import Img3 from "../../assets/places/pinp.webp";
import Img4 from "../../assets/places/hamptta.jpg";
import Img5 from "../../assets/places/khand.jpg";
import Img6 from "../../assets/places/kinner.jpg";
import Img7 from "../../assets/places/sarpass.jpg";
import Img8 from "../../assets/places/kugtipass.jpg";
import Img9 from "../../assets/places/roop.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Kashmir Great Lakes Trek",
    location: "Jammu & Kashmir, India",
    description:
      "Experience the mesmerizing landscapes and serene alpine lakes of Kashmir on this unforgettable trek.",
    price: 18000,
    type: "Trekking Adventure",
  },
  {
    img: Img2,
    title: "Rudranath & Madmaheshwar in September", 
    location: "Uttrakhand, India",
    description:
      "A unique trek through spiritual and scenic routes, offering a blend of natural beauty and cultural heritage in September.",
    price: 8500,
    type: "Spritual Trek",
  },
  {
    img: Img3,
    title: "Pin Parvati Pass Trek",
    location: "Himachal Pradesh, India",
    description:
      "Challenge yourself on a high altitude trek across the magnificent Pin Parvati Pass, where rugged mountains meet untouched beauty.",
    price: 11999,
    type: "High Altitude Trek",
  },
  {
    img: Img4,
    title: "Hampta Paa with Chandrataal",
    location: "Himanchal Pradesh, India",
    description:
      "Embark on an exhilarating journey through lush valleys and scenic mountain passes, culminating at the pristine Chandrataal.",
    price: 5500,
    type: "Trekking Adventure",
  },
  {
    img: Img5,
    title: "Shrikhand Kailash Mahadev Peak",
    location: "Himanchal Pradesh, India",
    description:
      "Conquer the challenging terrains leading up to the majestic Shrikhand Kailash, revered for its stunning vistas.",
    price: 19500,
    type: "Mountain Trek",
  },
  {
    img: Img6,
    title: "Kinnaur Kailash Peak",
    location: "Himachal Pradesh, India",
    description:
      "Venture into remote regions to capture the beauty of Kinnaur Kailash, a trek demanding both grit and passion.",
    price: 11999,
    type: "Mountain Trek",
  },
  {
    img: Img7,
    title: "Sar Pass Trek",
    location: "Himanchal Pradesh, India",
    description:
      "Traverse the rugged terrains of Ladakh on the Sar Pass Trek, famed for its harsh beauty and high altitudes.",
    price: 6999,
    type: "Trekking Adventure",
  },
  {
    img: Img8,
    title: "Kugti Pass Trek",
    location: "Chamba Himanchal Pradesh, India",
    description:
      "Experience the thrill of high mountain passes and stark landscapes with the challenging Kugti Pass Trek.",
    price: 25999,
    type: "High Altitude Trek",
  },
  {
    img: Img9,
    title: "Skelton Lake Trek in Monsoon",
    location: "Uttrakhand, India",
    description:
      "Immerse yourself in the dramatic monsoon season as you journey to the enchanting Skelton Lake, surrounded by lush and vivid landscapes.",
    price: 18799,
    type: "Monsoon Special Trek",
  },
];

// Places.js

const Places = ({ handleOrderPopup }) => {
  return (
    <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
      <section data-aos="fade-up" className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Best Places to Visit
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PlacesData.map((item, index) => {
            const discountPrice = Math.round(item.price * 0.9); // 10% off
            return (
              <PlaceCard
                key={index}
                handleOrderPopup={handleOrderPopup}
                {...item}
                discountPrice={discountPrice}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Places;


