import Image from "next/image";
import PortfolioImg from "../app/public/Images/portfolio.png";
import {
  FaPhone,
  FaEnvelope,
  FaUser,
  FaCode,
  FaPaintBrush,
  FaProjectDiagram,
  FaRobot,
} from "react-icons/fa";
export default function About() {
  return (
    <>
      <div id="About" className="about-container">
        <Image
          src={PortfolioImg}
          alt="Huzaifa Abdulrab Image"
          height={350}
          className="about-image"
        />
        <div className="about-text-container">
          <h2 className="intro-heading">My Intro</h2>
          <h1 className="about-heading">About Me</h1>
          <p className="about-description">
            Hi, I am <span className="bold-text">Huzaifa Abdulrab</span>.
            I apply my expertise in HTML, CSS, JavaScript, and TypeScript to
            create dynamic, responsive, and <br /> user-friendly web
            applications.
          </p>
          <hr />
          <div className="info-container">
            <p className="info-item">
              <FaUser className="icon" /> 
              <p className="label">Name :</p>
              <span className="text">Huzaifa Abdulrab</span>
            </p> 
            <p className="info-item">
              <FaEnvelope className="icon" /> 
              <p className="label">Email:</p>
              <span className="text">huzaifaabdulrab2@gmail.com</span>
            </p>
            <p className="info-item">
              <FaPhone className="icon" />
              <p className="label">Contact:</p>
              <span className="text">03400292040</span>
            </p>
          </div>
          <hr />
          <h1 className="interest-heading">My Interests</h1>
          <p className="interests">
            <FaCode className="icon" /> <span className="interest">Coding</span>
            <FaPaintBrush className="icon" /> <span className="interest">Painting</span>
            <FaProjectDiagram className="icon" /> <span className="interest">Project</span>
            <FaRobot className="icon" /> <span className="interest">AI</span>
          </p>
        </div>
      </div>
    </>
  );
}
