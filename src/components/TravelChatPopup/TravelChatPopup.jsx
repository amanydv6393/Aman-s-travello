import React, { useState } from "react";
import { FaTimes, FaChevronRight, FaComments } from "react-icons/fa";
import { BiSolidSend } from "react-icons/bi";

const categoryQuestions = {
  All: [
    "Can I customize my itinerary?",
    "What is the refund policy?",
    "Do you offer group discounts?",
    "Are meals included in the packages?",
    "What type of hotels do you provide?",
    "Is airport transport available?",
    "What are the best places to visit this season?",
    "How is accommodation handled?"
  ],
  Itinerary: [
    "Can I customize my itinerary?",
    "How flexible is the travel plan?",
    "Can I choose my sightseeing locations?",
    "Are rest days included in the itinerary?"
  ],
  Hotels: [
    "What type of hotels do you provide?",
    "Can I choose my hotel category?",
    "Are hotels near city center or tourist attractions?",
    "Is breakfast included in the hotel stay?"
  ],
  Discounts: [
    "Do you offer group discounts?",
    "Are there early bird offers?",
    "Any student discounts available?",
    "Do you offer seasonal promotions?"
  ],
  Transport: [
    "Is airport transport available?",
    "What transport options are used?",
    "Is local travel included?",
    "Can I book private transport?"
  ],
  "Best Places": [
    "What are the best places to visit this season?",
    "Any offbeat destinations you recommend?",
    "Which places are family-friendly?",
    "Which destinations have adventure options?"
  ],
  Accumulation: [
    "How is accommodation handled?",
    "Do you offer shared or private rooms?",
    "Are stays in guesthouses or hotels?",
    "Is early check-in possible?"
  ]
};

const TravelChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
const [adviceOpen, setAdviceOpen] = useState(false);
const [userName, setUserName] = useState("");
const [nameSubmitted, setNameSubmitted] = useState(false);


  const handleSend = (msg) => {
    if (!msg.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text: msg }]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Thanks for your query! Our team will respond shortly."
        }
      ]);
    }, 600);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-cyan-500 via-sky-500 to-emerald-500 p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse"
          title="Chat with us"
        >
          <FaComments className="text-2xl text-white animate-bounce" />
        </button>
      )}

      {/* Popup Chat Window */}
      {isOpen && (
        <div  className="fixed bottom-6 right-6 w-[350px] max-w-[90vw] bg-white dark:bg-gray-900 rounded-xl shadow-xl z-50 overflow-hidden border border-gray-300 dark:border-gray-700">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600">
            <div data-aos="zoom-in" className="flex items-center gap-2 font-bold text-lg text-gray-800 dark:text-white">
              🧭 Travello Chat
            </div>
            <FaTimes
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-red-500"
            />
          </div>

          {/* Tabs */}
          <div  className="p-4 text-sm">
            <p data-aos="zoom-in" className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Ask your query related to travel packages, stays, safety etc.
            </p>
            <div  className="flex gap-2 text-xs mb-4 overflow-x-auto scrollbar-hide">
              {Object.keys(categoryQuestions).map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCategory(tab)}
                //   data-aos="zoom-in"
                  className={`px-3 py-1 rounded-full whitespace-nowrap ${
                    activeCategory === tab
                      ? "bg-primary text-white"
                      : "bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Suggestions */}
            <div  data-aos="fade-up" className="space-y-2 max-h-[140px] overflow-y-auto pr-1 scrollbar-hide">
              {categoryQuestions[activeCategory].map((s, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(s)}
                  data-aos="fade-up"
                  className="flex justify-between items-center w-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 px-4 py-2 rounded-md"
                >
                  <span  className="text-left text-sm text-gray-800 dark:text-white">
                    {s}
                  </span>
                  <FaChevronRight className="text-gray-400" />
                </button>
              ))}
            </div>

            {/* CTA */}
           {/* CTA with Expandable Advice Section */}
<div data-aos="fade-up"className="mt-4">
  <button
    data-aos="fade-up"className="w-full py-2 rounded-full border border-green-500 text-green-600 hover:bg-green-100 dark:hover:bg-green-800"
    onClick={() => setAdviceOpen(!adviceOpen)}
  >
    ✅ Get Free Travel Advice
  </button>

  {adviceOpen && (
    <div data-aos="fade-up" className="mt-3 bg-green-50 dark:bg-green-900 text-sm text-gray-800 dark:text-white rounded-md p-3 space-y-3 animate-fade-in-down">
      <p data-aos="fade-up">
        Planning the perfect trip starts with understanding your interests. Whether you're an adventure seeker, a cultural explorer, or simply looking to relax — we've got you covered!
      </p>
      <p data-aos="fade-up">
        Let us guide you through ideal destinations, budget tips, and travel safety. Just tell us your name and we’ll tailor advice just for you.
      </p>

      <div data-aos="fade-up" className="flex gap-2 items-center">
        <input
          type="text"
          data-aos="fade-up"
          className="flex-1 px-3 py-1 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white"
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
        data-aos="fade-up"
          className="px-4 py-1 rounded-md bg-green-600 text-white hover:bg-green-700"
          onClick={() => {
            if (userName.trim()) setNameSubmitted(true);
          }}
        >
          Send
        </button>
      </div>

      {nameSubmitted && (
        <p  data-aos="fade-up"className="text-green-600 dark:text-green-400 font-medium">
          Thank you, {userName}! Our travel assistant will tailor suggestions for you soon.
        </p>
      )}
    </div>
  )}
</div>

          </div>

          {/* Chat Area */}
          <div className="max-h-[180px] overflow-y-auto px-4 space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`px-3 py-2 rounded-md max-w-[85%] text-sm ${
                  msg.sender === "user"
                    ? "bg-primary text-white ml-auto"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center border-t border-gray-300 dark:border-gray-600 p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
              placeholder="Ask your query here..."
              className="flex-1 text-sm bg-white dark:bg-gray-900 text-black dark:text-white outline-none px-2"
            />
            <button
              onClick={() => handleSend(input)}
              data-aos="fade-up"
              className="text-primary hover:scale-110 transition"
            >
              <BiSolidSend size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TravelChatPopup;
