import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

interface Project {
    name: string;
    description: string;
    github: string;
}

export default function CliProjects() {
    const projects: Project[] = [
        {
            name: "h2-i7-5gen-calculator",
            description: "CLI project created using TypeScript and Node modules.",
            github: "https://github.com/Huzaifaabdulrab/Calculator-Project-GIAIC",
        },
        {
            name: "h2-r2-numguess-game-proj",
            description: "CLI project created using TypeScript and Node modules.",
            github: "https://github.com/Huzaifaabdulrab/Numb-guessing-game",
        },
        {
            name: "atm-machine-project3",
            description: "CLI project created using TypeScript and Node modules.",
            github: "https://github.com/Huzaifaabdulrab/ATM_MACHINE",
        },
        {
            name: "h2-r2-todo-list",
            description: "CLI project created using TypeScript, Node modules, and Inquirer.",
            github: "https://github.com/Huzaifaabdulrab/TO-DO-LIST",
        },
        {
            name: "h2-p4-currency-convertor",
            description: "CLI project created using TypeScript and Node modules.",
            github: "https://github.com/Huzaifaabdulrab/CURRENCY_CONVERTO",
        },
        {
            name: "codewizard",
            description: "A versatile command-line application offering various games and challenges created using TypeScript and Node modules.",
            github: "https://github.com/Huzaifaabdulrab/Command-Line-Game-Suite",
        },
        {
            name: "code-word-counter",
            description: "CLI project created using TypeScript and Node modules, utilizing Inquirer & Chalk.",
            github: "https://github.com/Huzaifaabdulrab/Word-Counter-TS-JS",
        },
        {
            name: "h2-r2-quiz-proj",
            description: "CLI project created using TypeScript and Node modules.",
            github: "https://github.com/Huzaifaabdulrab/TypeScript-Quiz",
        },
        {
            name: "std-manag-sys-pro",
            description: "CLI project created using TypeScript and Node modules.",
            github: "https://github.com/Huzaifaabdulrab/Student-Management-System-",
        },
        {
            name: "countdown_timer-pro",
            description: "CLI project created using TypeScript and Node modules.",
            github: "https://github.com/Huzaifaabdulrab/Countdown-Timer",
        },
        {
            name: "h2_adv-game",
            description: "CLI project created using TypeScript and Node modules with Inquirer & Chalk.",
            github: "https://github.com/Huzaifaabdulrab/Adventure-Game-Node-project",
        },
        {
            name: "h2_mybank",
            description: "CLI project created using TypeScript and Node modules.",
            github: "https://github.com/Huzaifaabdulrab/OOP_My_Bank_",
        },
        {
            name: "h2-my-oop",
            description: "CLI project created using TypeScript and Node modules.",
            github: "https://github.com/Huzaifaabdulrab/MY-OOP",
        },
        {
            name: "async-project",
            description: "CLI project created using TypeScript and Node modules.",
            github: "",
        } ];

    return (
        <div className="cli-projects-section">
            <h1 className="cli-projects-title">My TypeScript CLI Projects</h1>
            <div className="cli-projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="cli-project-card">
                        <h2 className="cli-project-name">{project.name}</h2>
                        <p className="cli-project-description">{project.description}</p>
                        <div className="cli-project-links">
                            {project.github ? (
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cli-project-link"
                                >
                                    GitHub <FaExternalLinkAlt className="external-link-icon" />
                                </Link>
                            ) : (
                                <span className="cli-project-link-disabled">GitHub link not available</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
