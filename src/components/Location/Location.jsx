import React from "react";

const Location = () => {
  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up" className="bg-white dark:bg-black transition-colors duration-500">
        <div className="container my-6 text-gray-800 dark:text-gray-200">
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
    </>
  );
};

export default Location;
