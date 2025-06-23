import React from "react";

const LearnPage = () => {
  return (
    <div className="bg-[#f5f5fa] text-gray-800">
      {/* Top Section */}
      <section className="px-6 py-12 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Why travel with G Adventures?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          We didn’t become pioneers in small group adventures by chance — we got here by putting travellers first. You asked for freedom, flexibility, connection, and trust. We listened. What’s next for travel? It starts right here.
        </p>
        <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition mb-10">
          View all trips
        </button>

        {/* Scroll Nav */}
        <div className="flex flex-wrap justify-center gap-3">
          {scrollLinks.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-purple-100"
            >
              {item.label}
            </a>
          ))}
        </div>
      </section>
<section id="small-groups" className="bg-white py-20 px-4 sm:px-6">
  <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start gap-10">
    {/* Left Column: Icon + Heading */}
    <div className="flex-shrink-0 flex items-start gap-2 w-full md:w-1/3">
      <div className="text-[#0287a8] text-4xl mt-1">🌍</div>
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight">
        Dream big. <br /> Travel small.
      </h2>
    </div>

    {/* Right Column: Vertical Line + Paragraph */}
    <div className="flex items-start gap-3 w-full md:w-2/3">
      <div className="w-[6px] min-h-[70px] bg-[#0287a8] mt-0 rounded mr-4" />
      <p className="text-gray-700 text-base">
        The trip of your dreams doesn’t need a Hollywood-sized budget or years of planning.
        Simply join a small group of like-minded travellers that, like you, are eager to experience all the things that make our world worth exploring.
      </p>
    </div>
  </div>

  {/* 👇 Image + Text Boxes Below */}
  <div className="mt-14 max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
    <div>
      <img src="https://picsum.photos/id/1011/400/300" alt="travel 1" className="rounded-lg object-cover w-full h-56 shadow-md" />
      <h4 className="text-lg font-semibold mt-4">Join 10–to–12–ish fellow adventurers</h4>
      <p className="text-sm text-gray-600 mt-2">
        We keep our groups small to create a sense of camaraderie and allow for closer connections to the places and people you visit.
        Most of our land tours have no more than 16 travellers and usually average 10–12 people.
      </p>
    </div>
    <div>
      <img src="https://picsum.photos/id/1015/400/300" alt="travel 2" className="rounded-lg object-cover w-full h-56 shadow-md" />
      <h4 className="text-lg font-semibold mt-4">Solo travellers, step right up</h4>
      <p className="text-sm text-gray-600 mt-2">
        All our trips are solo-traveller-friendly, so you can enjoy the safety, support, and camaraderie we’re known for, even if you’re travelling alone.
        To keep costs fair, we’ll pair you with a same-sex roommate, or you can upgrade to My Own Room.
        Want trips exclusively for solo travellers?
        <span className="text-[#0287a8] font-medium"> Check out our Solo-ish Adventures</span>, designed for connection and packed with extra solo perks.
      </p>
    </div>
    <div>
      <img src="https://picsum.photos/id/1016/400/300" alt="travel 3" className="rounded-lg object-cover w-full h-56 shadow-md" />
      <h4 className="text-lg font-semibold mt-4">You’re going to need a smaller boat</h4>
      <p className="text-sm text-gray-600 mt-2">
        If you’re more the sea-faring type, we’d love to welcome you aboard any of the intimate vessels in our fleet.
        Whether you’re venturing to the Antarctic on the Expedition or sailing on a private skippered yacht,
        our ships carry a smaller number of passengers to enjoy your journey with plenty of room while still making new connections.
      </p>
    </div>
  </div>
