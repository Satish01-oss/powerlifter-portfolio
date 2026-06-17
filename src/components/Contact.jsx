import { motion } from "framer-motion";
import {
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const contactData = [
  {
    title: "Instagram",
    value: "@ps_world07",
    icon: <FaInstagram />,
    link: "https://instagram.com/ps_world07",
    color: "text-pink-500",
  },
  {
    title: "Email",
    value: "prashantsinghrajput525@gmail.com",
    icon: <FaEnvelope />,
    link: "mailto:prashantsinghrajput525@gmail.com",
    color: "text-red-500",
  },
  {
    title: "Phone",
    value: "+91 79082 45330",
    icon: <FaPhoneAlt />,
    link: "tel:+917908245330",
    color: "text-green-500",
  },
];

const Contact = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-red-500 uppercase tracking-widest font-semibold">
            Contact
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Get In Touch
          </h2>

          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Connect for collaborations, competitions,
            fitness discussions, and powerlifting updates.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {contactData.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              target={
                item.title === "Instagram"
                  ? "_blank"
                  : undefined
              }
              rel={
                item.title === "Instagram"
                  ? "noopener noreferrer"
                  : undefined
              }
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="
                bg-[#141414]
                border
                border-zinc-800
                rounded-3xl
                p-8
                transition-all
                duration-300
                hover:border-red-500/30
              "
            >
              <div className={`text-4xl ${item.color}`}>
                {item.icon}
              </div>

              <h3 className="text-white text-xl font-semibold mt-6">
                {item.title}
              </h3>

              <p className="text-zinc-400 mt-3 break-all">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Location Card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          className="
            mt-12
            bg-[#141414]
            border
            border-zinc-800
            rounded-3xl
            p-8
            flex
            flex-col
            md:flex-row
            items-center
            justify-center
            gap-4
          "
        >
          <FaMapMarkerAlt className="text-red-500 text-3xl" />

          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold">
              Location
            </h3>

            <p className="text-zinc-400">
              West Bengal, India
            </p>
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-white">
            Sports Nutrition & Performance
          </h3>

          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Passionate about strength development, sports nutrition, recovery protocols, and evidence-based performance improvement techniques..
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;