import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <section
      className="skills-section col-10 p-4 slide-in-top ms-auto"
      id="skills"
      aria-labelledby="skills-heading"
      role="region"
    >
      <h1 id="skills-heading" className="visually-hidden">
        Technical Skills
      </h1>
      <div className="skill-boxes" role="list">
        <div className="skill-box" id="html" role="listitem">
          <img
            src="skills-img/html.png"
            alt="HTML5 - Markup Language"
            loading="lazy"
          />
          <span>HTML</span>
        </div>
        <div className="skill-box" id="css" role="listitem">
          <img
            src="skills-img/css.png"
            alt="CSS3 - Styling Language"
            loading="lazy"
          />
          <span>CSS</span>
        </div>
        <div className="skill-box" id="javascript" role="listitem">
          <img
            src="skills-img/javascript.png"
            alt="JavaScript - Programming Language"
            loading="lazy"
          />
          <span>JavaScript</span>
        </div>
        <div className="skill-box" id="bootstrap" role="listitem">
          <img
            src="skills-img/bootstrap.png"
            alt="Bootstrap - CSS Framework"
            loading="lazy"
          />
          <span>BootStrap</span>
        </div>
        <div className="skill-box" id="tailwind" role="listitem">
          <img
            src="skills-img/tailwind.png"
            alt="Tailwind CSS - Utility-First CSS Framework"
            loading="lazy"
          />
          <span>Tailwind CSS</span>
        </div>
        <div className="skill-box" id="nodejs" role="listitem">
          <img
            src="skills-img/node.png"
            alt="Node.js - JavaScript Runtime"
            loading="lazy"
          />
          <span>Node Js</span>
        </div>
        <div className="skill-box" id="react" role="listitem">
          <img
            src="skills-img/react.png"
            alt="React - JavaScript Library"
            loading="lazy"
          />
          <span>React</span>
        </div>
        <div className="skill-box" id="mongodb" role="listitem">
          <img
            src="skills-img/mongodb.png"
            alt="MongoDB - NoSQL Database"
            loading="lazy"
          />
          <span>Mongodb</span>
        </div>
        <div className="skill-box" id="python" role="listitem">
          <img
            src="skills-img/python.png"
            alt="Python - Programming Language"
            loading="lazy"
          />
          <span>Python</span>
        </div>
        <div className="skill-box" id="cpp" role="listitem">
          <img
            src="skills-img/cpp.png"
            alt="C++ - Programming Language"
            loading="lazy"
          />
          <span>C++</span>
        </div>
        <div className="skill-box" id="java" role="listitem">
          <img
            src="skills-img/java.png"
            alt="Java - Programming Language"
            loading="lazy"
          />
          <span>Java</span>
        </div>
        <div className="skill-box" id="c" role="listitem">
          <img
            src="skills-img/c.png"
            alt="C - Programming Language"
            loading="lazy"
          />
          <span>C</span>
        </div>
        <div className="skill-box" id="nextjs" role="listitem">
          <img
            src="skills-img/nextjs.png"
            alt="Next.js - React Framework"
            loading="lazy"
          />
          <span>Next Js</span>
        </div>
        <div className="skill-box" id="typescript" role="listitem">
          <img
            src="skills-img/typescript.png"
            alt="TypeScript - Typed JavaScript"
            loading="lazy"
          />
          <span>TypeScript</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
