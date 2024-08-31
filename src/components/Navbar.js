import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import '../styles/Navbar.css';

const Navbar = () => {
    const location = useLocation();
    const [clickedLink, setClickedLink] = useState("");

    const handleClick = (path) => {
        setClickedLink(path);
    };

    return (
        <div className="navbar">
            <Link
                to="/"
                className={`${location.pathname === "/" ? "active" : ""} ${clickedLink === "/" ? "clicked" : ""}`}
                onClick={() => handleClick("/")}
            >
                <span>Home</span>
            </Link>
            <Link
                to="/about"
                className={`${location.pathname === "/about" ? "active" : ""} ${clickedLink === "/about" ? "clicked" : ""}`}
                onClick={() => handleClick("/about")}
            >
                <span>About</span>
            </Link>
            <Link
                to="/experience"
                className={`${location.pathname === "/experience" ? "active" : ""} ${clickedLink === "/experience" ? "clicked" : ""}`}
                onClick={() => handleClick("/experience")}
            >
                <span>Experience</span>
            </Link>
            <Link
                to="/projects"
                className={`${location.pathname === "/projects" ? "active" : ""} ${clickedLink === "/projects" ? "clicked" : ""}`}
                onClick={() => handleClick("/projects")}
            >
                <span>Projects</span>
            </Link>
            <Link
                to="/skills"
                className={`${location.pathname === "/skills" ? "active" : ""} ${clickedLink === "/skills" ? "clicked" : ""}`}
                onClick={() => handleClick("/skills")}
            >
                <span>Skills</span>
            </Link>
            <Link
                to="/university"
                className={`${location.pathname === "/university" ? "active" : ""} ${clickedLink === "/university" ? "clicked" : ""}`}
                onClick={() => handleClick("/university")}
            >
                <span>University</span>
            </Link>
            <Link
                to="/blogs"
                className={`${location.pathname === "/blogs" ? "active" : ""} ${clickedLink === "/blogs" ? "clicked" : ""}`}
                onClick={() => handleClick("/blogs")}
            >
                <span>Blogs</span>
            </Link>
            <Link
                to="/contact"
                className={`${location.pathname === "/contact" ? "active" : ""} ${clickedLink === "/contact" ? "clicked" : ""}`}
                onClick={() => handleClick("/contact")}
            >
                <span>Contact</span>
            </Link>
            <Link
                to="/resume"
                className={`${location.pathname === "/resume" ? "active" : ""} ${clickedLink === "/resume" ? "clicked" : ""}`}
                onClick={() => handleClick("/resume")}
            >
                <span>Resume</span>
            </Link>
        </div>
    );
};

export default Navbar;
