import React from "react";

const makeLinks = (text) => {
  return text.split(", ").map((item, index) => (
    <a
      key={index}
      href="#"
      className="text-gray-800 dark:text-gray-200 no-underline hover:text-blue-600 dark:hover:text-blue-400 inline-block transition-colors duration-200"
    >
      {item.trim()}
      {index !== text.split(", ").length - 1 ? ", " : ""}
    </a>
  ));
};

const WhyMakeMyTrip = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-10 text-sm">
      {/* ====== Top Links Section ====== */}
      <div className="container mx-auto px-6 md:px-20 grid gap-8">
        <div>
          <h3 data-aos="fade-up" className="font-bold text-base mb-3">Top Flight Routes</h3>
          <p data-aos="fade-up">{makeLinks("Abu Dhabi to Kutaisi Flight, Aqaba to Abu Dhabi Flight, Al Ain to Peshawar Flight, Kutaisi to Abu Dhabi Flight, Dubai to Quetta Flight, Dammam to Dubai Flight, Dubai to Dammam Flight, Alexandria to Abu Dhabi Flight, Doha to Abu Dhabi Flight, Abu Dhabi to Lahore Flight, Abu Dhabi to Bangkok Flight, Abu Dhabi to Islamabad Flight, Abu Dhabi to Peshawar Flight, Manila to Abu Dhabi Flight, Islamabad to Sharjah Flight, Islamabad to Dubai Flight, Dubai to Bahrain Flight, Beirut to Dubai Flight, Dubai to Bangkok Flight, Abu Dhabi to Beirut Flight, Abu Dhabi to Manila Flight, Amman to Dubai Flight, Dubai to Alexandria Flight, Dubai to Amsterdam Flight, Dubai to Cairo Flight, Dubai to Hong Kong Flight, Dubai to Istanbul Flight, Dubai to Jakarta Flight, Dubai to London Flight, Dubai to Mauritius Flight, Dubai to New York Flight, Dubai to Paris Flight, Dubai to Riyadh Flight, Dubai to Rome Flight, Dubai to Toronto Flight, Dubai to Zurich Flight, Dubai to Faisalabad Flight, Dubai to Lagos Flight, Dubai to Los Angeles Flight, Dubai to Phuket Flight, Manila to Dubai Flight, Abu Dhabi to Cairo Flight, Dubai to Athens Flight, Dubai to Casablanca Flight, Casablanca to Dubai Flight, Dubai to Beirut Flight, Dubai to Lahore Flight, Dubai to Seychelles Flight, Dubai to Amman Flight, Dubai to Entebbe Flight, Dubai to Peshawar Flight, Dubai to Tunis Flight, Abu Dhabi to Casablanca Flight")}</p>
        </div>

        <div>
          <h3 data-aos="fade-up" className="font-bold text-base mb-3">International Flight Routes</h3>
          <p data-aos="fade-up">{makeLinks("Abu Dhabi To Amman Flight, Abu Dhabi To Dhaka Flight, Abu Dhabi To Doha Flight, Abu Dhabi To Kathmandu Flight, Cairo To Sharjah Flight, Dhaka To Sharjah Flight, Kathmandu To Abu Dhabi Flight, Kathmandu To Sharjah Flight, Sharjah To Dhaka Flight, Sharjah To Islamabad Flight, Sharjah To Beirut Flight, Sharjah To Dhaka Flight, Sharjah To Kathmandu Flight, Karachi To Sharjah Flight, Sharjah To Istanbul Flight, Sharjah To Doha Flight, Dubai to Manila Flight, Dubai to Kuwait Flight, Dubai to Islamabad Flight, Dubai to Karachi Flight, Dubai to Kathmandu Flight, Dubai to Delhi Flight, Dubai to Mumbai Flight, Dubai to Chennai Flight, Dubai to Hyderabad Flight, Dubai to Mangalore Flight, Dubai to Kochi Flight, Mumbai to Dubai Flight, Mumbai to Trivandrum Flight, Sharjah to Trivandrum Flight, Ahmedabad to Dubai Flight, Kochi to Dubai Flight, Dubai to Kozhikode Flight, Amritsar to Dubai Flight, Sharjah to Kochi Flight, Trivandrum to Dubai Flight, Calicut to Dubai Flight, Kochi to Sharjah Flight, Dubai to Thiruvananthapuram Flight, Thiruvananthapuram to Sharjah Flight, Dubai to Abu Dhabi Flight, Dubai to Sialkot Flight")}</p>
        </div>

        <div>
          <h3 data-aos="fade-up" className="font-bold text-base mb-3">International Hotels</h3>
          <p data-aos="fade-up">{makeLinks("Hotels In Dubai, Hotels In Abu Dhabi, Hotels In Sharjah, Hotels In Ras Al Khaimah, Hotels In Ajman, Hotels In Fujairah, Hotels In Al Ain, Hotels In Kalba, Hotels In Singapore, Hotels In Bangkok, Hotels In Pattaya, Hotels In London, Hotels In Phuket, Hotels In Bali, Hotels In Hong Kong, Hotels In Paris, Hotels In Koh Samui, Hotels In New York, Hotels In Las Vegas, Hotels In Colombo, Hotels In Macau, Hotels In Kuala Lumpur, Hotels In Sydney, Hotels In Kathmandu, Hotels In Maldives, Hotels In Langkawi, Hotels In Istanbul, Hotels In Rome, Hotels in Tbilisi, Hotels in Baku, Hotels in Cairo, Hotels in Islamabad, Hotels in Muscat, Hotels in Mykonos, Hotels in Santorini, Hotels in Mykonos, Hotels in Yerevan, Hotels in Zanzibar, Hotels in Moscow")}</p>
        </div>

        <div>
          <h3 data-aos="fade-up" className="font-bold text-base mb-3">Top Hotels</h3>
          <p data-aos="fade-up">{makeLinks("Paramount Hotel Dubai, Grand Hyatt Dubai, Jw Marriott Marquis Hotel Dubai, Gevora Hotel, Jumeirah Beach Hotel, Citymax Hotel Bur Dubai, Atana Hotel, Sheraton Grand Hotel Dubai, Millennium Airport Hotel Dubai, Media One Hotel, Grand Excelsior Hotel Bur Dubai, Ghaya Grand Hotel, Marco Polo Hotel, Copthorne Hotel Dubai, Kempinski Hotel Mall Of The Emirates, The Meydan Hotel, Park Regis Kris Kin Hotel, Armani Hotel Dubai, York International Hotel, Signature 1 Hotel Tecom")}</p>
        </div>

        <div>
          <h3 data-aos="fade-up" className="font-bold text-base mb-3">Airlines</h3>
          <p data-aos="fade-up">{makeLinks("Indigo, Emirates, Spicejet, Air India, Air India Express, Vistara, Biman Bangladesh, Gulf Air, Qatar Airways, Etihad Airways, Flydubai, Kuwait Airways, Oman Air, Thai Airways, Royal Nepal Airlines, Turkish Airlines, Srilankan Airlines, Air Arabia, Airblue")}</p>
        </div>

        <div>
          <h3 data-aos="fade-up" className="font-bold text-base mb-3">Product Offering</h3>
          <p data-aos="fade-up">{makeLinks("Book Flights From UAE, Book Hotels From UAE")}</p>

          <h3 data-aos="fade-up" className="font-bold text-base mt-6 mb-3">About the Site</h3>
          <p data-aos="fade-up">{makeLinks("Contact Us, Privacy Policy, Cookie Policy, User Agreement, Terms of Service")}</p>
        </div>
      </div>

      {/* ====== Bottom Two-Column Section ====== */}
      <div className="bg-gray-200 dark:bg-gray-800 mt-16">
        <div className="container mx-auto px-6 md:px-20 py-16 grid md:grid-cols-2 gap-12 text-sm">
          <div>
            <h2 data-aos="fade-up" className="text-lg font-bold mb-4">Why Aman’s Escapades?</h2>
            <p data-aos="fade-up" className="text-gray-800 dark:text-gray-200 leading-relaxed">
             Founded in 2024, Aman’s Escapades has swiftly emerged as a premier name in elite travel curation — offering distinguished journeys, exceptional airfare privileges, and handpicked hotel stays with unrivaled ease. Our platform is designed for discerning explorers seeking more than just a booking — it’s an invitation to seamless, indulgent escapes via desktop or mobile.From tailored instant deals and exclusive fare calendars to elite benefits like MyRewardsProgram and MyWallet, we continuously refine our offerings to align with the evolving aspirations of our sophisticated clientele. At Aman’s Escapades, every journey begins with effortless elegance and ends in unforgettable memories.
            </p>
          </div>
          <div>
            <h2 data-aos="fade-up" className="text-lg font-bold mb-4">Booking Flights with Aman’s Escapades</h2>
            <p data-aos="fade-up" className="text-gray-800 dark:text-gray-200 leading-relaxed">
              Booking flights with Aman’s Escapades is more than just reserving a seat — it’s about planning your journey with care, comfort, and class. Our platform is built to deliver unbeatable airfare deals and exclusive flight options tailored to your schedule and style. Whether you're jetting off for business or leisure, we make it effortless through our easy-to-use website and mobile app. Our personalized support is available 24/7 to assist you at every step — because your time, convenience, and experience matter. With thousands of satisfied travelers choosing Aman’s Escapades, we take pride in turning simple trips into smooth, memorable escapes. Discover the best fares today and fly with confidence, comfort, and a touch of luxury.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyMakeMyTrip;
