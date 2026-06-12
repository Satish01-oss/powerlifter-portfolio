import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Achievements", path: "/achievements" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-zinc-800"
          : "bg-transparent"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex flex-col"
            onClick={closeMenu}
          >
            <span className="text-white text-xl font-bold tracking-wider">
              PRASHANT SINGH
            </span>

            <span className="text-red-500 text-xs uppercase tracking-[4px]">
              NATIONAL POWERLIFTER
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `transition duration-300 ${isActive
                    ? "text-red-500 font-semibold"
                    : "text-zinc-300 hover:text-red-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Instagram Button */}
          <div className="hidden lg:block">
            <a
              href="https://instagram.com/ps_world07"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition duration-300 px-5 py-2 rounded-full text-white font-medium"
            >
              <FaInstagram />
              Follow
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {/* Mobile Navigation */}
        <div
          className={`
    lg:hidden
    overflow-hidden
    transition-all
    duration-300
    ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
  `}
        >
          <div
            className="
      mt-3
      rounded-2xl
      border
      border-zinc-800
      bg-black/95
      backdrop-blur-xl
      p-5
      shadow-2xl
    "
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `
              py-2
              text-lg
              transition
              duration-300
              ${isActive
                      ? "text-red-500 font-semibold"
                      : "text-zinc-300 hover:text-red-500"
                    }
            `
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <a
                href="https://instagram.com/ps_world07"
                target="_blank"
                rel="noopener noreferrer"
                className="
          mt-2
          flex
          items-center
          justify-center
          gap-2
          bg-red-600
          hover:bg-red-700
          transition
          duration-300
          px-5
          py-3
          rounded-xl
          text-white
          font-medium
        "
              >
                <FaInstagram />
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;