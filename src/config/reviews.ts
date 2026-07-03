import type { ReviewItem } from "@/types";

// Real Google reviews for The Speedy Sparky LLC (verbatim text, owner
// responses omitted). Relative dates are as of the July 2026 site build.
export const googleReviews: ReviewItem[] = [
  {
    id: "review-nicholas",
    name: "Nicholas S-S",
    initials: "N",
    avatarColorIndex: 0,
    rating: 5,
    relativeDate: "3 weeks ago",
    text: "I have used the Speedy Sparky for 2 home projects now and will continue to use them. The projects have been completed with utmost care and speed while communicating clearly what was being performed. I really appreciate it and would recommend to anyone looking for an electrician.",
    source: "google",
  },
  {
    id: "review-ramsey",
    name: "Ramsey",
    initials: "R",
    avatarColorIndex: 1,
    rating: 5,
    relativeDate: "a month ago",
    text: "Aubrey is always on time and does great work for a reasonable price. I had him to perform multiple jobs at my house. I would highly recommend him.",
    source: "google",
  },
  {
    id: "review-kensy",
    name: "Kensy Orellana",
    initials: "K",
    avatarColorIndex: 2,
    rating: 5,
    relativeDate: "a month ago",
    text: "I recently had the pleasure of working with Aubrey and was extremely impressed with the professionalism, quality of work, and attention to detail provided throughout the entire project. Aubrey was reliable, knowledgeable, and took the time to explain everything clearly while making sure the job was completed safely and efficiently. The workmanship was top-notch, the communication was excellent, and the project was completed on time and with great care. I highly recommend Aubrey and his electrical company to anyone looking for honest, dependable, and high-quality electrical services.",
    source: "google",
  },
  {
    id: "review-caitlin",
    name: "Caitlin Kozlowski",
    initials: "C",
    avatarColorIndex: 3,
    rating: 5,
    relativeDate: "a month ago",
    text: "You can tell Aubrey truly cares about his work. Quick response — lives up to the name \"Speedy\"! Happy to answer all my questions and make sure I actually understand the work being done. Kind and makes getting work done a pleasant experience. Reliable, punctual, and reasonable with pricing. Makes sure everything is clean and tidy when he is finished!",
    source: "google",
  },
  {
    id: "review-andria",
    name: "Andria Grillo",
    initials: "A",
    avatarColorIndex: 4,
    rating: 5,
    relativeDate: "2 months ago",
    text: "We had an emergency situation at our house where our electric box caught on fire due to old age. Aubrey immediately came out to fix the issue. He was there roughly 7 hours and did an amazing job! He made sure our electricity was back on and didn't leave until everything was completed & safe. Would absolutely recommend!!",
    source: "google",
  },
  {
    id: "review-klaudia",
    name: "Klaudia Kristuli",
    initials: "K",
    avatarColorIndex: 5,
    rating: 5,
    relativeDate: "4 months ago",
    text: "Aubrey is incredible! I called him at 11pm. He answered my question and ran to the rescue for my house, even though it was after hours. Thank you again from the bottom of my heart for saving our house on a blizzard cold night.",
    source: "google",
  },
  {
    id: "review-jason",
    name: "Jason Keshian",
    initials: "J",
    avatarColorIndex: 0,
    rating: 5,
    relativeDate: "a month ago",
    text: "Aubrey and Cedric installed a very heavy, complex chandelier in my front hallway with 30-foot ceilings, and they did an excellent job. They worked efficiently, handled a challenging install without any issues, and the final result looks fantastic. I really appreciate their professionalism and attention to detail. I'd absolutely hire them again in the future. Highly recommend.",
    source: "google",
  },
  {
    id: "review-karyn",
    name: "Karyn Bantul",
    initials: "K",
    avatarColorIndex: 1,
    rating: 5,
    relativeDate: "a month ago",
    text: "Professional, courteous and reasonable prices. Aubrey was able to fit my appointment in that was convenient to my schedule. Very punctual.",
    source: "google",
  },
  {
    id: "review-kevin",
    name: "Kevin Smith",
    initials: "K",
    avatarColorIndex: 2,
    rating: 5,
    relativeDate: "8 months ago",
    text: "We will absolutely be calling Aubrey and Speedy Sparky for any and all electrical work. Aubrey was incredibly knowledgeable, took the time to explain every option, and made sure we understood what was being done. We had a new electrical panel installed, including a new meter outside. The work was completed quickly, cleanly, and exactly as promised. Highly recommend!",
    source: "google",
  },
  {
    id: "review-christopher",
    name: "Christopher Bartholomew",
    initials: "C",
    avatarColorIndex: 3,
    rating: 5,
    relativeDate: "7 months ago",
    text: "Aubrey has been to my condo 4 times. The first time was to give a quote. Spent an hour of his own time figuring out wiring. He's been back three times. His workmanship is great. Highly recommend him.",
    source: "google",
  },
];

/** Curated subsets for specific placements */
export const homepageReviews = [
  googleReviews[3], // Caitlin — "lives up to the name Speedy"
  googleReviews[8], // Kevin — panel install specifics
  googleReviews[5], // Klaudia — 11pm emergency call
];

export const evLandingReviews = [
  googleReviews[0], // Nicholas — repeat customer
  googleReviews[2], // Kensy — professionalism
  googleReviews[1], // Ramsey — on time, fair price
];

export const panelLandingReviews = [
  googleReviews[8], // Kevin — new panel + meter
  googleReviews[4], // Andria — panel fire emergency rebuild
  googleReviews[9], // Christopher — condo wiring
];

export const emergencyLandingReviews = [
  googleReviews[5], // Klaudia — 11pm blizzard call
  googleReviews[4], // Andria — electric box fire
  googleReviews[3], // Caitlin — quick response
];
