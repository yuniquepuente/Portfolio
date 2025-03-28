import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "About",
      path: "/about",
    },
        
  ];
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-[#F5F5F5] shadow-sm" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="font-serif text-xl tracking-wider">
          <span className="relative text-[#8B0000]">
            Yunique Puente
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#8B0000] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`group relative font-light tracking-wide text-sm transition-colors duration-300 ${location.pathname === link.path ? "text-[#8B0000]" : "hover:text-[#8B0000]"}`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 w-full h-[1px] transform transition-transform duration-300 ${location.pathname === link.path ? "bg-[#8B0000] scale-x-100" : "bg-[#8B0000] scale-x-0 group-hover:scale-x-100"}`}
              ></span>
            </Link>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#F5F5F5] border-t border-gray-200">
          <div className="container mx-auto px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block py-3 font-light ${location.pathname === link.path ? "text-[#8B0000]" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
export default Header;
