import Intro from "../components/intro";
import Skills from "../components/skills";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Contact from "../components/contact";

function HomePage () {

    return(
        <div className="content">
            <Intro/>
            <Skills/>
            <Experience/>
            <Projects/>
            <Contact/>
        </div>
    )};


export default HomePage;