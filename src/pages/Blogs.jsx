import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import mountainBg from "../../src/assets/video/main.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaHeart, FaShareAlt } from "react-icons/fa";

AOS.init();

const blogData = [
  {
    id: 1,
    date: "2025-04-17",
    author: "Team TrekVibe",
    image: "https://i.ytimg.com/vi/ELu5lIfp4ng/hq720.jpg",
    title: "How to Avoid Altitude Sickness on the Kugti Pass Base Camp Trek",
    excerpt: "The Kugti Pass Base Camp Trek takes you to elevations above 4,000 meters, where the risk of altitude sickness becomes very real. Whether you're a seasoned trekker or a first-timer in the high Himalayas, understanding how to recognize and prevent AMS (Acute Mountain Sickness) is crucial. This guide shares practical tips on acclimatization, hydration, pacing, and what symptoms to watch for — so you can enjoy the breathtaking scenery without compromising your health.",
    content: "Full blog content here...",
    tags: ["Himachalspititrek", "AltitudeSickness", "TrekTips", "HighAltitude"]
  },
  {
    id: 2,
    date: "2025-06-12",
    author: "Varnit Tyagi",
    image: "https://i.ytimg.com/vi/RTM-6k1wiwU/hq720.jpg?sqp=-…ADIQj0AgKJD&rs=AOn4CLBAaqtK4fjcOTMndultJ9KCzZb6TQ",
    title: "Camping Essentials: What You Should Never Forget on the Pin Parvati Pass Trek",
    excerpt: "The Pin Parvati Pass Trek (5,319 m) is not your average Himalayan trek — it’s long, remote, and physically taxing. You’ll be trekking through unpredictable weather, snowfields, river crossings, and vast alpine landscapes for 10–12 days with minimal contact with civilization. That’s why having the right camping gear is not just about comfort — it’s about survival and safety.",

    content: "Full blog content here...",
    tags: ["OutdoorGear", "SurvivalTips","PinParvatiPass",
  "CampingEssentials",
  "WildernessCamping",
  "ColdWeatherGear",
  "SurvivalTips"]
  },
  {
    id: 3,
    date: "2025-05-19",
    author: "TrekVibe Editorial",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_mDtF3dUI0iYRjNPlkk2PiDbqijZYwtWVdQ&s",
    title: "How to Experience Authentic on the Vasuki taal Trek (Via Tapovan) - Gangotri",
    excerpt: "The Vasuki Taal Trek via Tapovan is not just a journey through the majestic Garhwal Himalayas — it's a spiritual and cultural experience rooted in the heart of Gangotri. This guide reveals how to truly connect with the sacred landscape, interact with sadhus at Tapovan, witness the raw beauty of Vasuki Taal, and immerse yourself in the silence, spirituality, and authenticity of one of Uttarakhand’s most revered high-altitude trails.",
    content: "Full blog content here...",
    tags: ["VasukiTaal", "Tapovan", "GangotriTrek", "SpiritualTrekking", "HimalayanExperience"]
  },
  {
    id: 4,
    date: "2025-03-14",
    author: "Foodie Explorer",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445",
    title: "A Foodie's Tour of Rajasthan: Where to Eat and What to Try",
    excerpt: "From the spicy Laal Maas of Jodhpur to the sweet Ghewar of Jaipur, Rajasthan is a royal feast for food lovers. This guide takes you through the state’s culinary gems — hidden street stalls, age-old thali joints, and palace-style dining experiences. Discover what to eat, where to eat, and how every bite tells a story of Rajasthan’s bold flavors, rich culture, and royal heritage.",
    content: "Full blog content here...",
    tags: ["RajasthanFood", "LaalMaas", "IndianCuisine", "FoodieTravel", "CulturalEats"]
  },
  {
    id: 5,
    date: "2024-02-23",
    author: "Indian Rail Chronicles",
    image: "https://images.pexels.com/photos/4553621/pexels-photo-4553621.jpeg",
    title: "Three Scenic Train Rides Around the India",
    excerpt: "India’s railway routes are more than just a means of travel — they’re windows into the country’s diverse landscapes. From the lush tea gardens of Assam to the snow-clad peaks of Kashmir and the coastal curves of the Konkan region, these three scenic train journeys offer breathtaking views and unforgettable experiences. Hop aboard and discover why train travel in India is one of the best ways to soak in its beauty, culture, and charm — slowly and soulfully.",
    content: "Full blog content here...",
    tags: ["WorldTravel", "IndianRailways", "ScenicTrainRides", "KonkanRailway", "DarjeelingHimalayanRailway", "ToyTrainExperience", "KashmirTrainRoute", "HeritageJourneys"]
  },
  {
    id: 6,
    date: "2024-06-08",
    author: "Uttarakhand Trekkers",
    image: "https://images.pexels.com/photos/32642169/pexels-photo-32642169.jpeg",
    title: "A Complete Guideline to Pangarchulla Base Camp Trek",
    excerpt: "Known for its snow-covered summit and panoramic Himalayan views, the Pangarchulla Base Camp Trek is an underrated yet spectacular journey in Uttarakhand. This complete guide covers everything — from route info and fitness level to best season, gear checklist, and permit details — to help you plan your trek confidently and safely.",
    content: "Full blog content here...",
    tags: ["SnowTrekkingIndia", "HimalayanSummit", "HighAltitudeIndia", "MountaineeringIndia", "FitnessForTrekking", "PangarchullaBaseCamp"]
  },
  {
    id: 7,
    date: "2024-12-21",
    author: "Himalayan Explorer",
    image: "https://i.ytimg.com/vi/ReJM3C2j-ZU/sddefault.jpg",
    title: "How Hard Is Roopkund Base Camp Trek in Winter",
    excerpt: "Attempting the Roopkund Base Camp Trek in winter is a serious adventure that pushes your endurance and willpower to the limit. With freezing temperatures, snow-covered trails, and limited accessibility, this trek becomes significantly harder than in other seasons. This blog covers what makes the winter version of Roopkund a challenging but unforgettable Himalayan journey.",
    content: "Full blog content here...",
    tags: ["RoopkundTrek", "TrekDifficultyLevel", "UttarakhandTreks", "SkeletonLake", "HighAltitudeTrek", "ExtremeTrekking", "WinterAdventure", "ChamoliTrek", "FrozenTrails"]
  },
  {
    id: 8,
    date: "2025-06-22",
    author: "Budget Trek Team",
    image: "https://i.pinimg.com/736x/f3/82/ba/f382ba69441d225f1bc6fa2cdffb91a1.jpg",
    title: "How to Budget for Shrikhand Mahadev Kailash Trek: A Realistic Cost Breakdown",
    excerpt: "The Shrikhand Mahadev Kailash Trek is a sacred high-altitude pilgrimage in Himachal Pradesh that reaches nearly 5,227 meters (17,150 ft). It’s one of India’s most physically demanding spiritual treks — and while the trail tests your endurance, it also demands a practical understanding of budgeting.",
    content: "Full blog content here...",
    tags: ["ShrikhandMahadev", "PilgrimageTrek", "HighAltitudeTrek", "TrekkingExpenses", "AdventureOnBudget", "SpiritualTrekIndia", "JaonVillage", "BudgetTravelIndia"]
  },
  {
    id: 9,
    date: "2025-06-16",
    author: "Aman Yadav",
    image: "https://www.trekupindia.com/wp-content/uploads/2025/03/Kugti_Pass_Trek.jpg",
    title: "How to Prepare for the Kugti Pass Base Camp Trek: Your Ultimate Guide",
    excerpt: "Nestled in Himachal Pradesh’s remote and rugged Pir Panjal range, the Kugti Pass Base Camp Trek is a hidden gem for adventure seekers. Known for its stunning alpine meadows, ancient temples, and panoramic views of snow-clad peaks, this moderate-to-challenging trek demands proper preparation. From what to pack, ideal fitness levels, permits, and the best time to go — this ultimate guide covers everything you need to make your Kugti Pass journey safe and unforgettable.",
    content: "Full blog content here...",
    tags: ["KugtiPass", "HimachalTrekking", "AdventureHiking", "BaseCampTrek", "TrekPreparation"]
  },
  {
    id: 10,
    date: "2025-08-12",
    author: "Kailash Fitness Team",
    image: "https://himachaltonite.com/wp-content/uploads/2023/07/best-views-of-kinner-kailash.jpg",
    title: "What Level of Fitness Is Needed for the Kinnaur Kailash Trek?",
    excerpt: "The Kinnaur Kailash Trek in Himachal Pradesh is considered moderately to highly difficult, depending on your route (via Tangling village or Charang–La circuit) and weather conditions. Reaching the sacred Shivling rock at 4,650 meters (15,256 ft) is no small feat — and requires a solid base level of physical and mental fitness.",
    content: "Full blog content here...",
    tags: ["KinnaurKailashTrek", "ShivlingRock", "MountainTraining", "TrekPreparation", "FitnessForTrekking", "CardioTraining", "KinnaurAdventure", "PilgrimageTrekIndia"]
  },
  {
    id: 11,
    date: "2025-06-07",
    author: "Frozen Trail Team",
    image: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvZCgeSzeQ_PgtanKuPQ6CL4ErLHSFJT0mnQ&usqp=CAU",
    title: "Chadar Trek Ladakh in Mid January",
    excerpt: "Walking over the frozen Zanskar River is an iconic winter experience. Discover why mid-January is considered the prime time for the Chadar Trek.",
    content: "Full blog content here...",
    tags: ["ChadarTrek", "FrozenRiver", "LadakhTreks", "WinterTrekking"]
  },
  {
    id: 12,
    date: "2025-06-26",
    author: "TrekVibe Team",
    image: "	https://i.ytimg.com/vi/8RN8B-He5LU/hqdefault.jpg",
    title: "Best Time for Harihar Fort Climbing",
    excerpt: "Discover the ideal season to conquer the steep stone steps of Harihar Fort in Maharashtra. This guide outlines when the trails are safest and the views are most stunning — ensuring your fort adventure is thrilling, not risky.",
    content: "Full blog content here...",
    tags: ["HariharFort", "SahyadriTrekking", "MonsoonTrek", "AdventureMaharashtra"]
  },
  {
    id: 13,
    date: "2025-06-25",
    author: "Western Ghats Explorers",
    image: "	https://i.ytimg.com/vi/bx-KO5fPnhM/maxresdefault.jpg",
    title: "Bhairavgarh Fort Climbing in Monsoon",
    excerpt: "Monsoon transforms Bhairavgarh Fort into a lush green fortress. This article explores the magic of trekking during the rains, safety precautions, and what makes the monsoon climb here so special.",
    content: "Full blog content here...",
    tags: ["Bhairavgarh", "FortTrek", "MonsoonAdventure", "WesternGhats"]
  },
  {
    id: 14,
    date: "2025-06-24",
    author: "Everest Base Experts",
    image: "https://images.pexels.com/photos/32693364/pexels-photo-32693364.jpeg",
    title: "Best Time for Everest Base Camp Climbing",
    excerpt: "Planning to scale the Everest Base Camp? Learn about the best weather windows, trail conditions, and cultural moments during peak seasons that make your journey safe, scenic, and soul-stirring.",
    content: "Full blog content here...",
    tags: ["EverestBaseCamp", "NepalTrekking", "HimalayanClimbs", "EBCTips"]
  },
  {
    id: 15,
    date: "2025-06-23",
    author: "Sar Pass Guides",
    image: "https://i.ytimg.com/vi/toEle-diEi0/maxresdefault.jpg",
    title: "Best Time to Visit Sar Pass Trek",
    excerpt: "From snow-covered trails in spring to lush meadows in early summer, this blog breaks down the best time to visit Sar Pass for every type of trekker — whether you're seeking solitude, challenge, or scenery.",
    content: "Full blog content here...",
    tags: ["SarPass", "TrekkingHimachal", "AdventureSeasons", "TrekPlanning"]
  },
  {
    id: 16,
    date: "2025-06-22",
    author: "Manimahesh Crew",
    image: "	https://www.hptourtravel.com/wp-content/uploads/2023/09/manimahesh_snowcovered_image.webp",
    title: "Manimahesh Kailash Peak Climbing in September",
    excerpt: "Unveil the spiritual and scenic marvels of Manimahesh Kailash peak during the September season. This guide reveals why post-monsoon is perfect — spiritually significant and visually stunning.",
    content: "Full blog content here...",
    tags: ["Manimahesh", "SpiritualClimb", "SeptemberTrek", "SacredPeaks"]
  },
  {
    id: 17,
    date: "2025-06-21",
    author: "Kashmir Trekkers",
    image: "	https://himalayanbird.com/wp-content/uploads/2022/02/Tarsar-Lake-768x512.jpg",
    title: "Best Time for Tarsar Masar Trek in Kashmir",
    excerpt: "Tarsar Masar, the twin alpine lakes trek, is best experienced during summer. This guide tells you the exact months to enjoy crystal-clear lakes, blooming meadows, and ideal weather conditions.",
    content: "Full blog content here...",
    tags: ["TarsarMasar", "KashmirTrekking", "AlpineLakes", "ScenicTrek"]
  },
  {
    id: 18,
    date: "2025-06-20",
    author: "Summit Seekers",
    image: "https://images.pexels.com/photos/1081111/pexels-photo-1081111.jpeg",
    title: "Auden's Col Trek in August",
    excerpt: "Auden's Col, a high-altitude crossover trek in Uttarakhand, is best done in August when the glaciers are relatively stable. This guide breaks down everything you need to know to plan your crossing.",
    content: "Full blog content here...",
    tags: ["AudensCol", "CrossoverTrek", "AugustTreks", "UttarakhandAdventure"]
  },
  {
    id: 19,
    date: "2025-06-19",
    author: "Elizabeth Olsen",
    image: "	https://storage.needpix.com/rsynced_images/winter-trekking.jpg",
    title: "Kalindi Khal Trek in Mid October",
    excerpt: "Kalindi Khal is one of the toughest and most remote treks in the Indian Himalayas. Find out why mid-October is the ideal time for this alpine challenge.",
    content: "Full blog content here...",
    tags: ["KalindiKhal", "HighPassTrek", "OctoberTrek", "ExtremeAdventure"]
  },
  {
    id: 20,
    date: "2025-06-18",
    author: "Sofia Vergara",
    image: "	https://i.ytimg.com/vi/BI7Diln579o/hq720.jpg?sqp=-…ADIQj0AgKJD&rs=AOn4CLBdhtVnKc-LVeYf-8sePjRCRE9jiA",
    title: "Best Time for Mount Blanc Trek in Switzerland-Italy-France",
    excerpt: "Tour du Mont Blanc takes you through three countries in the Alps. Learn about the perfect season to trek with good weather and jaw-dropping alpine views.",
    content: "Full blog content here...",
    tags: ["MontBlanc", "AlpineTreks", "EuropeHiking", "ScenicRoutes"]
  }
];

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const navigate = useNavigate();

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogData.length / blogsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      const isDark = root.classList.contains("dark");
      document.body.classList.toggle("dark", isDark);
    });
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full dark:bg-gray-900 dark:text-white">
      {/* Hero Section */}
    <div className="w-full h-[60vh] relative flex items-center justify-center overflow-hidden">
  {/* Background Video */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src={mountainBg} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Overlay Text */}
  <h1 data-aos="fade-down" className="text-white text-5xl font-bold drop-shadow-lg z-10">
    Blogs
  </h1>
