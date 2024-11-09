// components/Projects.js
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

const projects = [
    {
        name: "Resume Builder",
        description: "Built with HTML, CSS3, TypeScript, and JavaScript. Includes PDF download.",
        github: "https://github.com/Huzaifaabdulrab/Hackathon-project-2",
        vercel: "https://hackathon-project-2-gaeh-imyk7swyp-huzaifaabdulrabs-projects.vercel.app/"
    },
    {
        name: "SkyPix",
        description: "Responsive drone camera website built with HTML and CSS.",
        github: "https://github.com/Huzaifaabdulrab/skypix",
        vercel: "https://skypix-bice.vercel.app/"
    },
    {
        name: "GrillUp (Custom CSS)",
        description: "Next.js project styled with custom CSS, fully responsive.",
        github: "https://github.com/Huzaifaabdulrab/GrillUp-milestone2",
        vercel: "https://grill-up-milestone2-ti3l.vercel.app/"
    },
    {
        name: "GrillUp (Tailwind CSS)",
        description: "Similar project using Tailwind CSS for styling.",
        github: "https://github.com/Huzaifaabdulrab/GrillUp-",
        vercel: "https://grill-up-qex4.vercel.app/"
    },
    {
        name: "Facebook Clone",
        description: "HTML and CSS, not responsive.",
        github: "https://github.com/Huzaifaabdulrab/Facebook-clone-",
        vercel: "https://facebook-clone-roan-five.vercel.app/"
    },
    {
        name: "Student Card Generator",
        description: "Student card generator with Next.js and props.",
        github: "https://github.com/Huzaifaabdulrab/STD-Card-Using-Props",
        vercel: "https://std-card-using-props.vercel.app/"
    },
    {
        name: "Component-Based Assignment",
        description: "Next.js project focused on components.",
        github: "https://github.com/Huzaifaabdulrab/Component-Base-Assignment-Next.js",
        vercel: "https://component-base-assignment-next-js.vercel.app/"
    },
    {
        name: "CSS Card Design",
        description: "Basic card design created while learning CSS.",
        github: "https://github.com/Huzaifaabdulrab/Card-Desing",
        vercel: "https://card-desing.vercel.app/"
    }
];

export default function Projects() {
    return (
        <div className="projects-section">
            <h1 className="projects-title">My Web Development Projects</h1>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h2 className="project-name">{project.name}</h2>
                        <p className="project-description">{project.description}</p>
                        <div className="project-links">
                            <Link href={project.github}>
                                <p className="project-link">GitHub</p>
                            </Link>
                            <Link href={project.vercel}>
                                <p className="project-link">
                                    View Project <FaExternalLinkAlt className="external-link-icon" />
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
