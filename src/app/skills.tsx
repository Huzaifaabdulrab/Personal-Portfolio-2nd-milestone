import { FaHtml5, FaCss3, FaJs, FaGithub, FaBootstrap, FaFigma } from "react-icons/fa";
import { RiTailwindCssFill ,RiNextjsFill} from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

export default function SkillsArea() {
  return (
    <div id="Skills" className="skills-container">
      <hr />
      <hr />
      <h1 className="skills-title">Skills</h1>
      <div className="skills-icons-container">
        {[{
          name: "HTML",
          icon: <FaHtml5 />,
          percentage: "90%",
          width: "90%", 
        }, {
          name: "CSS",
          icon: <FaCss3 />,
          percentage: "70%",
          width: "70%",
        }, {
          name: "JavaScript",
          icon: <FaJs />,
          percentage: "60%",
          width: "60%",
        }, {
          name: "TypeScript",
          icon: <BiLogoTypescript />,
          percentage: "80%",
          width: "80%",
        }, {
          name: "Tailwind CSS",
          icon: <RiTailwindCssFill  />,
          percentage: "60%",
          width: "60%",
        },
        {
          name: "Next.js",
          icon: <RiNextjsFill/>,
          percentage: "50%",
          width: "50%"
        },
        {
          name: "GitHub",
          icon: <FaGithub />,
          percentage: "65%",
          width: "65%",
        }, {
          name: "Bootstrap",
          icon: <FaBootstrap />,
          percentage: "80%",
          width: "80%",
        }, {
          name: "UI & UX",
          icon: <FaFigma />,
          percentage: "50%",
          width: "50%",
        },
        ].map(({ name, icon, percentage, width }, index) => (
          <div key={index} className="skill-item" >
            <p className="skill-name">
              {name} <span className="skill-icon" >{icon}</span>
            </p>
            <span className="skill-percentage" >{percentage}</span>
            <div className="skills-box"  style={{  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3), 0 8px 20px rgba(0, 0, 0, 10)" }}
              >
              <div className="skills-bar " style={{ width }}  />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
