// components/Project.js
import { FaArrowAltCircleDown } from "react-icons/fa";
import Image, { StaticImageData } from "next/image";
import Link from "next/link"; // Import Link from Next.js
import WebDevelop from "../app/public/Images/Web-development copy.jpg";
import Bootstrap from "../app/public/Images/Bootstrap.jpeg";
import Cli from "../app/public/Images/Cli.png";

export default function Project() {
  type project = {
    id: number;
    image: StaticImageData;
    name: string;
    description: string;
    icon: JSX.Element;
    url: string; // Add URL property for linking
  };

  const projectList: project[] = [
    {
      id: 1,
      image: WebDevelop,
      name: "Web-Development",
      description:
        "A collection of my web development projects using HTML, CSS, JavaScript, and TypeScript.",
      icon: <FaArrowAltCircleDown className="text-[#091057]" />,
      url: "/Web-Project", // Link to the webProject page
    },
    {
      id: 2,
      image: Bootstrap,
      name: "Bootstrap Design",
      description:
        "A showcase of responsive designs built with the Bootstrap framework to enhance user experience.",
      icon: <FaArrowAltCircleDown className="text-[#091057]" />,
      url: "/bootstrap-design",
    },
    {
      id: 3,
      image: Cli,
      name: "CLI Tools",
      description:
        "A suite of command-line tools developed in TypeScript for improving productivity and efficiency.",
      icon: <FaArrowAltCircleDown className="text-[#091057]" />,
      url: "/Cli", // Corrected to point to the correct CLI route
    },
  ];

  return (
    <div id="Project" className="project-container">
      <div className="container">
        <h1 className="section-title">Project</h1>
        <div className="project-list">
          {projectList.map((list) => (
            <div key={list.id} className="project-item">
              <div className="image-container">
                <Image
                  src={list.image}
                  alt={list.name}
                  width={400}
                  height={200}
                />
              </div>
              <h2 className="project-name">{list.name}</h2>
              <p className="project-description">{list.description}</p>
              <div className="icon-container">{list.icon}</div>
              <Link href={list.url}>
                <button className="btn">Click me</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
