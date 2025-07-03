import React, { useState, useEffect } from "react";
import Img1 from "../../assets/solo.jpg";
import Img2 from "../../assets/fellow.jpg";
import Img3 from "../../assets/places/kgl.jpg";
import Img4 from "../../assets/places/hampta.jpg";
import Img5 from "../../assets/places/Ayodhya.jpg";
import Img6 from "../../assets/places/goa.jpg";
import Img7 from "../../assets/places/ne.jpg";
import Img8 from "../../assets/places/se.jpg";
import Img9 from "../../assets/places/pinp.webp";
import Img10 from "../../assets/places/spiti.jpg";
import Img11 from "../../assets/places/mahas.jpg";
import Img12 from "../../assets/places/gujj.jpg";
import Img13 from "../../assets/places/kerla.jpg";
import Img14 from "../../assets/places/pondiii.jpg";
import Img15 from "../../assets/places/mega.jpg";

const BlogsData = [
  { id: 1, image: Img1, title: "Top Places to Visit in India", description: "From the iconic Taj Mahal to the peaceful backwaters of Kerala and snow-capped peaks of Himachal — India is a traveler’s paradise packed with culture, food, festivals, and soul-stirring sights.", author: "Avery Cyrus", date: "June 20, 2025" },
  { id: 2, image: Img2, title: "Hidden Natural Wonders in the Ladakh", description: "Ladakh isn’t just barren beauty — it hides magical lakes like Tso Moriri, secret valleys like Zanskar, and ancient monasteries perched in silence. Discover what lies beyond the touristy routes.", author: "Nina Dobrev", date: "July 04, 2025" },
  { id: 3, image: Img3, title: "Why Kashmir Should Be On Your Bucket List", description: "Kashmir is heaven on Earth — alpine lakes like Vishansar, meadows like Gadsar, and treks through pine-covered valleys. Here’s why this Himalayan gem deserves your attention now.", author: "Ryan Terry", date: "June 10, 2025" },
  { id: 4, image: Img4, title: "Exploring the Great Himalayan Trails", description: "From Nepal's Annapurna Circuit to India's KGL trek, explore majestic mountain passes, glaciers, and spiritual landscapes along the roof of the world.", author: "Lara James", date: "July 06, 2025" },
  { id: 5, image: Img5, title: "A Cultural Dive into Varanasi", description: "Walk the ghats of the Ganges, witness evening aartis, and discover timeless traditions in India’s spiritual capital.", author: "Meera Kapoor", date: "July 02, 2025" },
  { id: 6, image: Img6, title: "Coastal Escapes in South India", description: "From Goa's beaches to Pondicherry’s French charm and Kerala’s coastal routes — unwind where the land meets the sea.", author: "Nicole Wallace", date: "July 01, 2025" },
  { id: 7, image: Img7, title: "Mystical North East India", description: "From the living root bridges of Meghalaya to the monasteries of Arunachal, North East India offers unmatched natural beauty and cultural richness.", author: "Isha Singh", date: "July 07, 2025" },
  { id: 8, image: Img8, title: "Unexplored Charms of South West India", description: "Discover the serene hill stations of Coorg, Wayanad’s spice plantations, and the laid-back coastal vibes of Karnataka’s hidden gems.", author: "Dev Mehta", date: "July 08, 2025" },
  { id: 9, image: Img9, title: "Colors of North West India", description: "Explore the Thar Desert, royal forts of Rajasthan, and vibrant cities like Jaipur and Jodhpur that echo with stories of valor and culture.", author: "Pia Bhatt", date: "July 09, 2025" },
  { id: 10, image: Img10, title: "Into the Wilderness of Spiti Valley", description: "Remote, raw, and rugged — Spiti is a cold desert with ancient monasteries, pristine rivers, and treks that test your spirit.", author: "Kunal Verma", date: "July 10, 2025" },
  { id: 11, image: Img11, title: "Forts of Maharashtra: Echoes of Maratha Valor", description: "Uncover the architectural marvels and strategic military forts of Maharashtra — from Rajgad to Raigad, these forts tell tales of valour and history.", author: "Priya Deshmukh", date: "July 11, 2025" },
  { id: 12, image: Img12, title: "Jyotirlingas of Gujarat", description: "Witness divine devotion and history by visiting the sacred Jyotirlingas of Gujarat, including Somnath — a spiritual and architectural gem by the Arabian Sea.", author: "Ravi Trivedi", date: "July 12, 2025" },
  { id: 13, image: Img13, title: "Serenity in Kerala", description: "Cruise the tranquil backwaters, sip on coconut water, and experience Ayurveda in God’s Own Country — Kerala, where nature meets wellness.", author: "Anu Menon", date: "July 13, 2025" },
  { id: 14, image: Img14, title: "French Vibes of Pondicherry", description: "From colorful streets to seaside cafes and spiritual retreats — Pondicherry blends French colonial charm with Indian soul.", author: "Claire Thomas", date: "July 14, 2025" },
  { id: 15, image: Img15, title: "Meghalaya: Abode of Clouds", description: "Explore the wettest place on Earth, trek to living root bridges, and lose yourself in the green, misty hills of Meghalaya.", author: "Simran Anthal", date: "July 15, 2025" }
];

const BlogsComp = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const handleNext = () => {
    setDirection("right");
    setStartIndex((prevIndex) => (prevIndex + 3) % BlogsData.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setStartIndex((prevIndex) =>
      prevIndex - 3 < 0 ? BlogsData.length - 3 : prevIndex - 3
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const visibleCards = BlogsData.slice(startIndex, startIndex + 3);

  return (
    <div data-aos="fade-up" className="bg-white dark:bg-gray-900 dark:text-white py-16 transition-colors duration-500">
      <section
        data-aos="fade-up"
        className="w-full max-w-[1400px] mx-auto px-4 sm:px-6"
      >
        <h1 data-aos="fade-up" className="mb-10 border-l-8 border-primary/50 dark:border-white/40 py-2 pl-4 text-3xl font-bold">
          Our Latest Blogs
        </h1>

        <div  data-aos="fade-up" className="relative overflow-hidden">
          <div data-aos="fade-up"
            className={`flex gap-6 justify-center transition-all duration-1000 ease-in-out transform ${direction === "right" ? "translate-x-0" : "-translate-x-0"}`}
          >
            {visibleCards.map((item) => (
              <div
                key={item.id}
               data-aos="fade-up" className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500 w-full max-w-sm"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div data-aos="fade-up" className="p-5">
                  <h2  data-aos="fade-up"className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h2>
                  <p data-aos="fade-up" className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    {item.description}
                  </p>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    By <span className="font-medium">{item.author}</span> • {item.date}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
  onClick={handlePrev}
  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-primary text-white dark:bg-white dark:text-black p-2 rounded-full z-10 shadow-md"
>
  ❮
</button>

<button
  onClick={handleNext}
  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white dark:bg-white dark:text-black p-2 rounded-full z-10 shadow-md"
>
  ❯
</button>

        </div>
      </section>
    </div>
  );
};

export default BlogsComp;
