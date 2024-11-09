// components/ServicesSection.js
import { FaHtml5, FaCss3, FaJs, FaGithub } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill} from "react-icons/ri";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Utilizing HTML, CSS, and JavaScript to craft responsive and visually engaging web interfaces, ensuring optimal user experiences across all devices.",
      icon: <FaHtml5 className="service-icon" />,
    },
    {
      title: "CSS Frameworks",
      description:
        "Leveraging frameworks like Tailwind CSS and Bootstrap to create beautiful, responsive layouts with minimal effort.",
      icon: <FaCss3 className="service-icon" />,
    },
    {
      title: "JavaScript Development",
      description:
        "Developing dynamic web applications using JavaScript, enhancing interactivity and user engagement.",
      icon: <FaJs className="service-icon" />,
    },
    {
      title: "TypeScript Development",
      description:
        "Building robust applications with TypeScript for enhanced code quality and maintainability.",
      icon: <BiLogoTypescript className="service-icon" />,
    },
    {
      title: "Next.js Development",
      description:
        "Creating high-performance web applications with Next.js, focusing on server-side rendering and static site generation.",
      icon: <RiNextjsFill className="service-icon" />,
    },
    {
      title: "Version Control with GitHub",
      description:
        "Utilizing Git and GitHub for efficient version control and collaboration in software development, ensuring smooth workflow and code management.",
      icon: <FaGithub className="service-icon" />,
    },
  ];

  return (
    <>
      <h1 id="Service" className="service-title">Our Service</h1>
    
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon-container text-center ml-[45%]">{service.icon}</div>
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
  
    </>
  );
}
