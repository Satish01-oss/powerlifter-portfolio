import { motion } from "framer-motion";
import {
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import athleteData, { phoneHref } from "../data/athleteData";
import SectionHeading from "./SectionHeading";
import InteractiveCard from "./fx/InteractiveCard";

const { contact, instagram, location } = athleteData;

const contactData = [
  {
    title: "Instagram",
    value: instagram.username,
    icon: FaInstagram,
    link: instagram.url,
    color: "text-pink-500",
    spot: "spot-pink",
    external: true,
  },
  {
    title: "Email",
    value: contact.email,
    icon: FaEnvelope,
    link: `mailto:${contact.email}`,
    color: "text-red-500",
    spot: "",
  },
  {
    title: "Phone",
    value: contact.phone,
    icon: FaPhoneAlt,
    link: phoneHref,
    color: "text-green-500",
    spot: "spot-green",
  },
];

const ease = [0.16, 1, 0.3, 1];

const Contact = ({ headingLevel }) => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          as={headingLevel}
          eyebrow="Contact"
          title="Get In Touch"
          description="Connect for collaborations, competitions, fitness discussions, and powerlifting updates."
        />

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {contactData.map((item, index) => (
            <InteractiveCard
              as="a"
              key={item.title}
              href={item.link}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.8, ease }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              className={`${item.spot} group block bg-card border border-zinc-800 rounded-3xl p-8`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-3xl ${item.color} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
                >
                  <item.icon aria-hidden="true" />
                </span>

                <FaArrowRight
                  className="text-zinc-600 -rotate-45 transition-all duration-300 group-hover:rotate-0 group-hover:text-white"
                  aria-hidden="true"
                />
              </div>

              <h3 className="text-white text-xl font-semibold mt-6">{item.title}</h3>

              <p className="text-zinc-400 mt-2 break-words group-hover:text-white transition-colors">
                {item.value}
              </p>
            </InteractiveCard>
          ))}
        </div>

        {/* Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mt-6 bg-card border border-zinc-800 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <span className="relative flex items-center justify-center">
            <span className="absolute w-10 h-10 rounded-full bg-red-500/30 animate-ping" aria-hidden="true" />
            <FaMapMarkerAlt className="relative text-red-500 text-3xl" aria-hidden="true" />
          </span>

          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold">Location</h3>
            <p className="text-zinc-400">{location}</p>
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mt-16 text-center"
        >
          <h3 className="font-display text-4xl md:text-5xl tracking-wide text-white">
            Sports Nutrition & Performance
          </h3>

          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Passionate about strength development, sports nutrition, recovery
            protocols, and evidence-based performance improvement techniques.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
