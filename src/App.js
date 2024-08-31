import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from "./routes/about/About";
import Home from "./routes/home/Home";
import Contact from "./routes/contact/Contact";
import Resume from "./routes/resume/Resume";
import University from "./routes/university/University";
import Blogs from "./routes/blogs/Blogs";
import Experience from "./routes/experience/Experience";
import Projects from "./routes/projects/Projects";
import Skills from "./routes/skills/Skills";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/university" element={<University />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
