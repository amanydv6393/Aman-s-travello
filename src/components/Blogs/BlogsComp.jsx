import React from "react";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

// Sample blog data
const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top Places to Visit in India",
    description:
      "Explore India's incredible diversity — from the Taj Mahal to Kerala's backwaters and the mountains of Himachal. Discover the culture, colors, and cuisine that make India a top travel destination.",
    author: "Aman Yadav",
    date: "June 20, 2025",
  },
  {
    id: 2,
    image: Img2,
    title: "Hidden Natural Wonders in the US",
    description:
      "Uncover breathtaking natural spots across the US — from crystal-clear springs to remote national parks and scenic drives you never knew existed.",
    author: "Aman Yadav",
    date: "June 14, 2025",
  },
  {
    id: 3,
    image: Img3,
    title: "Why Japan Should Be On Your Bucket List",
    description:
      "Experience Japan’s balance of tradition and technology — cherry blossoms, ancient temples, sushi trails, and efficient bullet trains await.",
    author: "Aman Yadav",
    date: "June 10, 2025",
  },
];

const BlogsComp = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white py-16 transition-colors duration-500">
      <section data-aos="fade-up" className="container mx-auto px-4">
        <h1 className="mb-10 border-l-8 border-primary/50 dark:border-white/40 py-2 pl-4 text-3xl font-bold">
          Our Latest Blogs
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BlogsData.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {item.description}
                </p>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  By <span className="font-medium">{item.author}</span> •{" "}
                  {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogsComp;
