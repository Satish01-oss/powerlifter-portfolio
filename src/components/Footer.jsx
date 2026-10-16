import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import athleteData, { phoneHref } from "../data/athleteData";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "Achievements", path: "/achievements" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { name, contact, instagram, footerHighlights } = athleteData;

  return (
    <footer className="bg-black border-t border-zinc-800 text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="font-display text-3xl tracking-widest text-white">
              {name}
            </h2>

            <p className="mt-4 text-sm leading-relaxed">
              International Powerlifter, Federation Cup Champion 2026, and
              multi-medalist. Dedicated to
              inspiring the next generation through discipline, strength, and
              consistency.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-red-500 transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Highlights */}
          <div>
            <h3 className="text-white font-semibold mb-4">Highlights</h3>

            <ul className="space-y-3 text-sm">
              {footerHighlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>

            <div className="space-y-4 text-sm">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 hover:text-red-500 transition break-all"
              >
                <FaEnvelope className="shrink-0" aria-hidden="true" />
                {contact.email}
              </a>

              <a
                href={phoneHref}
                className="flex items-center gap-3 hover:text-red-500 transition"
              >
                <FaPhoneAlt className="shrink-0" aria-hidden="true" />
                {contact.phone}
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href={instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} on Instagram`}
                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-red-600 hover:text-white transition"
              >
                <FaInstagram aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-center">
          <p>
            © {currentYear} {name}. All Rights Reserved.
          </p>

          <p>
            Designed & Developed by{" "}
            <a
              href="https://www.instagram.com/_satish_._singh_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 font-semibold hover:text-white transition"
            >
              Satish Kumar Ram
            </a>
          </p>
        </div>
      </div>

      {/* Giant wordmark: letters rise in, and light up red on hover */}
      <motion.p
        aria-hidden="true"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ show: { transition: { staggerChildren: 0.04 } } }}
        className="font-display text-center whitespace-nowrap leading-[0.8] text-[15.5vw] select-none overflow-hidden pt-4"
      >
        {[...name.toUpperCase()].map((letter, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { y: "100%" },
              show: { y: "0%", transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
            }}
            // Steel-grey fill that fades into the page bottom, turning red on hover
            className="inline-block bg-linear-to-b from-zinc-400 via-zinc-600 to-zinc-900 hover:from-red-400 hover:via-red-600 hover:to-red-900 bg-clip-text text-transparent"
          >
            {letter === " " ? " " : letter}
          </motion.span>
        ))}
      </motion.p>
    </footer>
  );
};

export default Footer;
