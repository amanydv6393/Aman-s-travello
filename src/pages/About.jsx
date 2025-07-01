import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";

const About = () => {
  return (
    <>
      {/* About Section */}
      <div className="bg-white dark:bg-black transition-colors duration-500">
        <div className="container pt-14 pb-0 text-gray-800 dark:text-gray-200">
          <div className="py-10">
            <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-4 text-3xl font-bold dark:border-white/40">
              About Us
            </h1>

            <p className="text-lg leading-relaxed">
              Welcome to our travel platform – where every journey begins with inspiration and ends with unforgettable memories. Our mission is to make travel easy, exciting, and accessible for everyone. Whether you're planning a weekend getaway, a cross-country adventure, or a once-in-a-lifetime overseas experience, we're here to guide you every step of the way.
            </p>

            <br />

            <p className="text-lg leading-relaxed">
              With a wide range of destinations, handpicked experiences, and seamless booking, we take the stress out of planning and bring joy back into travel. Our platform connects explorers with real-world adventures, locally-led tours, and curated packages designed to match your pace and passion. From hidden gems to world-famous hotspots, we help you explore the world – your way.
            </p>

            <br />

            <p className="text-lg leading-relaxed">
              We believe travel is not just about places; it's about people, culture, stories, and memories that last a lifetime. That's why we work with experienced guides, support sustainable tourism, and continuously improve to bring you the most trusted travel experience possible. So whether you're solo-traveling, adventuring with friends, or planning your dream honeymoon – your next journey starts here.
            </p>
          </div>
        </div>
      </div>

      {/* Seamless Divider to Avoid Gap */}
    

      {/* Location Section (Embedded) */}
      <span id="location"></span>
      <section
        data-aos="fade-up"
        className="bg-white dark:bg-black transition-colors duration-500"
      >
        <div className="container pt-0 mt-0 pb-10 text-gray-800 dark:text-gray-200">
          <h1 className="inline-block border-l-8 border-primary/50 dark:border-white/40 py-2 pl-3 mb-4 text-xl font-bold sm:text-3xl">
            Location to Visit
          </h1>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112127.6399332756!2d77.36916767577553!3d28.627573651661564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ced1b10f32cfd%3A0x6b9147d518c6f64f!2sCrossing%20Republic%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201016!5e0!3m2!1sen!2sin!4v1719403837722!5m2!1sen!2sin"
              width="100%"
              height="360"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[360px] rounded-2xl border-none"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <BlogsComp />
    </>
  );
};

export default About;