</section>




    



     
 <section id="locally-based-guides" className="bg-[#f0f2f5] px-4 sm:px-6 py-20">
  <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12">
    {/* LEFT TEXT CONTENT */}
    <div className="lg:w-[50%] px-2">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-4xl">👨‍💼</div>
        <h2 className="text-3xl font-bold text-gray-900">Our guides are all CEOs.</h2>
      </div>
      <p className="text-gray-700 mb-6">
        At G Adventures, we don’t have tour guides — we have Chief Experience Officers.
        Our founder, Bruce Poon Tip, gave up his title as CEO because he felt they needed a proper title to reflect how integral they are to giving you an exceptional travel experience.
        (But don’t worry, they won’t be using any office attire or business jargon.)
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-1">Locally based = local experts.</h4>
      <p className="text-gray-700 mb-4">
        Our CEOs are locally based, meaning they know the area you’re exploring like the back of their well-travelled hand.
        They plan visits around the best times to visit (or avoid) the most popular spots, can help you choose local restaurants, and generally give you great tips on the best things to experience.
        And since they usually speak the local language, they are your go-to resource for anything that comes up.
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-1">Local support. All. The. Time.</h4>
      <p className="text-gray-700 mb-4">
        All CEOs are supported by our local operations teams 24/7.
        If something comes up that your CEO can’t help you with (however unlikely that is), the team nearby is there to support them in keeping you safe and happy.
      </p>

      <h4 className="text-lg font-semibold text-gray-900 mb-1">Your experience is their focus.</h4>
      <p className="text-gray-700">
        We want you to have the time of your life — that’s why we hire the smartest, friendliest, bestest CEOs around.
        It’s their mission to make sure you return home feeling like your life has truly been changed.
      </p>
    </div>

    {/* RIGHT IMAGE LAYOUT (full stretch) */}
    <div className="flex-1 flex flex-col gap-4 pr-2">
      {/* Top wide image */}
      <img
        src="https://picsum.photos/id/1025/800/300"
        alt="Guide Main"
        className="rounded-lg w-full h-64 object-cover shadow-md"
      />

      {/* Bottom two side-by-side */}
      <div className="grid grid-cols-2 gap-4">
        <img
          src="https://picsum.photos/id/1035/400/300"
          alt="Guide 2"
          className="rounded-lg w-full h-48 object-cover shadow-md"
        />
        <img
          src="https://picsum.photos/id/1036/400/300"
          alt="Guide 3"
          className="rounded-lg w-full h-48 object-cover shadow-md"
        />
      </div>
    </div>
  </div>
</section>


<section id="support-local" className="bg-[#f7f9fb] px-6 sm:px-10 lg:px-20 py-20">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
    {/* Left Column: Icon + Heading + Main Paragraph */}
    <div className="flex-shrink-0 flex items-start gap-2 w-full md:w-1/3">
      <div className="text-[#0287a8] text-4xl mt-1">🏘️</div>
      <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight">
        Travel like you live there.
      </h2>
    </div>

    {/* Right Column: Vertical Line + Paragraph */}
    <div className="flex items-start gap-3 w-full md:w-2/3">
      <div className="w-[6px] min-h-[70px] bg-[#0287a8] rounded mr-4" />
      <p className="text-gray-700 text-base">
        Since our very first tour, our goal has been to connect travellers with local communities on a deeper level.
        These connections go beyond personal ones to help give back to the wider community of your destination and ensure
        the people who live there get as much as they give. Changing the world is easy — all you have to do is have the time of your life.
      </p>
    </div>
  </div>

  {/* 👇 Image + Text Boxes Below */}
  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
    <div>
      <img
        src="https://picsum.photos/id/1050/600/400"
        alt="Stay Local"
        className="rounded-lg object-cover w-full h-56 shadow-md"
      />
      <h4 className="text-lg font-semibold mt-4">You stay local. So does your money.</h4>
      <p className="text-sm text-gray-600 mt-2">
        Multi-floor, thousand-room hotel behemoths? Not on our tours. We go for the connections, charm, and authenticity
        that can only be found in local accommodations, transport, and restaurants. This also allows us to stay at smaller
        hotels and eat at restaurants with fewer people. Plus, using local service providers helps support the local economy
        and the people that make the places we travel so special.
      </p>
    </div>
    <div>
      <img
        src="https://picsum.photos/id/1051/600/400"
        alt="Community Tourism"
        className="rounded-lg object-cover w-full h-56 shadow-md"
      />
      <h4 className="text-lg font-semibold mt-4">Giving back through community tourism.</h4>
      <p className="text-sm text-gray-600 mt-2">
        We’ve been pioneers of community tourism since the day we started. But what is that? It means we have always
        created our tours by building meaningful relationships with local communities, directly benefiting the people
        and places we visit, including Indigenous peoples, women, youth — anyone who has traditionally been marginalized
        or undervalued. Today, our definition has grown: the communities we impact ripples far beyond our destinations.
        To us, it includes our employees, supplier and agent partners, small business owners, customers, social followers,
        and travellers just like you. There's incredible power in being part of something bigger than yourself. Want in?
      </p>
    </div>
  </div>
