// Navbar.jsx
'use client'
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import HAlogo from "../app/public/Images/HAlogo.jpeg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <Image src={HAlogo} alt="logo" width={40} height={120} className="logo" />

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        <FaBars className="icon" />
      </div>

      {/* Navigation menu for PC */}
      <nav className="navigation">
        <ul className="menu">
          <Link href="#Screen"><li className="menu-item">Home</li></Link>
          <Link href="#About"><li className="menu-item">About</li></Link>
          <Link href="#Skills"><li className="menu-item">Skills</li></Link>
          <Link href="#Project"><li className="menu-item">Project</li></Link>
          <Link href="#Service"><li className="menu-item">Service</li></Link>
          <Link href="#Contact"><li className="menu-item">Contact</li></Link>
        </ul>
      </nav>

      {/* Mobile Navigation dropdown menu */}
      <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
        <ul className="dropdown-list">
          <Link href="#Screen"><li className="dropdown-item">Home</li></Link>
          <Link href="#About"><li className="dropdown-item">About</li></Link>
          <Link href="#Skills"><li className="dropdown-item">Skills</li></Link>
          <Link href="#Project"><li className="dropdown-item">Project</li></Link>
          <Link href="#Service"><li className="dropdown-item">Service</li></Link>
          <Link href="#Contact"><li className="dropdown-item">Contact</li></Link>
        </ul>
      </div>
    </div>
  );
}