</div>


      {/* Blog Cards */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {currentBlogs.map((blog) => (
          <div
            key={blog.id}
            data-aos="fade-up"
            className="bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 relative"
          >
            <div data-aos="zoom-in" className="absolute bg-blue-900 text-white px-3 py-1 text-xs font-semibold rounded-tr-md">
              {new Date(blog.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric"
              })}
            </div>

            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />

            <div data-aos="fade-up" className="p-5">
              <h3 data-aos="zoom-in" className="text-lg font-bold mb-1 text-gray-900 dark:text-white">{blog.title}</h3>
              <p data-aos="zoom-in" className="text-xs text-gray-500 dark:text-gray-300 mb-1">By {blog.author}</p>
              <p data-aos="zoom-in" className="text-sm text-gray-600 dark:text-gray-200 mb-3 line-clamp-3">{blog.excerpt}</p>

              <div data-aos="zoom-in" className="flex flex-wrap gap-2 text-xs text-blue-900 dark:text-blue-400 mb-4">
                {blog.tags.map((tag, i) => (
                  <span key={i}>#{tag}</span>
                ))}
              </div>

              <div data-aos="zoom-in" className="flex justify-between items-center">
                <button
                  onClick={() => navigate(`/blog/${blog.id}`)}
                  data-aos="zoom-in"
                  className="text-sm font-medium text-blue-900 dark:text-blue-400 border border-blue-900 dark:border-blue-400 px-4 py-2 rounded-full hover:bg-blue-900 hover:text-white dark:hover:bg-blue-400 dark:hover:text-black transition"
                >
                  Read Full Blog
                </button>

                <div data-aos="zoom-in" className="flex gap-3 text-blue-900 dark:text-blue-400">
                  <FaHeart className="hover:text-red-500 cursor-pointer" />
                  <FaShareAlt className="hover:text-blue-500 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 pb-12">
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => handlePageChange(idx + 1)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
              currentPage === idx + 1
                ? "bg-blue-900 text-white border-blue-900"
                : "text-blue-900 border-blue-900 hover:bg-blue-900 hover:text-white dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-400 dark:hover:text-black"
            }`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

