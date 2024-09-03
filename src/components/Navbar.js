import { useState } from "react";
import { Link as useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import '../styles/Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [clickedLink, setClickedLink] = useState("");

    const handleClick = (path) => {
        setClickedLink(path);
    };

    return (
        <div className="navbar">
            <ScrollLink
                to="/"
                smooth={true}
                duration={500}
                className={`${location.pathname === "/" ? "active" : ""} ${clickedLink === "/" ? "clicked" : ""}`}
                onClick={() => handleClick("/")}
            >
                <span>Home</span>
            </ScrollLink>

            {/* About Section */}
            <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className={`${location.hash === "#about" ? "active" : ""} ${clickedLink === "/about" ? "clicked" : ""}`}
                onClick={() => handleClick("/about")}
            >
                <span>About</span>
            </ScrollLink>

            {/* Experience Section */}
            <ScrollLink
                to="experience"
                smooth={true}
                duration={500}
                className={`${location.hash === "#experience" ? "active" : ""} ${clickedLink === "/experience" ? "clicked" : ""}`}
                onClick={() => handleClick("/experience")}
            >
                <span>Experience</span>
            </ScrollLink>

            {/* Projects Section */}
            <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className={`${location.hash === "#projects" ? "active" : ""} ${clickedLink === "/projects" ? "clicked" : ""}`}
                onClick={() => handleClick("/projects")}
            >
                <span>Projects</span>
            </ScrollLink>

            {/* Skills Section */}
            <ScrollLink
                to="skills"
                smooth={true}
                duration={500}
                className={`${location.hash === "#skills" ? "active" : ""} ${clickedLink === "/skills" ? "clicked" : ""}`}
                onClick={() => handleClick("/skills")}
            >
                <span>Skills</span>
            </ScrollLink>

            {/* University Section */}
            <ScrollLink
                to="university"
                smooth={true}
                duration={500}
                className={`${location.hash === "#university" ? "active" : ""} ${clickedLink === "/university" ? "clicked" : ""}`}
                onClick={() => handleClick("/university")}
            >
                <span>University</span>
            </ScrollLink>

            {/* Blogs Section */}
            <ScrollLink
                to="blogs"
                smooth={true}
                duration={500}
                className={`${location.hash === "#blogs" ? "active" : ""} ${clickedLink === "/blogs" ? "clicked" : ""}`}
                onClick={() => handleClick("/blogs")}
            >
                <span>Blogs</span>
            </ScrollLink>

            {/* Contact Section */}
            <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className={`${location.hash === "#contact" ? "active" : ""} ${clickedLink === "/contact" ? "clicked" : ""}`}
                onClick={() => handleClick("/contact")}
            >
                <span>Contact</span>
            </ScrollLink>

            {/* Resume Section */}
            <ScrollLink
                to="resume"
                smooth={true}
                duration={500}
                className={`${location.hash === "#resume" ? "active" : ""} ${clickedLink === "/resume" ? "clicked" : ""}`}
                onClick={() => handleClick("/resume")}
            >
                <span>Resume</span>
            </ScrollLink>
        </div>
    );
};

export default Navbar;