</section>

<section id="flexibility" className="bg-[#eef2f6] px-6 py-16 lg:px-20">
  <div className="max-w-7xl mx-auto flex flex-col gap-16">

    {/* Top Section: Icon + Heading + Paragraph with Vertical Line */}
    <div className="flex flex-col lg:flex-row items-start gap-8">
      {/* Left: Icon + Heading */}
      <div className="flex items-start gap-4 lg:w-1/2">
        <div className="text-5xl mt-1">📍</div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] leading-tight">
          Enjoy more flexibility<br />than a yoga class
        </h2>
      </div>

      {/* Right: Vertical Line + Paragraph */}
      <div className="flex gap-4 lg:w-1/2">
        <div className="w-[2px] bg-purple-700 rounded" />
        <p className="text-gray-700 text-sm leading-relaxed">
          Adventure is all about having the freedom to follow your curiosity and discovering the unknown.
          No matter the Travel Style, our tours balance well-planned itineraries with the flexibility to do your own thing and explore a bit on your own.
          From optional activities to free time, you can choose an adventure that will feel truly like your own.
        </p>
      </div>
    </div>

    {/* Bottom Section: Text on Left + Image on Right */}
    <div className="flex flex-col lg:flex-row gap-12">
      {/* Left Text */}
      <div className="lg:w-1/2 space-y-8 text-sm text-gray-800">
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Whoa, that’s a lot of tours.</h4>
          <p>
            We have tons of tours. No, really. Tours for you, your family, your friends, your buddy from work who really likes nature documentaries.
            First trip ever and want to see all the highlights? Got that. Heading to your seventh continent and want to be treated like the experienced wanderer you are? Got that too.
            Our 10 unique Travel Styles group tours together into themes based on what you like or how you want to travel.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Personalize your tour.</h4>
          <p>
            Squeeze every last drop of adventure out of your tour by customizing it to your liking.
            Add on amazing optional activities throughout your tour like hikes, local cooking classes, or helicopter rides depending on where you’re headed.
            Want extra time for exploring? Book pre- or post-trip accommodations before or after your tour.
            Or let us give you a one-day-or-less introduction to your destination on one of our separate Day Tours.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-1">Get your share of free time.</h4>
          <p>
            If you want to do some solo exploring or maybe just need a nap (it happens to the best of us),
            our itineraries feature built-in free time to let you do your thing.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2">
        <img
          src="https://images.pexels.com/photos/8436587/pexels-photo-8436587.jpeg"
          alt="Yoga Class"
          className="w-full h-[400px] object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
