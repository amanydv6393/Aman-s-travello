import React, { useState, useEffect } from "react";
import faqq from "../../assets/places/FAQIMG.png";
import "aos/dist/aos.css";
import AOS from "aos";

const allFaqs = [
  {
    question: "Is Aman's Travello safe for solo travelers?",
    answer:
      "Absolutely! Our small group sizes, trusted local guides, and pre-planned itineraries make it super safe and easy for solo travelers.",
  },
  {
    question: "Can I customize my travel plan?",
    answer:
      "Yes! You can add optional activities, extra stays, or even local tours to personalize your trip to your liking.",
  },
  {
    question: "Are there vegetarian/vegan options available?",
    answer:
      "Yes, many of our trips offer vegetarian and vegan-friendly meal options. Just let us know in advance.",
  },
  {
    question: "Do you offer travel insurance?",
    answer:
      "We provide optional travel insurance add-ons that cover health, cancellations, and emergencies.",
  },
  {
    question: "What if I need to cancel my trip?",
    answer:
      "Most of our trips come with flexible cancellation and rebooking policies with minimal fees.",
  },
  {
    question: "Are your guides experienced?",
    answer:
      "All our trips are led by locally based Chief Experience Officers with years of guiding expertise.",
  },
  {
    question: "Do I need a visa for the trip?",
    answer:
      "Visa requirements depend on your destination. We provide visa support if needed.",
  },
  {
    question: "Can I join the trip mid-way?",
    answer:
      "Joining mid-way is allowed on select itineraries. Contact our team to know more.",
  },
  {
    question: "How do I make payments?",
    answer:
      "We accept secure online payments via credit card, UPI, net banking, and PayPal.",
  },
  {
    question: "Do trips include meals?",
    answer:
      "Some meals are included — it varies per trip. Check individual itineraries for details.",
  },
  {
    question: "What kind of accommodations are provided?",
    answer:
      "We offer comfortable boutique hotels, eco-lodges, and homestays, depending on the trip type.",
  },
  {
    question: "Can I get a refund if I cancel early?",
    answer:
      "Yes, early cancellations are eligible for partial or full refunds depending on notice time.",
  },
];

const highlightText = (text, keyword) => {
  if (!keyword) return text;
  const regex = new RegExp(`(${keyword})`, "gi");
  return text.split(regex).map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-yellow-200 dark:bg-yellow-600">{part}</mark>
    ) : (
      part
    )
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const filteredFaqs = searchTerm
    ? allFaqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allFaqs.slice(0, 6);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 sm:px-12 lg:px-32 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: FAQ Content */}
        <div>
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6"
            data-aos="fade-up"
          >
            Frequently Asked Questions
          </h2>

          <input
            type="text"
            placeholder="Search question here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white rounded-md px-4 py-2 mb-6 outline-none focus:ring-2 focus:ring-purple-400"
            data-aos="fade-up"
            data-aos-delay="100"
          />

          <div className="space-y-4">
            {filteredFaqs.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400">No results found.</p>
            ) : (
              filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-300 dark:border-gray-700 pb-3 cursor-pointer transition-all duration-300"
                  onClick={() => toggle(index)}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      {highlightText(faq.question, searchTerm)}
                    </h4>
                    <span className="text-xl text-gray-500 dark:text-gray-400">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-96 mt-2" : "max-h-0"
                    }`}
                  >
                    {openIndex === index && (
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {highlightText(faq.answer, searchTerm)}
                      </p>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Right: Illustration */}
  {/* Right: Illustration */}
<div className="flex justify-center" data-aos="zoom-in">
  <img
    src={faqq}
    alt="FAQ Illustration"
    className="w-full max-w-[360px] sm:max-w-[400px] md:max-w-[450px] object-contain ]"
  />
</div>

      </div>
    </section>
  );
};

export default FAQSection;
