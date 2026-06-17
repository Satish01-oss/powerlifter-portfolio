import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-zinc-800 text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              PRASHANT SINGH
            </h2>

            <p className="mt-4 text-sm leading-relaxed">
              National Powerlifter, State Champion, and Medalist.
              Dedicated to inspiring the next generation through
              discipline, strength, and consistency.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-red-500 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/achievements"
                  className="hover:text-red-500 transition"
                >
                  Achievements
                </Link>
              </li>

              <li>
                <Link
                  to="/gallery"
                  className="hover:text-red-500 transition"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  to="/journey"
                  className="hover:text-red-500 transition"
                >
                  Journey
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-red-500 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Highlights
            </h3>

            <ul className="space-y-3 text-sm">
              <li>🏆 Jharkhand State Champion</li>
              <li>🏆 Powerlifting India Champion</li>
              <li>🥇 Jharkhand Gold Medals</li>
              <li>🥇 National Medalist</li>
              <li>🏋️ Competitive Powerlifter</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-4">
              <a
                href="mailto:prashantsinghrajput525@gmail.com"
                className="flex items-center gap-3 hover:text-red-500 transition"
              >
                <FaEnvelope />
                prashantsinghrajput525@gmail.com
              </a>

              <a
                href="tel:+917908245330"
                className="flex items-center gap-3 hover:text-red-500 transition"
              >
                <FaPhoneAlt />
                +917908245330
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/ps_world07"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-red-600 hover:text-white transition"
              >
                <FaInstagram />
              </a>

              {/* <a
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-red-600 hover:text-white transition"
              >
                <FaYoutube />
              </a> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>
            © {currentYear} Powerlifer Portfolio. All Rights Reserved.
          </p>

          <p>
            Designed & Developed by{" "}
            <a href="https://www.instagram.com/_satishkumar_ram_"
            target="_blank"
            rel="noreferrer"
            className="text-red-500 font-semibold hover:text-white transition">
              Satish Kumar Ram
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;