</section>



     <section id="g-for-good" className="bg-[#f7f9fc] px-6 py-16 lg:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
    {/* Left: Intro and Icon */}
    <div>
      <div className="flex items-start gap-4">
        <div className="w-12 h-12">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
            alt="G for Good Icon"
            className="w-full h-full object-contain"
          />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] leading-tight">G for Good</h2>
      </div>
      <p className="text-sm text-gray-700 mt-4">
        When you travel with us, you see our commitment to making travel a force for good is more than just words on our website — it’s in everything we do.
        G for Good stands for all of the social, environmental and ethical good we create as a business which helps to fuel Community Tourism.
        Our efforts to preserve and conserve our world fall under two approaches:
        <strong> Acting Responsibly</strong>, which is our commitment to improve the sustainability of our own operations, and
        <strong> Creating Positive Impact</strong>, which focuses on leaving the right impact in the places we visit.
      </p>
      <a href="#" className="text-[#0287a8] text-sm mt-2 inline-block font-medium">Learn more</a>
    </div>

    {/* Right: Cards */}
    <div className="lg:col-span-2 space-y-6">
      {/* Card 1 */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden flex flex-col sm:flex-row">
        <img
          src="https://images.pexels.com/photos/30147470/pexels-photo-30147470.jpeg"
          alt="Animal Welfare"
          className="w-100 h-40 object-cover"
        />
        <div className="p-4">
          <h4 className="font-semibold text-gray-900">Animal Welfare</h4>
          <p className="text-sm text-gray-700">
            We recognize the importance of animal welfare. That’s why we have worked with experts from World Animal Protection, The Jane Goodall Institute and more to draw up a robust policy which builds on global welfare guidelines.
            <a href="#" className="text-[#0287a8] ml-1">Learn more</a>
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden flex flex-col sm:flex-row">
        <img
          src="https://images.pexels.com/photos/5263804/pexels-photo-5263804.jpeg"
          alt="Child Welfare"
          className="w-100 h-40 object-cover"
        />
        <div className="p-4">
          <h4 className="font-semibold text-gray-900">Child Welfare</h4>
          <p className="text-sm text-gray-700">
            It is critical that no child is ever harmed as a result of tourism. Travellers have the power to make a true impact in the communities they visit,
            and that’s why we actively work to ensure child welfare is protected in the places we operate.
            <a href="#" className="text-[#0287a8] ml-1">Learn more</a>
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden flex flex-col sm:flex-row">
        <img
          src="https://images.pexels.com/photos/32684365/pexels-photo-32684365.jpeg"
          alt="Respecting Cultures"
          className="w-100 h-40 object-cover"
        />
        <div className="p-4">
          <h4 className="font-semibold text-gray-900">Respecting local cultures</h4>
          <p className="text-sm text-gray-700">
            Connecting curious travellers with Indigenous communities is an essential part of our identity. We are committed to respecting the rights, history,
            and culture of Indigenous people while ensuring that tourism supports their well-being.
            <a href="#" className="text-[#0287a8] ml-1">Learn more</a>
          </p>
        </div>
      </div>

      {/* Card 4 (same height, optional) */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden flex flex-col sm:flex-row">
        <img
          src="https://images.pexels.com/photos/6914430/pexels-photo-6914430.jpeg"
          alt="Plastics Project"
          className="w-100 h-40 object-cover"
        />
        <div className="p-4">
          <h4 className="font-semibold text-gray-900">Plastics Partnership Project</h4>
          <p className="text-sm text-gray-700">
            Plastic pollution is a huge global problem. G Adventures is working with our partners to eliminate as much single-use plastic on our tours as possible.
            <a href="#" className="text-[#0287a8] ml-1">You can help, too</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-500">© 2025 G Adventures. All rights reserved.</footer>
    </div>
  );
};

const Section = ({ id, title, subtitle, desc, images }) => {
  return (
    <section id={id} className="px-6 py-12 max-w-7xl mx-auto">
      <h3 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h3>
      <p className="text-purple-700 font-semibold mb-4">{subtitle}</p>
      <p className="text-gray-700 mb-6 max-w-2xl">{desc}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((url, idx) => (
          <img
            key={idx}
            src={url}
            alt="Travel"
            className="rounded-lg object-cover w-full h-56 shadow-md"
          />
        ))}
      </div>
    </section>
  );
};

const scrollLinks = [
  { id: "small-groups", label: "Small Groups" },
  { id: "locally-based-guides", label: "Locally based guides" },
  { id: "support-local", label: "Built to support local communities" },
  { id: "flexibility", label: "Flexibility, freedom, fun" },
  { id: "g-for-good", label: "G for Good" },
];

export default LearnPage;
