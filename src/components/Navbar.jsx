import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";

import athleteData from "../data/athleteData";
import { useIntroDone } from "../context/intro";
import Magnetic from "./fx/Magnetic";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Achievements", path: "/achievements" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const ease = [0.16, 1, 0.3, 1];

const Navbar = () => {
  const ready = useIntroDone();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 30);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Solid background once scrolled; slide away when scrolling down, back when scrolling up.
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 30);
    setHidden(latest > previous && latest > 200);
  });

  // Close the mobile menu with the Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: ready && (!hidden || isOpen) ? 0 : -100 }}
      transition={{ duration: 0.45, ease, delay: ready && !scrolled ? 0.3 : 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-[background-color,border-color] duration-300 ${
        scrolled || isOpen
          ? "bg-black/85 backdrop-blur-md border-b border-zinc-800"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="group flex flex-col" onClick={closeMenu}>
            <span className="font-display text-white text-2xl tracking-widest leading-none">
              {athleteData.name.split(" ")[0]}
              <span className="text-red-500 group-hover:text-white transition-colors">
                {" "}
                {athleteData.name.split(" ").slice(1).join(" ")}
              </span>
            </span>

            <span className="text-zinc-400 text-[10px] uppercase tracking-[4px] mt-1">
              {athleteData.title}
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  end
                  className={({ isActive }) =>
                    `relative block px-4 py-2 rounded-full transition-colors duration-300 ${
                      isActive ? "text-white" : "text-zinc-400 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Pill slides between links (shared layout animation) */}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative">{link.name}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Instagram Button */}
          <Magnetic className="hidden lg:block">
            <a
              href={athleteData.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition duration-300 px-5 py-2 rounded-full text-white font-medium"
            >
              <FaInstagram aria-hidden="true" />
              Follow
            </a>
          </Magnetic>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="lg:hidden text-white text-2xl p-2 -mr-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="block"
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease }}
              className="lg:hidden overflow-hidden"
            >
              <motion.div
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
                className="mb-5 rounded-2xl border border-zinc-800 bg-black/95 backdrop-blur-xl p-5 shadow-2xl"
              >
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <motion.li
                      key={link.name}
                      variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
                    >
                      <NavLink
                        to={link.path}
                        end
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          `block py-2 font-display text-3xl tracking-wider transition duration-300 ${
                            isActive ? "text-red-500" : "text-zinc-300 hover:text-red-500"
                          }`
                        }
                      >
                        {link.name}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>

                <motion.a
                  variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                  href={athleteData.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 transition-colors duration-300 px-5 py-3 rounded-xl text-white font-medium"
                >
                  <FaInstagram aria-hidden="true" />
                  Follow on Instagram
                </motion.a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
