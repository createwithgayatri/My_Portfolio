import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Contact",
  ];

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">

        <div
          className="logo"
          onClick={() => scrollTo("home")}
        >
          <span className="logo-box">GB</span>
          <span>Gayatri<span className="dot">.</span></span>
        </div>

        <nav className={open ? "nav-links active" : "nav-links"}>
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
            >
              {link}
            </button>
          ))}
        </nav>

        <button
          className="nav-contact"
          onClick={() => scrollTo("contact")}
        >
          Contact Me <FiArrowUpRight />
        </button>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;