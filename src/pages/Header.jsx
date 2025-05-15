import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.svg";
import { Case, File, Github, HomeIcon, User } from "../components/Icons";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const headers = [
  { title: "Home", to: "/", component: <HomeIcon /> },
  {
    title: "Projects",
    to: "/projects",
    component: <Github />,
    disabled: false,
  },
  {
    title: "Experience",
    to: "/experience",
    component: <Case />,
    disabled: false,
  },
  { title: "Resume", to: "/resume", component: <File /> },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b-2 border-gray-500 py-5 px-4 lg:px-20">
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="will-change-transform duration-300 hover:-translate-y-1 hover:scale-125"
        >
          <img src={logo} className="h-10" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-500 hover:text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex mx-auto gap-6 mt-2">
          {headers.map((header, index) => (
            <motion.section
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, type: "spring", delay: 0.3 * index }}
              key={header.title}
              className={
                (header.disabled
                  ? "opacity-50 line-through "
                  : "hover:scale-110 hover:-translate-y-2 cursor-pointer ") +
                "will-change-transform duration-200 flex gap-1 text-xl"
              }
            >
              {header.component}
              <NavLink
                to={header.to}
                style={() => ({
                  pointerEvents: header.disabled ? "none" : "auto",
                })}
              >
                {header.title}
              </NavLink>
            </motion.section>
          ))}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 space-y-4">
          {headers.map((header) => (
            <section
              key={header.title}
              className={
                (header.disabled ? "opacity-50 line-through " : "") +
                "flex items-center gap-2 text-lg py-2"
              }
            >
              {header.component}
              <NavLink
                to={header.to}
                style={() => ({
                  pointerEvents: header.disabled ? "none" : "auto",
                })}
                onClick={() => setIsMenuOpen(false)}
              >
                {header.title}
              </NavLink>
            </section>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
