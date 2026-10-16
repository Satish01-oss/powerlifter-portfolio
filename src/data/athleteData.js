// Single source of truth for all site content.
// Update values here and every section of the site picks them up.

const athleteData = {
  name: "Prashant Singh",
  title: "International Powerlifter",
  // Biggest title, shown as a gold badge in the hero
  headlineTitle: "Federation Cup Champion 2026",
  location: "West Bengal, India",
  state: "West Bengal",
  category: "Powerlifting",
  weightClass: "66KG / JNR",
  competitions: "7+",

  hero: {
    highlights: [
      "Federation Cup Champion 2026",
      "West Bengal Champion",
      "Jharkhand Gold Medalist",
    ],
    tagline:
      "Dedicated to pushing limits, inspiring athletes, and representing strength through discipline.",
  },

  about: {
    description:
      "International powerlifter from West Bengal and Federation Cup Champion 2026, with multiple medals across state and national championships. Dedicated to strength, discipline, and competitive excellence.",
    currentStatus:
      "Crowned Federation Cup Champion 2026 and preparing for upcoming championships.",
  },

  // Federations / associations competed under
  federations: [
    "Powerlifting Sports Organisation (PSO)",
    "Jharkhand State Powerlifting Organisation (JSPO)",
    "Chhattisgarh State Powerlifting Association (CSPA)",
  ],

  medals: {
    gold: 5,
    silver: 7,
    bronze: 5,
  },

  // `featured` shows the card full-width at the top of the list
  achievements: [
    {
      title: "Federation Cup Champion 2026",
      tone: "gold",
      featured: true,
      description:
        "Crowned champion at the Powerlifting Federation Cup 2026, the biggest title of his career so far and the result of years of disciplined training.",
    },
    {
      title: "International Powerlifter",
      tone: "blue",
      description:
        "Competes at the international level, representing India on the global powerlifting stage with a commitment to excellence and continuous improvement.",
    },
    {
      title: "India Powerlifting Champion",
      tone: "red",
      description:
        "Won the prestigious India Powerlifting Championship in 2026, showcasing exceptional strength and dedication to the sport.",
    },
    {
      title: "West Bengal State Champion",
      tone: "orange",
      description:
        "Secured the title of West Bengal State Champion in 2026, demonstrating exceptional performance and dedication to powerlifting at the state level.",
    },
    {
      title: "All India National Championship Medalist",
      tone: "green",
      description:
        "Achieved multiple medals at the All India National Championship, including 1 Gold Medal and 2 Silver Medals, highlighting competitive success on a national stage.",
    },
  ],

  // Competition best lifts in KG. Total is calculated automatically.
  records: {
    squat: 150,
    bench: 110,
    deadlift: 220,
  },

  // Short list shown in the footer
  footerHighlights: [
    "🏆 Federation Cup Champion 2026",
    "🌍 International Powerlifter",
    "🏆 Jharkhand State Champion",
    "🏆 Powerlifting India Champion",
    "🥇 Jharkhand Gold Medals",
    "🥇 National Medalist",
  ],

  instagram: {
    username: "@ps_world07",
    url: "https://instagram.com/ps_world07",
    followers: "1K+",
    posts: "3",
  },

  contact: {
    email: "prashantsinghrajput525@gmail.com",
    phone: "+91 79082 45330",
  },
};

export const medalTotal = Object.values(athleteData.medals).reduce(
  (sum, count) => sum + count,
  0
);

export const liftTotal =
  athleteData.records.squat +
  athleteData.records.bench +
  athleteData.records.deadlift;

export const phoneHref = `tel:${athleteData.contact.phone.replace(/\s/g, "")}`;

export default athleteData;
