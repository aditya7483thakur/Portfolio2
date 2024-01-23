import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div
        className="skills-section col-10 p-4 slide-in-top ms-auto"
        id="skills"
      >
        <div className="skill-boxes">
          <div className="skill-box" id="html">
            <img src="skills-img/html.png" alt="HTML" />
            <span>HTML</span>
          </div>
          <div className="skill-box" id="css">
            <img src="skills-img/css.png" alt="CSS" />
            <span>CSS</span>
          </div>
          <div className="skill-box" id="javascript">
            <img src="skills-img/javascript.png" alt="JavaScript" />
            <span>JavaScript</span>
          </div>
          <div className="skill-box" id="bootstrap">
            <img src="skills-img/bootstrap.png" alt="BootStrap" />
            <span>BootStrap</span>
          </div>
          <div className="skill-box" id="tailwind">
            <img src="skills-img/tailwind.png" alt="Tailwind CSS" />
            <span>Tailwind CSS</span>
          </div>
          <div className="skill-box" id="nodejs">
            <img src="skills-img/node.png" alt="Node Js" />
            <span>Node Js</span>
          </div>
          <div className="skill-box" id="react">
            <img src="skills-img/react.png" alt="React" />
            <span>React</span>
          </div>
          <div className="skill-box" id="mongodb">
            <img src="skills-img/mongodb.png" alt="Mongodb" />
            <span>Mongodb</span>
          </div>
          <div className="skill-box" id="python">
            <img src="skills-img/python.png" alt="Python" />
            <span>Python</span>
          </div>
          <div className="skill-box" id="cpp">
            <img src="skills-img/cpp.png" alt="C++" />
            <span>C++</span>
          </div>
          <div className="skill-box" id="java">
            <img src="skills-img/java.png" alt="Java" />
            <span>Java</span>
          </div>
          <div className="skill-box" id="c">
            <img src="skills-img/c.png" alt="C" />
            <span>C</span>
          </div>
          <div className="skill-box" id="davinci">
            <img src="skills-img/davinci.png" alt="Davinci Resolve" />
            <span>Davinci Resolve</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
