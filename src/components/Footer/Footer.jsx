// Footer.js (Final - Updated)
import React, { useEffect, useState } from "react";
import FooterLogo from "../../assets/logo.png";
import NatureVid from "../../assets/video/fotervideo.mp4";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaLocationArrow,
  FaMobileAlt,
  FaHome,
  FaInfoCircle,
  FaMapMarkedAlt,
  FaPenNib,
  FaGlobeAsia,
  FaImages,
  FaUserCheck,
  FaPhone,
  FaQuestionCircle,
  FaFileAlt,
  FaArrowUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterLinks = [
  { title: "Home", link: "/", icon: <FaHome /> },
  { title: "About", link: "/about", icon: <FaInfoCircle /> },
  { title: "Best Places", link: "/best-places", icon: <FaMapMarkedAlt /> },
  { title: "Blogs", link: "/blogs", icon: <FaPenNib /> },
];

const ExploreLinks = [
  { title: "Destinations", link: "/destinations", icon: <FaGlobeAsia /> },
  { title: "Gallery", link: "/gallery", icon: <FaImages /> },
  { title: "Testimonials", link: "/testimonials", icon: <FaUserCheck /> },
];

const SupportLinks = [
  { title: "Contact Us", link: "/contact", icon: <FaPhone /> },
  { title: "FAQ", link: "/faq", icon: <FaQuestionCircle /> },
  { title: "Terms & Conditions", link: "/terms", icon: <FaFileAlt /> },
];

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setError("Email cannot be empty.");
      setSubscribed(false);
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setSubscribed(false);
    } else {
      setSubscribed(true);
      setError("");
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-[-2]"
      >
        <source src={NatureVid} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60 z-[-1]" />

      <div className="dark:bg-transparent py-10 text-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 bg-white/10 dark:bg-gray-900/80 backdrop-blur-md rounded-t-xl p-6">
            {/* Left Section */}
            <div className="space-y-4">
              <img src={FooterLogo} alt="Logo" className="max-h-[60px]" />
              <p className="text-sm text-gray-200">
                Discover breathtaking destinations, plan your perfect getaway,
                and explore the world with us. From hidden gems to iconic
                landmarks — your journey begins here.
              </p>
              <div className="flex items-center gap-3 text-sm">
                <FaLocationArrow />
                <p>Greater Noida, Uttar Pradesh, India</p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <FaMobileAlt />
                <p>+91 6393282350</p>
              </div>
              <div className="flex items-center gap-4 mt-4 text-xl">
                <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
                <a href="#" className="hover:text-blue-500"><FaFacebook /></a>
                <a href="#" className="hover:text-sky-600"><FaLinkedin /></a>
                <a href="#" className="hover:text-cyan-400"><FaTwitter /></a>
              </div>
            </div>

            {/* Center Links */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-bold mb-3">Important</h2>
                <ul className="space-y-3 text-sm">
                  {FooterLinks.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 hover:text-primary transition-all">
                      {item.icon}
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-bold mb-3">Explore</h2>
                <ul className="space-y-3 text-sm">
                  {ExploreLinks.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 hover:text-primary transition-all">
                      {item.icon}
                      <Link to={item.link}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Support Links + Newsletter */}
            <div>
              <h2 className="text-lg font-bold mb-3">Help & Support</h2>
              <ul className="space-y-3 text-sm">
                {SupportLinks.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 hover:text-primary transition-all">
                    {item.icon}
                    <Link to={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <h3 className="text-sm font-semibold mb-2">Subscribe to Newsletter</h3>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md px-3 py-1 text-black"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="bg-primary px-4 py-1 rounded-md font-medium hover:bg-white hover:text-primary transition"
                  >
                    Subscribe
                  </button>
                </div>
                {subscribed && (
                  <p className="text-green-400 text-sm mt-2">Thanks for subscribing!</p>
                )}
                {error && (
                  <p className="text-red-400 text-sm mt-2">{error}</p>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="bg-primary text-white text-center py-4 text-sm">
            © 2025 All rights reserved || Made with ❤️ by Aman Yadav
          </div>



          {/* Scroll to Top Button (shifted up slightly) */}
{/* {showTopBtn && (
  <button
    onClick={scrollToTop}
    className="fixed bottom-28 right-6 z-50 bg-primary text-white px-4 py-2 rounded-full shadow-md hover:bg-white hover:text-primary transition"
  >
    <FaArrowUp />
  </button>
)} */}





        </div>
      </div>
    </div>
  );
};

export default Footer;
