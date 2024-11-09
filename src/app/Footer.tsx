// components/Footer.js
import { FaGithub, FaEnvelope, FaLinkedin, FaTree } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <hr className="footer-hr" />
      <div className="footer-container">
        
        {/* About Section */}
        <div className="about-section">
          <h2 className="about-heading text-[24px]">Huzaifa Abdulrab</h2>
          <p className="about-text text-[16px] text-gray-500">
            Frontend Developer passionate about building interactive web experiences with modern technologies.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="quick-links-section">
          <h3 className="quick-links-heading">Quick Links</h3>
          <ul className="quick-links-list ">
            <li><Link href="#Screen" className="hover-link">Home</Link></li>
            <li><Link href="#About" className="hover-link">About</Link></li>
            <li><Link href="#Skills" className="hover-link">Skills</Link></li> 
            <li><Link href="#Project" className="hover-link">Projects</Link></li>
            <li><Link href="#Contact" className="hover-link">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Information & Social Links */}
        <div className="contact-info">
          <Link href="mailto:huzaifaabdulrab2@gmail.com" className="email-link">
            huzaifaabdulrab2@gmail.com
          </Link>
          <p className="footer-text  text-gray-500"> &copy; {currentYear} Huzaifa Abdulrab</p>

          {/* Social Links */}
          <ul className="social-links flex gap-8 text-2xl pt-4 text-[#091057]">
            <Link href="https://linktr.ee/huzaifaabdulrab">
              <li className="social-icon"><FaTree /></li>
            </Link>
            <Link href="https://github.com/huzaifaabdulrab">
              <li className="social-icon"><FaGithub /></li>
            </Link>
            <Link href="mailto:huzaifaabdulrab2@gmail.com">
              <li className="social-icon"><FaEnvelope /></li>
            </Link>
            <Link href="https://www.linkedin.com/in/huzaifa-abdulrab/">
              <li className="social-icon"><FaLinkedin /></li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
