import React from "react";
import FooterLogo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaTwitter,
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
} from "react-icons/fa";
import NatureVid from "../../assets/video/footer.mp4";
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
  return (
    <>
      <div className="dark:bg-gray-950 py-10 relative overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
        >
          <source src={NatureVid} type="video/mp4" />
        </video>
        <div className="container">
          <div className="grid md:grid-cols-3 py-5 bg-white/80 backdrop-blur-sm rounded-t-xl">
            {/* Left Side */}
            <div className="py-8 px-4">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                <img src={FooterLogo} alt="" className="max-h-[60px]" />
              </h1>
              <p data-aos="zoom-in"className="text-sm">
                Discover breathtaking destinations, plan your perfect getaway,
                and explore the world with us. From hidden gems to iconic
                landmarks — your journey begins here.
              </p>
              <br />
              <div data-aos="zoom-in"className="flex items-center gap-3">
                <FaLocationArrow />
                <p data-aos="zoom-in">Greater Noida, Uttar Pradesh, India</p>
              </div>
              <div data-aos="zoom-in"className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p data-aos="zoom-in">+91 6393282350</p>
              </div>
              <div data-aos="zoom-in" className="flex items-center gap-3 mt-6">
                <a href="#"><FaInstagram className="text-3xl" /></a>
                <a href="#"><FaFacebook className="text-3xl" /></a>
                <a href="#"><FaLinkedin className="text-3xl" /></a>
                <a href="#"><FaTwitter className="text-3xl" /></a>
              </div>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              {/* Important Links */}
              <div className="py-8 px-4">
                <h1 data-aos="fade-up"className="text-xl font-bold text-justify sm:text-left mb-3">Important Links</h1>
                <ul data-aos="fade-up"className="flex flex-col gap-3">
                  {FooterLinks.map((item, index) => (
                    <li data-aos="fade-up"
                      key={`important-${index}`}
                      className="cursor-pointer flex items-center gap-2 hover:translate-x-1 duration-300 hover:!text-primary text-gray-700 dark:text-gray-200"
                    >
                      {item.icon}
                      <Link to={item.link} onClick={() => window.scrollTo(0, 0)}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Explore */}
              <div className="py-8 px-4">
                <h1 data-aos="fade-up" className="text-xl font-bold text-justify sm:text-left mb-3">Explore</h1>
                <ul data-aos="fade-up" className="flex flex-col gap-3 text-gray-700 dark:text-gray-200">
                  {ExploreLinks.map((item, index) => (
                    <li data-aos="fade-up"
                      key={`explore-${index}`}
                      className="cursor-pointer flex items-center gap-2 hover:translate-x-1 duration-300 hover:!text-primary"
                    >
                      {item.icon}
                      <Link to={item.link} onClick={() => window.scrollTo(0, 0)}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Help & Support */}
              <div className="py-8 px-4">
                <h1  data-aos="fade-up"className="text-xl font-bold text-justify sm:text-left mb-3">Help & Support</h1>
                <ul data-aos="fade-up"className="flex flex-col gap-3 text-gray-700 dark:text-gray-200">
                  {SupportLinks.map((item, index) => (
                    <li data-aos="fade-up"
                      key={`support-${index}`}
                      className="cursor-pointer flex items-center gap-2 hover:translate-x-1 duration-300 hover:!text-primary"
                    >
                      {item.icon}
                      <Link to={item.link} onClick={() => window.scrollTo(0, 0)}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div>
            <div  className="text-center py-5 border-t-2 border-gray-300/50 bg-primary text-white">
             <p data-aos="zoom-in"> © 2025 All rights reserved || Made with ❤️ by Aman yadav</p> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
