// ============================================================
// HOUSE CLEANERS funnel — testimonial content.
//
// Six real house cleaning clients. Videos and posters are self-hosted in
// assets/videos/ and play as a plain <video> tag (see wireVideoCards() in
// main.js). Posters are .png here.
//
// The ?v=1 suffix is a cache-buster: bump it to ?v=2 whenever you REPLACE a
// video or poster file, otherwise browsers keep serving the old one.
//
// Note: quotes are stored WITHOUT surrounding quote marks. videoCardHTML()
// in main.js already wraps each one in "..." when it renders, so including
// them here would produce ""doubled quotes"".
// ============================================================
window.TESTIMONIALS = [
  {
    id: "jim",
    quote: "Super responsive from day one. They did exactly what they said they were going to do, kept us updated, and we started seeing results pretty quickly.",
    name: "Jim",
    company: "Jim Cleans",
    videoSrc: "assets/videos/jim.mp4?v=1",
    poster: "assets/videos/jim.png?v=1",
  },
  {
    id: "jonathan",
    quote: "Went from barely getting calls to having my phone ring consistently. Our reviews climbed, rankings improved, and the leads started coming in fast.",
    name: "Jonathan",
    company: "Sparkle & Shine Cleaning",
    videoSrc: "assets/videos/jonathan.mp4?v=1",
    poster: "assets/videos/jonathan.png?v=1",
  },
  {
    id: "nick",
    quote: "The results came way faster than I expected. More calls, better visibility, and a steady flow of new customers.",
    name: "Nick",
    company: "Eco Clean Earth",
    videoSrc: "assets/videos/nick.mp4?v=1",
    poster: "assets/videos/nick.png?v=1",
  },
  {
    id: "anthony",
    quote: "Even during our slowest months in the winter, our phone is still ringing every single day. We're getting consistent calls when we used to struggle for leads.",
    name: "Anthony",
    company: "Brightway Cleaning Services",
    videoSrc: "assets/videos/anthony.mp4?v=1",
    poster: "assets/videos/anthony.png?v=1",
  },
  {
    id: "paul",
    quote: "Game changer for my business. We generated 8 large jobs and had our best month ever within just a few months.",
    name: "Paul",
    company: "Fresh Start Cleaning Co.",
    videoSrc: "assets/videos/paul.mp4?v=1",
    poster: "assets/videos/paul.png?v=1",
  },
  {
    id: "trevor",
    quote: "Literally within 30 days, I was at the top. I've had everyone tell me they could get me there, but nobody could actually get me there until now.",
    name: "Trevor",
    company: "ClearView Cleaning Services",
    videoSrc: "assets/videos/trevor.mp4?v=1",
    poster: "assets/videos/trevor.png?v=1",
  },
];

// The 2-minute explainer at the top of the booking and thank-you pages.
// Set videoSrc to "" to hide that whole section (heading included).
window.EXPLAINER_VIDEO = {
  videoSrc: "assets/videos/2min.mp4?v=1",
  poster: "assets/videos/2min.jpg?v=1",
  caption: "",
};

// Homepage (index.html) — Jim, Jonathan, Nick
window.HERO_TESTIMONIAL_IDS = ["jim", "jonathan", "nick"];

// Booking pages (book-tracked.html + book-untracked.html) — Anthony, Paul, Trevor
window.BOOKING_TESTIMONIAL_IDS = ["anthony", "paul", "trevor"];

// Thank-you page — all six
window.THANK_YOU_TESTIMONIAL_IDS = ["jim", "jonathan", "nick", "anthony", "paul", "trevor"];
